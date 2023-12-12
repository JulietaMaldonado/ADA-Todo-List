import { useState } from 'react';
import Todo from './Todo';

export default function Form({TaskList, setTaskList, onClose}){

const [filter, setFilter] = useState("todas");

 return <>
   <form style={{display: "flex", flexDirection: "row", width: "80%", margin: "auto"}}>
    <div style={{display: "flex", flexDirection: "column",width:"50%", margin: "20px"}}>
    <label style={{color:"white", fontFamily:"Smooch Sans", fontSize:"25px"}}>Tarea</label>
    <input type='text' style={{color:"black", fontFamily:"Roboto", fontSize:"20px", padding:"15px", borderRadius:"10px"}} placeholder="Ingresa una tarea"/>
    </div>

    <div style={{display: "flex", flexDirection: "column",width:"50%", margin: "20px"}}>
  <label style={{color:"white", fontFamily:"Smooch Sans", fontSize:"25px"}}>Estado</label>
    <select onChange={(e) => setFilter(e.target.value)} style={{color:"black", fontFamily:"Roboto", fontSize:"20px", padding:"15px" , borderRadius:"10px"}}>
        <option value="Todas">Todas</option>
        <option value="Completa">Completas</option>
        <option value="Incompleta">Incompletas</option>
      </select>
    </div>

       <button style={{margin:"auto", backgroundColor:"red", padding:"10px", color:"white", borderRadius:"10px"} } type="submit">Enviar</button>

   </form>
   <div>
    
   </div>
    {TaskList
        .filter((Task) => {
          if (filter === "Completa" && filter === "Incompleta") {
            return Task.state === filter;
          } else if (filter === "Completa" || filter === "Incompleta"){
            return Task.state === filter;;
          }
        })
        .map((Task) => (
          <Todo
            key={Task.id}
            id={Task.id}
            name={Task.name}
            state={Task.state}
            onClose={onClose}
          />
        ))}
    </>
}