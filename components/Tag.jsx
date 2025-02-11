import React from 'react'
import './Tag.css';
const Tag = (props) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    React: { backgroundColor: "violet" },
    DSA: { backgroundColor: "#4cdafc" },
    Aiml: { backgroundColor: "red" },
    IOT: { backgroundColor: "pink" },
    default: { backgroundColor: "#f9f9f9" },
};
  return (
    <button  type="button"className='tag' 
    onClick={()=>props.selectTag(props.tagName)}
     style={props.selected ? tagStyle[props.tagName] : tagStyle.default}>
     {props.tagName}
    </button>
    

  )
}

export default Tag
