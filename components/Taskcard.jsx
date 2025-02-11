import React, { useState } from "react";
import "./Taskcard.css";
import Tag from "./Tag";
import deleteicon from "../assets/delete.png";

const Taskcard = (props) => {
  const [progress, setProgress] = useState(0); // State for progress

  return (
    <article className="task_card">
      <p className="task_text">{props.title}</p> 

      {/* Progress Slider with Percentage Display */}
      <div className="slider_container">
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={progress} 
          onChange={(e) => setProgress(e.target.value)} 
          className="progress_slider"
        />
        <span className="progress_text">{progress}%</span>
      </div>

      {/* Task Tags */}
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
         {props.tags&& props.tags.map((tag,index)=>(
          <Tag key={index} tagName={tag} selected/> ))}
        </div>

        {/* Delete Button */}
        <div className="task_delete" onClick={()=>{if(props.handleDelete)props.handleDelete(props.index);}}>
          <img src={deleteicon} alt="Delete" className="delete_icon"/>
        </div>
      </div>
    </article>
  );
};

export default Taskcard;
