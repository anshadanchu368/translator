import {useEffect,useState} from "react"

function useTranslator(target){
    const [data,setData]=useState({})
     useEffect(()=>{
          fetch("https://libretranslate.com/translate",{
            method: "POST",
            body: JSON.stringify({
                q: "",
                source: "auto",
                target: `${target}`,
                format: "text",
                alternatives: 3,
                api_key: ""
            }),
            headers: { "Content-Type": "application/json" }
          }).
     },[target])
     return data
}

export default useTranslator