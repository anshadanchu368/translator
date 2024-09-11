import React ,{useState,Suspense} from "react";
import {InputBox} from "./components"
import EarthCanvas from "./components/Earth";
import useTranslator from "./hooks/useTranslator";
import './App.css'

const App = () => {
   const [texts,setTexts]=useState("")
   const  [targetLanguage,setTargetLanguage]=useState("ar")
   const [sourceLanguage,setSourceLanguage] =useState("eng")
   const [translatedText,setTranslatedText]=useState("")

   const TranslatedInfo =useTranslator(texts,sourceLanguage,targetLanguage)
 
    const options=Object.keys(TranslatedInfo)    //getting keys from data got from TranslatedInfo
     
    const swap =()=>{
      setTargetLanguage(sourceLanguage)
      setSourceLanguage(targetLanguage)
      setTranslatedText(texts)
      setTexts(translatedText)
    }

  return (
    <div className="min-h-screen w-full bg-slate-900  flex justify-center items-center ">
      <div className="flex justify-center items-center min-h-[100vh] w-[70vw] bg-slate-900  rounded-lg relative">
        

        <div className="flex w-[50vw]">
          <div className="w-1/2 bg-slate-800/40 h-[40vh] max-h-[40vh] rounded-lg overflow-auto hove:ring-cyan-700 hover:ring-4 z-20">
             
              
          </div>
           

          <div className="w-1/2 bg-slate-700/40 h-[40vh] max-h-[40vh] rounded-lg overflow-auto hover:ring-cyan-700 hover:ring-4 z-20">
          
          
          </div>
        </div>
        <button className="bg-blue-600 px-3 py-5 font-semibold text-black absolute  shadow-md rounded-lg hover:bg-slate-950 hover:text-white z-30" >
          Swap
        </button>
        <div className="absolute w-[90vw] h-[90vh]">
          <EarthCanvas/>
        </div>
      </div>
    </div>
  );
};



export default App;
