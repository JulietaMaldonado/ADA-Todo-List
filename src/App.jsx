import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import {
  Box
} from '@chakra-ui/react'
import TodoList from './components/TodoList'
import {collection, getDocs} from "firebase/firestore"
import db from '../firestore.config'

function App() {
  async function consultDocuments() {
    const collections = collection(db, "Tareas");
    const docs = await getDocs(collections);
    docs.forEach((doc) => {
setTodos([...TodoList, {...doc.data(), id: doc.id}])

    })
  }

  return (
    <Box backgroundImage="url('https://img.freepik.com/free-vector/background-gradient-green-tones_23-2148360340.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701043200&semt=ais')" style={{backgroundSize:"cover", width:"100%", height:"100vh"}}>
       <Header />
     <Form />
     <TodoList/>
    </Box>
  )
}

export default App
