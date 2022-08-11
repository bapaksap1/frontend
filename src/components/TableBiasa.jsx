import React, { useEffect, useState } from 'react'
import './tablebiasa.css'



const TableBiasa = (props) => {
  const[search, setSearch] = useState('')
  const data = props.data.filter((val)=>val.name?.toLowerCase().includes(search.toLowerCase()));
  // useEffect(() => {
  //   console.log(props.data)
  //   console.log("Di bawah ini adalah console email")
  //   console.log(props.data)
  // }, [props.data])
  // console.log(props.data)
  
  return (
    <div>
      {/* <input type="text" placeholder="Search..." onChange={(event) => {setSearch(event.target.value)}}/>
      {props?.data.filter((val) =>{
        if(search === ""){
          return val;
        } else if (val.name?.toLowerCase().include(search.toLowerCase)){
          return val;
        }
      }).map((prop) => {
        return <p>{prop.name}</p>
      })} */}
        <table>
        <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
            </tr>
        </thead>
        <tbody>    
            {props?.data.map((prop) => {
            return <tr>
            <td>{prop.name}</td>
            <td>{prop.email}</td>
          </tr>
            })}
        </tbody>
        </table>

     
      {/* <pre>{JSON.stringify(props?.data, null, 2)}</pre> */}
      {/* <h2>{JSON.stringify(props?.data, null, 2)}</h2> */}
    </div>
  )

}

export default TableBiasa;