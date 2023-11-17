import React, { useState } from 'react'
import './user.scss';

    
function Users (){
    const [input, setInput] = useState({
        name : '',
        designation: '',
        doj : '',
        department : ''
    });
    const inputHanlder = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }
    const submitHanlder = (e) => {
        e.preventDefault();
        console.log(input)
    }
    return(<>
        <div className='form-container'>
        <div className="form-wrapper">

        <form action="">
            <h1>Complete the Form</h1>
            <div className=''>
                <div className="">
                    <input type="text" name='name' onChange={(e)=> inputHanlder(e)} value={input.name} placeholder='Enter Name' />
                </div>
                <div className="">
                    <input type="text" onChange={(e)=> inputHanlder(e)} name='designation' value={input.designation}  placeholder='Enter Designation' />
                </div>
            </div>

            <div className=''>
                <div className="">
                    <input type="text" onChange={(e)=> inputHanlder(e)} name='doj' value={input.doj}  placeholder='Date of Joining' />
                </div>
                <div className="">
                    <input type="text" onChange={(e)=> inputHanlder(e)} name='department' value={input.department}  placeholder='Enter Department' />
                </div>
            </div>
    
            <button onClick={(e)=> submitHanlder(e)}>submit</button>
        </form>
        </div>
    </div>
        
    </>
    )
}
export default  Users;