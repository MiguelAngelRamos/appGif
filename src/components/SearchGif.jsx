import { useState } from "react"

const SearchGif = ({setGifProps}) => {

  const [inputValue, setInputValue] = useState('');
  
  const inputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value)
  };

  const submitPrevent = (event) => {
    event.preventDefault(); // que se refresque en el navegador al impedir submit
    if(inputValue.trim().length > 0) {
      setGifProps( gif => [inputValue, ...gif]);
      setInputValue('');
    }
  };
  return (
    <form className="container" onSubmit={submitPrevent}>
      <input className="form-control" type="text" value={inputValue} onChange={inputChange}/>
    </form>
  )

}

export default SearchGif
