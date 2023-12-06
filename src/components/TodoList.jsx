

/*
export default function TodoList(){
  const [data, setData] = useState([])

    const fetchData = async () => {
      try {
        const collection = firestore.collection("Tareas");
        const snapshot = await collection.get();
        const newData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(newData);
      } catch (error) {
        console.error("Hubo un error al traer la informacion", error);
      }
    };

    fetchData();

    return(
      <>
      {data.map(task => (
        <Todo key={task.id}/>
      ))}
      </>
    )
  }*/
import { useState } from "react";
import { db } from '../../firestore.config.js';
import { collection, doc, getDocs } from "firebase/firestore";
import Todo from "./Todo";

const TodoList = () => {
 const [data, setData] = useState([]);

window.addEventListener("load", async () => {
  let newData= [];
  const coleccion = collection(db, "Tareas");
  const docs = await getDocs(coleccion);
  docs.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  setData(newData);
});

  return (
    <div>
      <ul>
        {data.map(task => (
          <Todo key={task.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
