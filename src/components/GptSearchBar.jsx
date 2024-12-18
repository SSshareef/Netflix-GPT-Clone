import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
  return (
    <div className="pt-[8%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
      
        <input
          className="p-2 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 col-span-3 m-4 bg-red-500">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
