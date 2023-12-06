import { useState } from "react";
import { db } from '../../firestore.config.js';
import { collection, doc, getDocs } from "firebase/firestore";
import Todo from "./Todo";

const TodoList = ({TaskList, onClose}) => {
 const [data, setData] = useState([]);

window.addEventListener("load", async () => {
  let newData= [];
  const coleccion = collection(db, "Todos");
  const docs = await getDocs(coleccion);
  docs.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id, name: doc.id.name });
  });
  setData(newData);
});


  return <>
    <div>
        {TaskList ? TaskList.map((Task) => (
          <Todo key={Task.id} id={Task.id} name={Task.name} onClose={onClose}/>
        )): alert("No hay tareas")}
    </div>
    </>
};

export default TodoList;
