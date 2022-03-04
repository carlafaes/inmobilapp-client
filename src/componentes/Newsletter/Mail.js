import React,{useState} from 'react';
import { sendMail } from './helper/mail';

export default function Mail(){
    const [values,setValues]= useState({
        userEmail:'',
        message:'',
        status:false
    })

    const {userEmail,message,status}=values;
    const handleChange= name=>event=>{
        setValues({...values,[name]:event.target.value})
    }
    const handleSubmit=e=>{
        e.preventDefault();
        console.log('values email',userEmail);
        console.log('values message',message);
        sendMail({userEmail,message}).then(data=>{
            if(data.err){
                console.log('error',data.err)
            }else{
                console.log('succes',data)
                setValues({...values,status:true})
            }
        }).catch(console.log('error in send email'))
    }

    return(
        <>
        <h1>Send Email</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type='text' placeholder='enter your email' value={userEmail} onChange={handleChange('userEmail')} />
            </label>
            <label>
                msg:
                <input type='text' placeholder='enter your msg' value={message} onChange={handleChange('message')} />
            </label>
            <button type='submit'>send</button>
        </form>
        {
            status ? <div><h2>send succesfully</h2></div>: <div></div>
        }
        </>
    )
}

// export default Mail;