import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@mui/material";
import EditTaskDialog from "./Edit_Task_Dialog";
import { useState } from "react"

export default function TodoItem({ task, deleteTask, editTask }) {
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const editDialogHandler = () => {
    setOpenEditDialog(!openEditDialog);

  }

  const [checked, setChecked] = useState(false);
  const [styleText, setStyleText] = useState({textDecoration:'none'});

  const handleChange = () => {
    setChecked(!checked);
    checked ? setStyleText({textDecoration:'none'}) : setStyleText({textDecoration:'line-through'});
  }

  return (
    <>
      <EditTaskDialog editTask={editTask} open={openEditDialog} editDialogHandler={editDialogHandler} task={task}/>
      <Paper style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteTask(task.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple onChange={handleChange} />
            </ListItemIcon>
            <ListItemText  style={styleText} primary={task.text} onClick={() => setOpenEditDialog(true)} />
          </ListItemButton>
        </ListItem>
      </Paper> 
    </>
  );
}
