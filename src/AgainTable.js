import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoData,
  deleteTodoData,
  updateTodoData,
} from "./store/reducers/TodoSlice";

export default function AgainTable() {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todoSlice);
  const [data, setData] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleClick = () => {
    if (data.trim() !== "") {
      dispatch(addTodoData({ id: Date.now(), text: data, inherit: false }));
      setData("");
    }
  };

  const handleDel = (id) => {
    dispatch(deleteTodoData(id));
  };

  const handleCheck = (item) => {
    dispatch(updateTodoData({ ...item, inherit: !item.inherit }));
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditText(item.text);
  };

  const handleSave = (item) => {
    if (editText.trim() !== "") {
      dispatch(updateTodoData({ ...item, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        my={16}
        flexDirection="column"
        gap={2}
      >
        <Typography variant="h3">ToDo List</Typography>
        <Box display="flex" width="50%" gap={1}>
          <TextField
            fullWidth
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="add item..."
            size="small"
          />
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "ActiveBorder",
              "&:hover": {
                backgroundColor: "#3313d1ff",
              },
            }}
          >
            Add
          </Button>
        </Box>
        <Box display="flex" gap={1} flexDirection="column">
          {todoData.map((item) => (
            <Box key={item.id} display="flex" alignItems="center" gap={1}>
              <Checkbox
                size="small"
                checked={item.inherit || false}
                onChange={() => handleCheck(item)}
              />
              {editId === item.id ? (
                <TextField
                  size="small"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  sx={{ width: "200px" }}
                />
              ) : (
                <Box sx={{ width: "200px" }}>{item.text}</Box>
              )}
              {editId === item.id ? (
                <Button
                  onClick={() => handleSave(item)}
                  variant="contained"
                  size="small"
                  color="success"
                >
                  Save
                </Button>
              ) : (
                <Button
                  onClick={() => handleEdit(item)}
                  variant="contained"
                  size="small"
                  color="info"
                >
                  Edit
                </Button>
              )}
              <Button
                onClick={() => handleDel(item.id)}
                variant="contained"
                size="small"
                color="error"
              >
                Del
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
