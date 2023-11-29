import styles from "./styles.module.css"
import { Heading } from '@chakra-ui/react'

export default function Header(){
    return <>
    <Heading style={{height: "fit-content", padding: "10px", marginLeft: "auto", marginRight: "auto"}}>
        <h1 className={styles.pageTitle}>Todo List</h1>
    </Heading>
    </>
} 