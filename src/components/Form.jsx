import {Paper, Button, TextField} from "@mui/material";
import React, { useState } from "react";

export default function Form({addTask}){
    const [text, setText] = useState();
    const [ id, setId] = useState(0);

    const taskCreat = (text) => {
        const taskObjt = {text: text, id: id}
        setId(id + 1);
        addTask(taskObjt);
        document.getElementById("outlined-basic").value = null;
    }

    return (
        <Paper style={{padding: "1em"}}>
            <div style={{display:"flex", justifyContent: "center"}}>
                <TextField id="outlined-basic" label="ESCREVA SUA TAREFA AQUI" variant="outlined" onChange={(e) => setText(e.target.value)} fullWidth/>
                <Button style={{ marginLeft: " 1em "}} variant="contained" onClick={() => taskCreat(text)}>ADD</Button>
            </div>
        </Paper>
    )
}