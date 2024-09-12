import {useEffect,useState} from "react"

function useTranslator(texts,targetLanguage,sourceLanguage ="en"){
    const [translatedText,setTranslatedText]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const translateText = async ()=>{
          setLoading(true)
          setError(null)

          const url='ttps://libretranslate.com/translate';
          const options={
            method:'POST',
            headers:{
               "Content-Type": "application/json"
            },
            body:JSON.stringify({
              q: texts,
              source: sourceLanguage,
              target: targetLanguage
            })
          };

          try{
             const response = await fetch(url,options);
             if(!response.ok){
                throw new Error('Translation request failed')
             }
             const result = await response.json();
             setTranslatedText(result.translatedText)
          }catch (error){
             setError(error.message);
             console.log("fetch failed: " + error.message);
             
          }finally{
             setLoading(false)
          }
        }

        if(texts && targetLanguage){
          translateText()
        }
    },[texts,targetLanguage,sourceLanguage])

    return [translatedText,loading,error]
  }

export default useTranslator