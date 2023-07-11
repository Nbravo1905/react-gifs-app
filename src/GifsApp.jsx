import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifsApp = () => {

  const [categories, setCategories] = useState(['One Pice']);

  const onAddCategory = (newCategory) => {

    if( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
      <h1>Gifs App</h1>

      <AddCategory
        onNewCategory={ (event) => onAddCategory(event)}
      />

      {/* Categorias */}
      {
        categories.map( category => ( 
          <GifGrid 
            key={category}
            category={category}
          />
        ))
      }

    </>
  )
}