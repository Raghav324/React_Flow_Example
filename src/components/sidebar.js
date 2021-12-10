import React from "react";

//no-anonymous-default-export
export default function Sidebar()  {
  const onDragStart = (event, nodeType) => 
  {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  
  };
  return (
    <aside style={{backgroundColor:"White"}}>

      <div className="description">
        <h3> We can take nodes from here.</h3>
        <h5>For Deletion : Select Node + Press Backspace </h5> 
      </div>

      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable 
        >
        Input Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
    >
        Output Node
      </div>
    </aside>
  );
};