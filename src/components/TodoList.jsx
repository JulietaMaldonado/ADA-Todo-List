import Todo from "./Todo";

export default function TodoList({todos}){
    return(
         <div style={{width:"70%", display:"flex", flexDirection:"column"}}>
            <Todo/>
    </div>
    )
} 