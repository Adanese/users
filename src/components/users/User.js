import React, {useState, useEffect}  from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios'

const User = () =>
{

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    website: "",
  });

  

 useEffect(() => {
   loadUser();
 }, []);

   const loadUser = async () => {
     const result = await axios.get("http://localhost:3001/users");
     console.log(result);
     setUser(result.data);
   };



 return (
  <h1>View User</h1>
 )
};

export default User;