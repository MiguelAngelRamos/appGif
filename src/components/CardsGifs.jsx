import { useFetchGifs } from "../hooks/useFetchGifs"
import { Card } from "./Card";
import './spinner.css'
export const CardsGifs = ({gifProps}) => {

  // llamando hooks personalizado
  const { data: images, loading } = useFetchGifs(gifProps);
  return (
    <>
      <h3 className="text-center mt-5">{gifProps}</h3>

      {loading && <div className="loader">Cargando..</div>}

      {
        images.map( img => (
          // Error solucionado, dejo entre comentarios lo que estaba antes lo que se va repetir aca es el div con clase col-3, por eso debe llevar el identificador unico "key" asi entonces nuestro proyecto esta libre de warnings
          // <div className="col-3">
          //   <Card key={img.id} {...img}/>
          // </div>
          <div className="col-3">
            <Card {...img} />
          </div>
        ))
      }
    </>
  )
}
