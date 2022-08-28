import axios from 'axios';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('data.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <Main data={data} />
    </div>
  );
};

export default Home;
