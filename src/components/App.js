import React, { useEffect, useMemo, useState } from "react";


const App = ()=>{

    const [todo, setTodo] = useState([]);


    function handleTodo(){
        setTodo([...todo, "New Todo"])
    }

    const [count,setcount] = useState(0);
    const increase = () => {
        setcount(count+1);
    }

    let result = useMemo(()=>{
            return count*2;
    },[count])

    const [input,setinput] = useState("");
    const oninput = (e) => {
        const {value} = e.target;
        setinput(value);
    }
    const [list,setlist] = useState([]);

    const onAddskill = ()=>{
        if(input.trim().length >5){
            setlist((prev) => [...prev,(input.trim())]);
        }
    }

    return(
        <div id="main">
            <h2>My Todos</h2>
            <button id="add-todo-btn" 
            onClick={handleTodo}> Add Todo </button>
            {
                todo.map((item, index)=>{
                    return(
                        <p id="todo-0" key={index}>{item}</p>
                        
                    )
                })
            }
            <hr />
            <div>
                <span>count:{count}</span>
                <button onClick={increase}>+</button>
            </div>
            <h2>Expensive Calculation</h2>
            {result}
            <hr />
            <hr />
            <h2>React.memo</h2>
            <input value={input} onChange={oninput} placeholder="enterlistitem" />
            <button onClick={onAddskill}>Add Skill</button>
            <ul>
                {
                    list.map((i,index) => {
                        return(<li key={index}>
                            {i}
                        </li>
                        )
                    })
                }
                
            </ul>
        </div>  
    )
}

export default App;
