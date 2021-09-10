export const getAllMissions = async () => {
    try {
      let url = "https://api.spacexdata.com/v3/missions";
      //se usa await debido a que es una funcion asincron y necesitamos que nos responda
      const response = await fetch(url);
      //obtener informacion en formato json y es un diccionario de info  que tenemos y esta en un array
      const data = await response.json();
      return data;
    } catch (err) {
      console.err(err);
    }
  };
  