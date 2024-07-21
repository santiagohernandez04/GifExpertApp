import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(
    ['The Office'] 
    
  )
 

  const onAddCategory = (newCategory) => {
    // categories.map(category => {
    //   return category.toLowerCase()
    // })
    // newCategory = newCategory.toLowerCase()
    // // Para que no se repitan las categorias

    if(categories.includes(newCategory) ) return
    //si la categoria ya existe no se agrega
    //agregar una nueva categoria
    setCategories([newCategory,...categories])
    
  }

  return (
    <>
    <h1>GifExpertApp</h1>
    {/* {AddCategory es un input} */}
    <AddCategory onAddCategory={(value)=>onAddCategory(value)}/> 
    {/*Se mandan las categorias al componente AddCategory*/}
   
    
      {
      categories.map(category => (
      <GifGrid 
      key={category} 
      category={category}/>))
      }
      
    </>
    
  )
}
//ol es una lista ordenada