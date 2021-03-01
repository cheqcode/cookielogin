import {useState, useEffect} from 'react'
import axios from 'axios'
import NormalUser from '../components/NormalUser';
import Admin from '../components/Admin';
import Mod from '../components/Mod';

const Main = () => {
    const [role, setRole]=useState("")
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get("http://localhost:4000/login").then((response)=>{
            if(response.data.loggedIn === true){  
                setRole(response.data.user[0].role)
                console.log(response)
            }
        })
    },[])
    return (
        <div>
        {role==="User" && <NormalUser/>}
        {role==="Admin"&& <Admin />}
        {role==="Mod" && <Mod />}
        </div>
    )
}

export default Main
