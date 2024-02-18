import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';


function Update() {
    const {id} = useParams();

    const navigate = useNavigate();

    const [users , setUsers] = useState({
        fullNname: "",
        phoneNumber: "",
        password: "",
        userType: "",
        email: "",
    });

    useEffect(() => {
        axios.get("http://localhost:8080/users/" +id)
        .then(res =>{
            setUsers(res.data[0]);
        })
        .catch(err => console.log(err))
    }, []);

    const handleChange = (e) =>{
        setUsers((data) => ({...data, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            await axios.put(`http://localhost:8080/users/${id}`, users);
            navigate('/');
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div>
        <h1 className='underline underline-offset-4 text-slate-100 text-center text-[30px] font-semibold'> Update User</h1>
        <div>
            <form>
                <div className='field'>
                    <label className='label'>Full Name:</label>
                    <input type='text' className='form-input' name='fullName' value={users.fullName} onChange={handleChange}/>
                </div>

                <div className='field'>
                    <label className='label'>Phone Number:</label>
                    <input type='text' className='form-input' name='phoneNumber' value={users.phoneNumber} onChange={handleChange}/>
                </div>

                <div className='field' >
                    <label className='label'>Password: </label>
                    <input type='password' className='form-input' name='password' value={users.password} onChange={handleChange}/>
                </div>

                <div className='field'>
                    <label className='label'>UserType:</label>
                    <input type='text' className='form-input' name='userType' value={users.userType} onChange={handleChange}/>
                </div>

                <div className='field'>
                    <label className='label'>Email:</label>
                    <input type='email' className='form-input' name='email' value={users.email} onChange={handleChange}/>
                </div>

                <button type='submit' className='m-2 p-3 rounded-[10px] bg-green-500 text-white' onClick={handleSubmit}>Update User</button>
                <Link to='/' className='font-semibold text-sky-100 pl-7'>User List</Link>
            </form>
        </div>
    </div>
  )
}

export default Update