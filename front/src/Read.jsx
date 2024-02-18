import React from 'react';
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function Read() {

    const {id} = useParams();

    const [users, setUser] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8080/users/"+id)
        .then(res=> {
            console.log(res.data);
            setUser(res.data[0]);
        })
        .catch(err => console.log(err));
    }, []);

  return (
    <div className='bg-slate-100/50 p-4 rounded-lg w-[50vw]'>
        <h1 className='underline underline-offset-4 text-slate-100 text-center text-[30px] font-semibold mb-5'>User Details</h1>
        <div className=''>
        <div className='fields'>
                    <label className='readlbel'>Full Name:</label>
                    <h2>{users.fullName}</h2>
                </div>

                <div className='fields'>
                    <label className='readlbel'>Phone Number:</label>
                    <h2>{users.phoneNumber}</h2>
                </div>

                <div className='fields' >
                    <label className='readlbel'>Password: </label>
                    <h2>{users.password}</h2>
                </div>

                <div className='fields'>
                    <label className='readlbel'>UserType:</label>
                    <h2>{users.userType}</h2>
                </div>

                <div className='fields mb-5'>
                    <label className='readlbel'>Email:</label>
                    <h2>{users.email}</h2>
                </div>

                <Link to='/' className='font-semibold text-sky-100  ml-20'>User List</Link>
        </div>
    </div>
  )
}

export default Read