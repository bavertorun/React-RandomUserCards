import { useEffect, useState } from "react"
import axios from "axios"
// COMPONENTS
import SingleUser from "./SingleUser"

const UserList = () => {

    const [usres,setUsers] = useState([])

    const fetchUser = async()=>{
        const res = await axios.get('https://randomuser.me/api/?results=100')
        setUsers(res.data.results)
    }

    useEffect(()=>{
        fetchUser()
    },[])

    return (
        <div className="user-list">
            <ul>
            {usres.map((user,i)=>(
                <li key={i}><SingleUser user={user}/></li>
            ))}
            </ul>
        </div>
    )
}

export default UserList