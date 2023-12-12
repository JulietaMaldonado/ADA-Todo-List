import { Card, CardHeader, CardBody, CardFooter, Button, Text, Box } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons'

export default function Todo({id, name, onClose}){

    return <Box style={{marginTop: "15px"}}>
  <Card style={{width:"40%", marginLeft: "auto", marginRight: "auto"}} key={id}>
  <CardBody>
    <Text>{name}</Text>
    <Button><Icon as={CheckIcon}/>
   </Button>
    <Button onClick={() => onClose(id)}> <Icon as={DeleteIcon}/></Button>
  </CardBody>
</Card>
   </Box>
} 