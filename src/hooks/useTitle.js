import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
      document.title = `Doll House- ${title}`
    },[title])
}

export default useTitle;