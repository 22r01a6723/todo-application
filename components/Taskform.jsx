import React,{useState} from 'react'
import "./TaskForm.css";
import Tag from './Tag';

const Taskform = (props) => {
  const[task,setTask]=useState("");
  const[status,setstatus]=useState("todo");
  const[tags,settags]=useState([]);
  const handleTaskChange=(e)=>{
    setTask(e.target.value);
  };
  const handlestatus=(e)=>{
    setstatus(e.target.value);
  };const handleSubmit=(e)=>{
    console.log(task,status,tags);
    e.preventDefault();
    const newTask={task,status,tags};
    console.log(newTask);
    props.settasks((prev)=>[...prev,newTask]);
   settags([]);
     setTask("");
     setstatus("todo");};
  const selectTag=(tag)=>{
    console.log(tag);
    settags(prevTags=>{
      if(prevTags.includes(tag)){
       // return prevTags.filter((item)=>item!=tag);
        return prevTags;
      }else{
        return [...prevTags,tag];
      }
    });
  }
  const checkTag=(tag)=>{
    //return true if tag exists in tags array else false
    return  tags.some((item)=>item==tag);
  }


    //console.log(tags);
  /*const selectTag = (tag) => {
    console.log("Clicked tag:", tag);
    settags((prevTags) => {
      console.log("Before update, tags:", prevTags);
      const newTags = prevTags.includes(tag)
        ? prevTags.filter((item) => item !== tag)
        : [...prevTags, tag];
      console.log("After update, tags:", newTags);
      return newTags;
    });
  };*/

  //console.log(task,status);
  return (
    <header className='app_header'>
    <form onSubmit={handleSubmit}>
        <input type="text"className="task_input"
        placeholder='Enter your task' value={task}
        onChange={handleTaskChange}/>
        <div className="task_form_bottom">
            <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
            <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")}/>
            <Tag tagName="DSA" selectTag={selectTag} selected={checkTag("DSA")}/>
            <Tag tagName="Aiml" selectTag={selectTag} selected={checkTag("Aiml")}/>
            <Tag tagName="IOT" selectTag={selectTag} selected={checkTag("IOT")}/>

            <div className="task_actions">
            <select className='task_status'onChange={handlestatus}>
             <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
              </select>
        <button type='submit' className='task_submit' onClick={handleSubmit}>+ Add Task</button>

            </div>
          
        </div>
    </form>
    </header>
  )
};

export default Taskform;
