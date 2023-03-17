import React, { useState } from "react";
import { Container, List } from "@mui/material";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task])
  };

  const deleteTask = (id) => {
    var filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  }

  const editTask = (id, editedName) => {
    var tasksArray = [...tasks];
    tasksArray.splice(id, 1, { text: editedName, id: id });
    setTasks(tasksArray);

  }

  return (
    <Container className="container" maxwidth="xs" style={{ marginTop: "1em"}}>
      <Form addTask={addTask}/>
      <List sx={{ marginTop: "1em" }}>
        {tasks.map((task) => ( 
          <div key={task.id}  style={{ marginTop: "1em" }}> 
            <TodoItem editTask={editTask} task={task} deleteTask={deleteTask}/> 
          </div>
          ))
        }
      </List>
    </Container>
  );
}