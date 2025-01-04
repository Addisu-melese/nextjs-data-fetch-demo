"use client"

import { useEffect } from "react"

const ErrorPage = ({error}:{error:Error}) => {
    useEffect(()=>{
        console.log({error})
    },[error])
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage