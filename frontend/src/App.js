import React, { useEffect, useState } from 'react';
import {getData} from './api/api'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await getData();
        setData(apiData);
      } catch (error) {
        console.log('data error', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      {data? Object.values(data).map(item=> (
        <p >{item}</p>
      )): 'no values '}
    </div>
  );
}

export default App;
