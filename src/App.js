import React from "react";
import './App.css'
import { useState } from "react";

const App = () => {
    const [display,setdisplay]=useState('0')
    const [num,setnum]=useState('')
    const [op,setop]=useState('')

    const handlenum=(digit) => {
        if(display === '0' || op){
            setdisplay(digit);
        }
        else{
            setdisplay(display + digit);
        }
    }
    const handleop=(operator)=>{
        if(!op){
        setop(operator);
        setnum(display);
        setdisplay(operator);
        }        
    }
    const setequal=()=>{
        setdisplay(String(eval(`${num} ${op} ${display}`)));
        setop('');
        setnum('');
    }


    return(
        <>
        <div className="calculator">
            <div className="output">{display}</div>
            <div className="buttons">
            {
                [9,8,7,'+',6,5,4,'-',3,2,1,'*','/',0,'='].map(item => {

                    return <button
                        onClick={()=>{
                            if( typeof item === 'number'){
                                handlenum(String(item));
                            }
                            else if (item === '='){
                                setequal();
                            }
                            else{
                                handleop(item);
                            }
                        }}
                        key={item}
                        >{item}</button>
                })
            }
            <button onClick={()=> {setdisplay('0'); setnum(''); setop('')}}>CLEAR</button>
            </div>
        </div>
        </>
    )
}
export default App;