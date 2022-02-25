import React,{useRef,useState} from 'react';
import {useEffect} from 'react'

export const RegularInput=({names,label,type,msgError})=>{
    const [value,setValue]=useState({
        val:'',
        ok:undefined,
    })
    const inputConter=useRef();
    const focusIn=()=>{
        inputConter.current.classList.add('label-up');
    }
    const focusOut=()=>{
        if(!value.val){
            inputConter.current.classList.remove('label-up');
        }
        
    }
    const handleChange=({target:{value}})=>{
        setValue({val:value,ok:validated(type,value)})
    }

    useEffect(()=>{
        if(value.ok === undefined){
            return
        }
        if(value.ok){
            inputConter.current.classList.add('input-ok')
            inputConter.current.classList.remove('input-wrong')
        }else{
            inputConter.current.classList.remove('input-ok')
            inputConter.current.classList.add('input-wrong')
        }
    },[value])
    return(
        <div className='input-conter' ref={inputConter}>
        <label htmlFor={names}>{label}</label>
        <input
        value={value.val}
        autoComplete="off"
        className="inp"
        type={type}
        id={names}
        onFocus={focusIn}
        onBlur={focusOut}
        onChange={handleChange}
        />
        {/* <i className="fa-solid fa-check icon-ok"></i>
        <i className="fa-solid fa-times icon-wrong"></i> */}
        <p className="msg">{msgError}</p>
        </div>
    )
}

const validated=(type,value)=>{
    switch(type){
        case 'text':
            if(!/\d/g.test(value) && value.length >1){
                return true
            }else{
                return false
            }
        case 'email':
            let part1=value.split('@');
            let part2=part1[1] && part1[1].split('.');
            if(part1 && part1.length === 2 && part2 && part2[1]==='com'){
                return true;
            }
            else{
                return false
            }
        case 'password':
            if(/\d/g.test(value) && /[A-Z]/g.test(value) && !/[a-z]/g.test(value) && value.length > 7){
                    return true
            }else{
                    return false
                }
        default:
            break;
    }
}
