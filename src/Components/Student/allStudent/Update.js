import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updatePost } from '../../../reducer/action/Action';


const Update = () => {

    const {id} = useParams();
    const posts = useSelector(state => state.posts. data)
    const existingUser = posts.filter(f => f.id == id);
    const {sr,Firstname,Lastname,Doa,Classname,Dob,Age,Gender,Board } = existingUser[0]; 
    const [usr, setSr] = useState(sr) 
    const [ufirst, setFirst] = useState(Firstname)
    const [ulast,setLast] = useState(Lastname)
    const [udoa,setDoa] = useState(Doa)
    const [uclassname,setClassname] = useState(Classname)
    const [udob,setDob] = useState(Dob)
    const [uage,setAge] = useState(Age)
    const [ugender,setGender] = useState(Gender)
    const [uboard,setBoard] = useState(Board)


    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updatePost({
            id:id,
            sr:usr,
            firstname: ufirst,
            lastname:ulast,
            doa:udoa,
            classname:uclassname,
            dob:udob,
            age:uage,
            gender:ugender,
            board:uboard


        }))
        navigate("/postlist")
    }

  return (
    <div className='d-flex w-100 vh-50 justify-content-center align-items-center mt-5 pt-5' >
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3 >Update user</h3> <br/>
        <form onSubmit={handleUpdate}  >
        <div>
                <label htmlFor='text' >Sr</label>
                <input type='text' name='text' className='form-control'
                value={usr} onChange={e => setSr(e.target.value)}   />
            </div>  
            <div>
                <label htmlFor='text' >First Name</label>
                <input type='text' name='text' className='form-control'
                value={ufirst} onChange={e => setFirst(e.target.value)}   />
            </div>
            <div>
                <label htmlFor='text' >Last Name</label>
                <input type='text' name='text' className='form-control'
               value={ulast} onChange={e => setLast(e.target.value)} />
            </div>
            <div>
                <label htmlFor='text' >Doa</label>
                <input type='text' name='text' className='form-control'
               value={udoa} onChange={e => setDoa(e.target.value)} />
            </div>
            <div>
                <label htmlFor='text' >Class</label>
                <input type='text' name='text' className='form-control'
               value={uclassname} onChange={e => setClassname(e.target.value)} />
            </div>
            <div>
                <label htmlFor='text' >Dob</label>
                <input type='text' name='text' className='form-control'
               value={udob} onChange={e => setDob(e.target.value)} />
            </div>
            <div>
                <label htmlFor='text' >Age</label>
                <input type='text' name='text' className='form-control'
               value={uage} onChange={e => setAge(e.target.value)} />
            </div>
            <div>
                <label htmlFor='text' >Gender</label>
                <input type='text' name='text' className='form-control'
               value={ugender} onChange={e => setGender(e.target.value)} />
            </div>

            <div>
                <label htmlFor='text' >Board</label>
                <input type='text' name='text' className='form-control'
               value={uboard} onChange={e => setBoard(e.target.value)} />
            </div>
            
            
            
            <br/>
            
            <button className='btn btn-info' >Update</button>
        </form>

    </div>
  
</div>
  )
}

export default Update

