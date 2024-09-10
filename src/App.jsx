import React ,{useState} from "react";
import useCurrencyInfo from "../../converter/src/hooks/useCurrency";

const App = () => {
    const [text,setText]=useState("");
    const [from,setFrom]=useState("eng");
    const [to,setTo]=useState("ar")
    const [result,setResult]=useState("")

    const languages= useCurrencyInfo(from);

    const {translatedText}=Object.keys(languages)

    const swap=()=>{
       setFrom(to)
       setTo(from)
       setResult(text)
       setText(result)
    }

    const translate=()=>{
       setResult(translatedText)
    }


  return (
    <div className="min-h-screen w-full bg-slate-900  flex justify-center items-center ">
      <div className="flex justify-center items-center min-h-[50vh] w-[70vw] bg-slate-900  rounded-lg relative">
        <div className="flex w-[50vw] ">
          <div className="w-1/2 bg-slate-800 h-[40vh] max-h-[40vh] rounded-lg overflow-auto hove:ring-cyan-700 hover:ring-4 ">
               
          
          </div>
          <div className="w-1/2 bg-slate-700 h-[40vh] max-h-[40vh] rounded-lg overflow-auto hover:ring-cyan-700 hover:ring-4">
          
          
          </div>
        </div>
        <button className="bg-blue-600 px-3 py-5 font-semibold text-black absolute  shadow-md rounded-lg hover:bg-slate-950 hover:text-white" onClick={()=>{translatedText}}>
          Swap
        </button>
      </div>
    </div>
  );
};

export default App;
