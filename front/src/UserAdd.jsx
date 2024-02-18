import React,{useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

function UserAdd() {
    const [users , setUsers] = useState({
        name: "",
        phone: "",
        password: "",
        userType: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setUsers((data) => ({...data, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        try{
            await axios.post("http://localhost:8080/create" , users);
            navigate("/");
        }
        catch(err){
            console.log(err);
        }
    };


  return (
    <div>
        <h1 className='underline underline-offset-4 text-slate-100 text-center text-[30px] font-semibold'> Add New Users</h1>
        <div>
            <form>
                <div className='field'>
                    <label className='label'>Full Name:</label>
                    <input type='text' className='form-input' name='name' onChange={handleChange}/>
                </div>

                <div className='field'>
                    <label className='label'>Phone Number:</label>
                    <input type='text' className='form-input' name='phone' onChange={handleChange}/>
                </div>

                <div className='field' >
                    <label className='label'>Password: </label>
                    <input type='password' className='form-input' name='password' onChange={handleChange}/>
                </div>

                <div className='field'>
                    <label className='label'>UserType:</label>
                    <input type='text' className='form-input' name='userType' onChange={handleChange}/>
                </div>

                <div className='field'>
                    <label className='label'>Email:</label>
                    <input type='email' className='form-input' name='email' onChange={handleChange}/>
                </div>

                <button type='submit' className='m-2 p-3 rounded-[10px] bg-green-500 text-white' onClick={handleSubmit}>Add User</button>
                <Link to='/' className='font-semibold text-sky-100 pl-7'>User List</Link>
            </form>
        </div>
    </div>
  )
}

export default UserAdd