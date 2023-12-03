import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Button,
    Icon
  } from '@chakra-ui/react'


export default function Form(){
    return <>
   <form style={{display: "flex", flexDirection: "row", width: "80%", margin: "auto"}} onSubmit={(e) => {
    e.preventDefault();
    add(todoElement)
   }}>
     <FormControl style={{display: "flex", flexDirection: "column",width:"50%", margin: "20px"}}>
    <FormLabel style={{color:"white", fontFamily:"Smooch Sans", fontSize:"25px"}}>Tarea</FormLabel>
    <Input type='text' style={{color:"white", fontFamily:"Roboto", fontSize:"20px"}} placeholder="Ingresa una tarea" />
    </FormControl>
    <FormControl style={{display: "flex", flexDirection: "column",width:"50%", margin: "20px"}}>
    <FormLabel style={{color:"white", fontFamily:"Smooch Sans", fontSize:"25px"}}>Seleccionar</FormLabel>
    <Select style={{color:"white", fontFamily:"Roboto", fontSize:"20px"}}>
    <option value="todas">Todas</option>
    <option value="completas">Completas</option>
    <option value="incompletas">Incompletas</option>
    </Select>
    </FormControl>
       <Button style={{margin:"auto"}}>Enviar</Button>
   </form>
    </>
} 