import  { useState } from "react"

import {  Button, TextField } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import './Nav-filter.css'



const useStyles = makeStyles((theme) => ({
  textFieldCity:{
    marginLeft:'15px',
    width: '150px'
  },
  textFieldMoney:{
    width: '150px'
  },
  buttonMoreOrLess:{
    padding: '0',
    width:'1px',
    height: '25px',
    
  }
}));



const NavFilterProperty =()=>{

  const clases= useStyles()

  const [input, setInput] = useState({
    maximum_budget:'',
    rooms:'',
    typeProperty:'',
    location:''
  });


  const handleChange=(e)=>{

    const filtro = 'abcdefghijklmnñopqrstuvwxyz ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    const filtroNumber= '0123456789'
    
    const {value}= e.target

    if(e.target.name =='location'){
      for(let i =0; i< value.length; i++){
        if(filtro.indexOf(value[i]) === -1){
          return document.getElementById('city').value= input.location
        }
      }
    }else{
      for(let i =0; i< value.length; i++){
        if(filtroNumber.indexOf(value[i]) === -1){
          return document.getElementById('money').value= input.location
        }
      }
    }
    console.log('holi')
    setInput({...input, [e.target.name]:e.target.value});
    
  }


  const changeRooms=(e)=>{

    if(e.target.innerText === '+' && input.rooms < 7){
      return setInput({...input, rooms: Number(input.rooms) +1})
    }
    else if( e.target.innerText === '-' && input.rooms > 0 ){
      setInput({...input, rooms: Number(input.rooms) -1})
    }

  }


  const search=()=>{
    console.log(input)
  }



  return(
    <div>
      <div className="ContainerNavFilter">
        <TextField
          id='money'
          name="maximum_budget"
          label="Presupuesto maximo"
          value={input.maximum_budget}
          onChange={handleChange}
          variant="standard"
          className={clases.textFieldMoney}
        />
        <TextField
          id='city'
          name="location"
          label="Ciudad"
          value={input.location}
          onChange={handleChange}
          variant="standard"
          className={clases.textFieldCity}
        />
        <select className="selectType navFilterAll" onChange={handleChange} name="typeProperty">
          <option>Todo</option>
          <option>Casa</option>
          <option>Apartamento</option>
          <option>Local</option>
          <option>Finca</option>
        </select>
        <div className="ContainerRooms navFilterAll" >
          <p className="pRomms">Habitaciones</p>
          <div>
            <Button  variant="outlined" onClick={changeRooms} className={clases.buttonMoreOrLess} >+</Button>
            {
              input.rooms > 0 ? input.rooms : <span>Todos</span> 
            }
            <Button  variant="outlined"  onClick={changeRooms} className={clases.buttonMoreOrLess} >-</Button>
          </div>
        </div>
      </div>
        <div className="containerSearch" >
          <Button className="search" size="medium" variant="contained"  onClick={search} >Buscar</Button>
        </div>

    </div>
  )
}

export default NavFilterProperty
