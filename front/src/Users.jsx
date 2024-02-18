import React, { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        const fetchUsers = async() =>{
            try{
                const res = await axios.get("http://localhost:8080/users");
                setUsers(res.data);
            }
            catch(err){
                console.log(err);
            }
        };
        fetchUsers();
    },[]);

    const handleDelete = async(id) =>{
        try{
            await axios.delete(`http://localhost:8080/users/${id}`);
            window.location.reload();
        }
        catch(err){
            console.log(err);
        }
    };

  return (
    <div className='w-[70vw]'>
        <div className=''>
            <h1 className='underline underline-offset-4 text-slate-100 text-center text-[30px] font-semibold'>React User List CRUD</h1>
            <div className=''>
                <Link to='/add' className='bg-lime-200 px-3 py-2 rounded boder-2 border-green-800' >ADD +</Link>
                <table className='mt-4 bg-slate-100/50 rounded'>
                    <thead>
                        <tr className='h-10 bg-slate-500/60 text-slate-50'>
                            <th className='px-3 w-[17%]'>Full Name</th>
                            <th className='px-3 w-[15%]'>Phone Number</th>
                            <th className='px-3 w-[13%]'>User Type</th>
                            <th className='px-3 w-[30%]'>Email</th>
                            <th className='px-3 w-[30%]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((users, index) =>{
                                return (
                                    <tr  className={`${index%2 === 0? 'bg-gray-200': 'bg-gray-300'} h-10`} key={index} >
                                        <td className='px-3'>{users.fullName}</td>
                                        <td className='px-3'>{users.phoneNumber}</td>
                                        <td className='px-3'>{users.userType}</td>
                                        <td className='px-3'>{users.email}</td>
                                        <td className='px-3 text-white'>
                                            <Link to={`/read/${users.userId}`} className='bg-stone-600 px-3 py-1 rounded mx-1'>Read</Link>

                                            <Link to={`/update/${users.userId}`} className='bg-cyan-600 px-3 py-1 rounded mx-1'>Update</Link>

                                            <button onClick={() => handleDelete(users.userId)} className='bg-rose-600 px-3 py-1 rounded mx-1'>Delete</button>

                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Users