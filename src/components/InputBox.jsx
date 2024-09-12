import React, { useId } from "react";

const InputBox = ({
  label,
  texts,
  ontextsChange,
  onLanguageChange,
  languageOptions = [],
  selectLanguage = "en",
  textsDisable = false,
  LanguageDisable = false,
  className = "",
}) => {
  const textsInputId = useId();
  return (
    <div
      className={`bg-slate-800/40  p-3 rounded-lg text-sm flex ${className}`}
    >
      <div className="w-1/2 flex flex-col justify-center flex-wrap">
        <label
          htmlFor={textsInputId}
          className="text-white text-lg inline-block font-semibold self-start m-2"
        >
          {label}
        </label>
        <input
          id={textsInputId}
          className=" text-white bg-black px-2 font-semibold font-serif  rounded-lg  outline-none  w-full  py-1.5"
          type="textarea"
          placeholder="text"
          disabled={textsDisable}
          value={texts}
          onChange={(e) => ontextsChange && ontextsChange(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-col flex-wrap justify-center items-center ">
        <p className="text-white text-lg  w-full font-semibold pl-10 ">
          Select Language
        </p>
        <select
          className="rounded-lg px-1 mt-3 py-2 bg-black text-white cursor-pointer outline-none"
          value={selectLanguage}
          onChange={(e) => onLanguageChange && onLanguageChange(e.target.value)}
          disabled={LanguageDisable}
          
        >
          {languageOptions.map((language) => (
            
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
