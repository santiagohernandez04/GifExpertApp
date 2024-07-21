import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGilfs";
import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({category}) => {
  
  const {images, isLoading} = useFetchGif(category);
  console.log(images, isLoading);
  
    
    return (
    <>
    {
      isLoading && (<h2>Cargando...</h2>)
    }
    <h4>{category}</h4> 
    <div className="card-grid">
      {
        images.map((img) => (
          <GifItem 
          key={img.id}
          {...img}
          />
        ))
      }
    </div>
    </>
  )
}
