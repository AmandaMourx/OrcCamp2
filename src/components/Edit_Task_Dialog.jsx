import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTaskDialog({open, editDialogHandler, task, editTask}) {
  const [editedName, setEditedName] = React.useState(task.text);

  const textHandler = () => {
    editTask(task.id, editedName);
    editDialogHandler();
  };

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={editDialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle style={{ fontWeight: "bold"}}>{"Editar nome desta tarefa"}</DialogTitle>
        <DialogContent>
          <TextField fullWidth defaultValue={task.text} onChange={(e)=>setEditedName(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={editDialogHandler}>Cancelar</Button>
          <Button onClick={textHandler}>Salvar</Button>
        </DialogActions>
      </Dialog>
  );
}
