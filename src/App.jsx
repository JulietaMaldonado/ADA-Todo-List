import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { Box } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firestore.config.js";
import { useState } from "react";

function App() {
  const [TaskList, setTaskList] = useState([]);

  window.addEventListener("load", async () => {
    let data = [];
    const coleccion = collection(db, "Todos");
    const docs = await getDocs(coleccion);
    docs.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setTaskList(data);
  });

  const onClose = (id) => {
    const TaskDelete = TaskList.filter(Task =>
      Task.id !== id
     )
     setTaskList(TaskDelete)
    }


  return (
    <Box
      backgroundImage="url('https://img.freepik.com/free-vector/background-gradient-green-tones_23-2148360340.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701043200&semt=ais')"
      style={{ backgroundSize: "cover", width: "100%", height: "100vh" }}
    >
      <Header />
      <Form TaskList={TaskList} onClose={onClose}/>
    </Box>
  );
}

export default App;