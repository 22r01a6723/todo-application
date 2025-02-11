import React from 'react'
import "./Taskcolumn.css"
import Taskcard from './Taskcard'
const Taskcolumn = (props) => {
  return (
    <section className='task_column'>
      <h2 className="task_col_heading">
      <img className="task_col_icon" src={props.icon} alt=""/>{props.TagName}
      </h2>

    {props.tasks?.map((task, index) =>
                    task.status === props.status && (
                        <Taskcard
                            key={index}
                            title={task.task}
                            tags={task.tags}
                            handleDelete={props.handleDelete}
                            index={index}
                            
                        />
                    )
            )}
    </section>
    

  )
}

export default Taskcolumn
