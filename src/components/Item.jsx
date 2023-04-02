import React from "react";

function Item(props) {
  return (
    <li 
      onClick={ () => {
        props.delete(props.id)
      }}
      value={props.itemContent} 
      key={props.id}
    >{props.itemContent}</li>
  )

}

export default Item