import React, { useState } from "react";
import Item from "./Item";


function App() {

  const [inputText, setInputText] = useState('')
  const [listItems, setListItems] = useState([])

  function updateItem(event) {
    // const [value, name] = event.target
    const newInputText = event.target.value
    setInputText(newInputText)
  }

  function handleSubmit() {
    setListItems( (prevList) => {
      return (
        [...prevList, inputText]
      )
    })
    setInputText('')
  }

  function handleDelete(id) {
    setListItems((prevList) => {
      return (
        prevList.filter((foundItem, index) => {
          return (
            index !== id
          )
        })
      )
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={updateItem}/>
        <button 
          type="submit" 
          onClick={handleSubmit}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((listItem, index) => {
            return (
              <Item 
                itemContent={listItem} 
                key={index}
                id={index}
                delete={handleDelete}
              />
            )
          })}
        </ul>
      </div>     
    </div>
  );
}

export default App;

