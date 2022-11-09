import React from 'react';
import {useSelector} from "react-redux";

function Header() {
    const semasite=useSelector(state=>state.sema)
    console.log(semasite)
    return (
        <div>header</div>
    );
}

export default Header;