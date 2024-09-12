import React, { useState, Suspense } from "react";
import { InputBox } from "./components";
import EarthCanvas from "./components/Earth";
import useTranslator from "./hooks/useTranslator";
import useLanguages from "./hooks/useLanguages";
// import "./App.css";

const App = () => {
  const [texts, setTexts] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("ar");
  const [sourceLanguage, setSourceLanguage] = useState("eng");
  const [translatedText, setTranslatedText] = useState("");

  
  const [languages,loading,error]= useLanguages()

  const options = languages ? languages.map(lang => lang.name) : [];

  const [data]=useTranslator(texts,targetLanguage,sourceLanguage)
  
  
  
  
  

  const swap = () => {
    setTargetLanguage(sourceLanguage);
    setSourceLanguage(targetLanguage);
    setTranslatedText(texts);
    setTexts(translatedText);
  };

  const translate = () => {
    if (TranslatedInfo && TranslatedInfo.data && TranslatedInfo.data["0"]) {
      const translations = Object.values(TranslatedInfo.data["0"][0]);
      setTranslatedText(translations.join("\n"));
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-900  flex justify-center items-center ">
      <div className="flex justify-center items-center min-h-[100vh] w-[70vw] bg-slate-900  rounded-lg relative">
        <div className="flex w-[50vw]">
          <div className="w-1/2 bg-slate-800/40 h-[40vh] max-h-[40vh] rounded-lg  hove:ring-cyan-700 hover:ring-4 z-20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                translate();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  className="min-h-[40vh]"
                  label="From"
                  texts={texts}
                  languageOptions={options}
                  ontextsChange={(texts) => setTexts(texts)}
                  selectLanguage={targetLanguage}
                />
              </div>
            </form>
          </div>

          <div className="w-1/2 bg-slate-700/40 h-[40vh] max-h-[40vh] rounded-lg overflow-auto hover:ring-cyan-700 hover:ring-4 z-20"></div>
        </div>
        <button className="bg-blue-600 px-3 py-5 font-semibold text-black absolute  shadow-md rounded-lg hover:bg-slate-950 hover:text-white z-30">
          Swap
        </button>
        <div className="absolute w-[90vw] h-[90vh]">
          <EarthCanvas />
        </div>
      </div>
    </div>
  );
};

export default App;
