import { useState } from "react";
import { CardsGifs } from "./components/CardsGifs";
import SearchGif from "./components/SearchGif";

const AppGif = () => {
   const [gif, setGif] = useState(['Superman']);
  // se ejecuta una vez rendirazdo o montado el componente
 
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Buscador de Gif's</h1>
      <SearchGif setGifProps={setGif}/>

      <div className="container">
        <div className="row">
          {
            gif.map( (gif) => (<CardsGifs key={gif} gifProps={gif} />))
          }
        </div>
      </div>
    </>
  )
}

export default AppGif
