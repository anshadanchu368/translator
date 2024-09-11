import {useEffect,useState} from "react"

function useTranslator(texts,targetLanguage,sourceLanguage ="en"){
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const translateText = async ()=>{
          setLoading(true)
          setError(null)

          const url='https://ai-translate.p.rapidapi.com/translateHtml';
          const options={
            method:'POST',
            headers:{
              'x-rapidapi-key': '8bbf05a656mshcf69903c07c9fc4p1182f3jsn1e3b6b583ea5',
              'x-rapidapi-host': 'ai-translate.p.rapidapi.com',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              texts:texts,
              tl:targetLanguage,
              sl:sourceLanguage
            })
          };

          try{
             const response = await fetch(url,options);
             if(!response.ok){
                throw new Error('Translation request failed')
             }
             const result = await response.json();
             setData(result)
          }catch (error){
             setError(error.message);
          }finally{
             setLoading(false)
          }
        }

        if(texts && texts.length>0 && targetLanguage){
          translateText()
        }
    },[texts,targetLanguage,sourceLanguage])

    return [data,loading,error]
  }

export default useTranslator