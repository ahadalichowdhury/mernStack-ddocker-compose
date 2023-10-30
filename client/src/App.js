

import axios from 'axios';
import { useState } from 'react';
function App() {

  const [user,setUser]= useState([])
  axios.get(`http://54.172.237.132:5000/api/v1/user`).then((res)=>{
    setUser(res.data.data)
  })

  //http://54.172.237.132:5000/api/v1/user  this is for testing live backend url
  //http://localhost:5000/api/v1/user
  return (
    <div>
      hello world
      {user.map((data, index) => (
    <div key={index}>
        <h1>{data.email}</h1>
    </div>
))}
    </div>
  );
}

export default App;
