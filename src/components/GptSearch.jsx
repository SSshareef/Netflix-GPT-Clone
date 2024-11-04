import { BACKGROUND_IMAGE } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <div>
       <div className="absolute -z-10 brightness-95">
        <img
          src={BACKGROUND_IMAGE}
          alt="Background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch