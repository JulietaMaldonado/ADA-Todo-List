import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons'

export default function Todo(){
    return <>
   <Card>
  <CardBody>
    <Text></Text>
    <Button><Icon as={CheckIcon}/>
   </Button>
    <Button onClick={() => onClose(id)}> <Icon as={DeleteIcon}/></Button>
  </CardBody>
</Card>
    </>
} 