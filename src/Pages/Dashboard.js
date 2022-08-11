import axios from 'axios'
import jwtDecode from 'jwt-decode'
import BasicTable from '../components/Table'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import TableBiasa from '../components/TableBiasa'
import Table from '../components/Table'
import styled from "styled-components";


const Dashboard = () => {
  //login only
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();

  //user list table
  const [data, setData] = useState([])
  const [show, setShow] = useState(false)
  const [q, setQ] = useState("")

  useEffect(()=>{
    // console.log(data)
  }, [data])

const refreshToken = async() => {
  try {
      const response = await axios.get("http://localhost:5000/token")
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken)
      setName(decoded.name);
      setExpire(decoded.exp);
  } catch (error) {
      if(error.response){
        navigate("/login");
      }

  }
}

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async(config)=>{
    const currentDate = new Date();
    if(expire * 1000 < currentDate.getTime()){
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken)
      setName(decoded.name);
      setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
     return Promise.reject(error);
  });

  const getAllUsers = async() => {
    setLoading(true);
    setTimeout(async() => {
    try {
      const response = await axios.get('http://localhost:5000/allusers');
      console.log(response.data)
      setData(response.data);
        
    } catch (error) {
      
    
    }finally{      
      setLoading(false);
    }}, 1000)
    

  }



  function search(rows){
    return rows.filter(row => row.name.toLowerCase().indexOf(q) > -1)
  }

  return (
    <Main>
    
      {/* <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
      <TableBiasa data={search(data)}/>       */}
      <h1 className="title">Welcome Back: {name} </h1>
      <Button onClick={() => getAllUsers()} className='button is-info'>
      Get Users
      </Button>
      {/* <Table data={data}/> */}
      {/* {show && data?.map((isi) => <h2 key={isi.id}>{isi.email}</h2>) } */}
      {!loading && data.length > 0 && <Table data={data} /> } 
      {/* <Table data={data} /> */}
      
{/* 
      <button onClick={() => {document.getElementById("test").innerHTML = "HALAW"}}>Click me</button>
      <p id="test"></p> */}
      {loading && <LoadingWrapper><Loading/></LoadingWrapper>}
    </Main>
  )
}

export default Dashboard;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Loading = styled.div`
min-width: 120px;
min-height: 120px;
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid #3498db;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 2s linear infinite;

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

const LoadingWrapper = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: fit-content;
`;