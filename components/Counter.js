import React from 'react';
import {useSelector} from "react-redux";

function Counter() {
    const count=useSelector(state=>state.counter.value)
    const title=useSelector(state=>state.counter.title)
    return (
        <div>
            <span className="text-bold mt-2">Sayaç : </span><span>{count}</span><br/>
            <span className="text-bold mt-2">Başlık : </span><span>{title}</span>
        </div>
    );
}

export default Counter;