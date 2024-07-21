import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setinputValue] = useState(
    ''
  )
  const onInputChange = ({target}) => { // Desestructuramos el evento y obtenemos el target
    setinputValue(target.value)    
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if(inputValue.trim().length === 0) return
    // Si no hay nada en el input no se agrega nada
    //setCategories((categories)=>[inputValue,...categories])    
    onAddCategory(inputValue.trim())
    setinputValue('')
}
    
    return (
        <form onSubmit={onSubmit}>
          
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}