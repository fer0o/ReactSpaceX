import {useEffect,useState} from'react'
import { fetchHistory } from './api/api';
import './App.css';


function App() {
  /*declaracion  de los useState*/
  const [startDate,setStartDate]= useState(null);
  const [endDate,setEndDate]= useState(null);
  const [data,setData] = useState([]);
/*utilizacion de useState*/ 
  const getHistory = async()=>{
    const history = await fetchHistory({
      start:startDate,
      end:endDate
    })
    setData(history);
  }

  /*Creacion de useEffect*/
  useEffect (()=>{
    getHistory()

  },[startDate,endDate])


  return (
    
    <div>
      <h1>Misiones SpaceX</h1>
      <label>Start Date</label>
      <input type="date" onChange={(e)=>{ setStartDate(e.target.value)}}/>
      <br/>
      <label>End Date</label>
      <input type="date" onChange={(e)=>{setEndDate(e.target.value)}}/>
      <ul>
        {data.map((item,idx)=>{
          return <li key={idx}>{item.title}</li>
        })}
      </ul>
    </div>

  );
}

export default App;
