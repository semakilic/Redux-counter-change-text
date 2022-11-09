import React,{useState} from 'react';
import {increment,decrement,incrementByAmount,changeTitle} from "../src/stroes/counter";
import {useDispatch} from "react-redux";
import {Button} from "react-bootstrap";


function CounterActions() {
    const dispatch=useDispatch();
    const [amount,setAmount]=useState(0);
    const [title,setTitle]=useState("");
    return (
        <div>
            <div>
                <Button onClick={()=>dispatch(decrement())} className="btn-amount-style">
                    Azalt (-)
                </Button>
                <Button onClick={()=>dispatch(increment())} className="btn-amount-style">
                    Arttır (+)
                </Button>
            </div>
            <div className="mt-2">
                <input type="number" className="input"  onChange={(e)=>
                    setAmount(e.target.value)}/>
                <Button onClick={
                    ()=>{
                        dispatch(incrementByAmount(Number(amount) || 0))
                    }
                }  className="btn-change">
                    Çoklu Arttır
                </Button>
            </div>
            <div className="mt-2">
                <input type="text" className="input" onChange={(e)=>setTitle(e.target.value)}/>
                <Button onClick={()=>dispatch(changeTitle(title))} className="btn-change">
                    Başlık Değiştir
                </Button>
            </div>


        </div>
    );
}

export default CounterActions;