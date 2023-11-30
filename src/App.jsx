import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import {
  Box
} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box backgroundImage="url('https://img.freepik.com/free-vector/background-gradient-green-tones_23-2148360340.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701043200&semt=ais')" style={{backgroundSize:"cover", width:"100%", height:"100vh"}}>
       <Header />
     <Form />
    </Box>
  )
}

export default App
