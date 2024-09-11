import React ,{useId} from "react";

const InputBox = ({
   label,
   texts,
   ontextsChange,
   onLanguageChange,
   languageOptions=[],
   selectLanguage="Eng",
   textsDisable=false,
   LanguageDisable=false,


   className = "" }) => {


     const textsInputId=useId();
  return (
    <div
      className={`bg-slate-100/40  p-3 rounded-lg text-sm flex ${className}`}
    >
      <div className="w-1/2">
        <label htmlFor={textsInputId} className="text-black inline-block">
          {label}
        </label>
        <input
          id={textsInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="textarea"
          placeholder="text"
          disabled={textsDisable}
          value={texts}
          onChange={(e)=> ontextsChange &&  ontextsChange(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full">
            Select Language
        </p>
        <select name="" id="" className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
           value={selectLanguage}
           onChange={(e)=> onLanguageChange &&  onLanguageChange(e.target.value)}
           disabled={LanguageDisable}
        >
            {languageOptions.map((language)=>{
                <option key={language} value={language}>
                {language}
            </option>
            })}
         
        </select>
      </div>
    </div>
  );
};

export default InputBox;
