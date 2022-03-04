import React,{useState} from 'react';
import './Generales.css'
import { Data } from './QR'
import styled from 'styled-components';
import { IconContext} from 'react-icons';
import { FiPlus, FiMinus} from 'react-icons/fi';

const AccordionSection= styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
height:1580px;
top:-60px;
background:#fcebc988;
background-image:url('https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
background-repeat:none;
background-size:cover;
`;
const Container= styled.div`
position:absolute;
border-radius:10px;
top:10%;
box-shadow:2px 10px 35px 1px rgab(153,153,153,0.3);
`;
const Wrap= styled.div`
background:rgb(242, 214, 173,0.6);
color:6c6c6c;
border-bottom-style:ridge;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
text-align:center;
cursor:pointer;

h2{
    padding:2rem;
    font-size:2rem;
}
`;
const Dropdown=styled.div`
background: rgb(220, 220, 220,0.8);
transition:all ease-in 0.5s;
color: #5c4216;
width:100%;
padding-left:20px;
padding-right:20px;
height:400px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
border-bottom:1px solid #5c4216;
border-top: 1px solid #5c4216;
p{
    font-size:25px;
    color:#302c2c;
}
`;
const Title= styled.div`
display:flex;
position:relative;
flex-direction:row;
align-items:center;
justify-content:center;
color:black;
top:50px;
height:60px;
z-index:10;
`;


export default function Generales(){
    const [clicked,setClicked]= useState(false);
    const style={color:'#5c4216'}
    const toggle= idx =>{
        if(clicked === idx){
            return setClicked(null);
        }
        setClicked(idx)
    }
    return(
        <div>
            <IconContext.Provider value={{color:'#00ffb9', size:'25px'}}>   
            <Title>
                  <h1 className='title_h1'>Preguntas Frecuentes</h1>
                 </Title>
                 <AccordionSection>
                    <Container>
                        {Data.map((item,idx)=>{
                            return(
                                <>
                                <div>
                                <Wrap onClick={()=>toggle(idx)} key={Math.random(idx)}>
                                    <h2>{item.question}</h2>
                                    <span>{clicked === idx ? <FiMinus style={style}/> : <FiPlus style={style}/>}</span>
                                </Wrap>
                                { clicked === idx ? (
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                                </div>
                                </>
                            )
                        })}
                    </Container>
                </AccordionSection>
            </IconContext.Provider>
        </div>
    )
}