import { useEffect, useState } from "react"
import Button from "../atomic/Button";


const Count = () => {
  const [count , setCount] = useState<number>(0);

  useEffect( () => {
    console.log("El componente se monto.")
  },[])

  useEffect( () => {
    console.log(`El componente cambio su valor: ${count}`)

    return () => {
      console.log('Limpieza luego del cambio')
    }
  },[count])
  
  return (
    <>
     <p>Contador : {count} </p>
     <Button label="Click me" handleClick={() => setCount(count + 1)}/>
    </>
  )
}

export default Count
