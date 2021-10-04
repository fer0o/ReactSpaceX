import {useEffect,useState} from'react'
import { fetchHistory } from './api/api';
import './App.css';
import DateInput from './components/DateInput';
import MissionCard from './components/MissionCard';


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
      <h1 className="title">Misiones SpaceX 🚀 </h1>
      <div className="filters">
        <br />
        <DateInput
          label="Start Date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <DateInput
          label="End Date"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="mission-list">
        {data.map((item, idx) => {
          return <MissionCard key={idx} mission={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
