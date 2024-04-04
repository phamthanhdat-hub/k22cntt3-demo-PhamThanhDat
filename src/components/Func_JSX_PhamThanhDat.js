import React from "react"
export default function Func_JSX_PhamThanhDat(props){
    const users={
        name:"Pham Thanh Dat",
        age:20
    };
    return(
        <div>
        <h2> Function Componest Demo </h2>
        <h3>
        Welcome to , {users.name} . {users.age}
        </h3>
        <hr/>
        <h3>Props:
            <br/>fullname: {props.fulname}
            <br/>age: {props.age}
        </h3>
        </div>
    )
}

