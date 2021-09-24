import { useEffect, useState } from "react";
import { getGifs } from '../api/get-gifs';

export const useFetchGifs = (terminoBusqueda) => {

  const[state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(()=> {
    getGifs(terminoBusqueda).then( imgs => {
      setState({
        data: imgs,
        loading: false
      })
    })
  },[terminoBusqueda]);

  return state;
}