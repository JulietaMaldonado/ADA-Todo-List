import { Card, CardHeader, CardBody, CardFooter, Button, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons'
import {db} from '../../firestore.config.js'
import {collection, getDocs} from "firebase/firestore"
import { useState } from 'react'

export default function Todo({tasks}){
  const [todos, setTodos] = useState([])

  async function consultDocuments() {
    const collections = collection(db, "Tareas");
    const docs = await getDocs(collections);
    docs.forEach((doc) => {
    setTodos([...doc, {...doc.data(), id: doc.id}])
    })
  }

    return <>
   <Card style={{width:"40%", marginLeft: "auto", marginRight: "auto"}}>
  <CardBody>
    <Text>{tasks.id.name}</Text>
    <Button><Icon as={CheckIcon}/>
   </Button>
    <Button> <Icon as={DeleteIcon}/></Button>
  </CardBody>
</Card>
    </>
} 