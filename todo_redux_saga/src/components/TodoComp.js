import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoReq,
  deleteTodoReq,
  editTodoReq,
  fetchTodoReq,
} from "../redux/actionTypes/todoActionTypes";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Modal, Typography, Box, TextField } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export default function TodoComp() {
  const todos = useSelector((state) => state.todos);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");

  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoReq());
  }, [dispatch]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const headerStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Times Roman",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  //Add
  const handleAddClose = () => {
    setAdding(false);
  };
  const handleAdd = () => {
    setAdding(true);
  };
  const handleAddChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAddTodo = () => {
    // e.preventDefault();
    const newId = Math.max(...todos.map((todo) => todo.id));
    console.log(newId);
    var newTodo = {
      id: newId + 1,
      title: title,
      completed: false,
    };
    dispatch(addTodoReq(newTodo));
    setAdding(false);
  };
  //Add end

  //Edit
  const handleEdit = (todo) => {
    setEditing(true);
    setCurrentTitle(todo.title);
    setId(todo.id);
    setCompleted(todo.completed);
  };
  const handleEditClose = () => {
    setEditing(false);
  };
  const handleEditChange = (e) => {
    setCurrentTitle(e.target.value);
  };
  const handleEditTodo = (e, currentTitle) => {
    let currentId = id;
    var editedTodo = {
      id: id,
      title: currentTitle,
      completed: completed,
    };
    dispatch(editTodoReq(currentId, editedTodo));
    setEditing(false);
  };
  //Edit end

  //Delete part
  const handleDelete = (todoId) => {
    alert("Delete task?");
    dispatch(deleteTodoReq(todoId));
  };
  //Delete part end

  //Search part
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredTodo = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );
  //Search part end

  //Status change part
  const handleChangeStatus = (e, todo) => {
    console.log(completed);
    alert("Change status?");
    var newTodo = {
      id: todo.id,
      title: todo.title,
      completed: !todo.completed,
    };
    console.log(newTodo.completed);

    axios
      .put(`http://localhost:5000/todos/${todo.id}`, newTodo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Status change part end

  return (
    <>
      <Typography style={headerStyle} variant="h2" component="h2">
        To-Do List
      </Typography>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", marginLeft: "2rem", width: "50%" }}>
          <SearchIcon sx={{ fontSize: "xx-large" }} />
          <input
            style={{ float: "left", height: "1.5rem" }}
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          ></input>
        </div>

        <div style={{ width: "50%" }}>
          <Button
            style={{
              float: "right",
              marginRight: "3rem",
              marginBottom: "1rem",
              backgroundColor: "#202020",
            }}
            variant="contained"
            onClick={handleAdd}
          >
            <AddTaskIcon sx={{ marginRight: "5px" }} />
            <b>Add To-Do</b>
          </Button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTodo.map((todo, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{todo.id}</StyledTableCell>
                <StyledTableCell>
                  {todo.completed ? (
                    <Typography
                      component="span"
                      style={{ textDecoration: "line-through" }}
                    >
                      {todo.title}
                    </Typography>
                  ) : (
                    <Typography component="span">{todo.title}</Typography>
                  )}
                </StyledTableCell>
                {todo.completed ? (
                  <StyledTableCell>
                    <Button
                      color="success"
                      onClick={(e) => {
                        handleChangeStatus(e, todo);
                      }}
                    >
                      COMPLETED
                    </Button>
                  </StyledTableCell>
                ) : (
                  <StyledTableCell>
                    <Button
                      color="error"
                      onClick={(e) => {
                        handleChangeStatus(e, todo);
                      }}
                    >
                      PENDING
                    </Button>
                  </StyledTableCell>
                )}

                <StyledTableCell>
                  <span>
                    <Button
                      variant="contained"
                      sx={{
                        marginRight: "1rem",
                        backgroundColor: "#D8D8D8",
                        color: "black",
                      }}
                      onClick={(e) => {
                        handleEdit(todo);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#D8D8D8", color: "black" }}
                      onClick={(e) => {
                        handleDelete(todo.id);
                      }}
                    >
                      Delete
                    </Button>
                  </span>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={adding}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            fontFamily="times-roman"
            variant="h5"
            component="h2"
          >
            Add Task:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <TextField
                id="outlined-controlled"
                label="Title"
                value={title}
                autoFocus
                margin="dense"
                type="text"
                autoComplete="off"
                onChange={handleAddChange}
                fullWidth
              ></TextField>
              <Button type="submit" color="primary" onClick={handleAddTodo}>
                Save
              </Button>
              <Button onClick={handleAddClose} color="primary">
                Close
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={editing}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            fontFamily="times-roman"
            variant="h5"
            component="h2"
          >
            Edit Task:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <TextField
                id="outlined-controlled"
                label="Title"
                value={currentTitle}
                autoFocus
                margin="dense"
                type="text"
                autoComplete="off"
                onChange={(e) => {
                  handleEditChange(e);
                }}
                fullWidth
              ></TextField>
              <Button
                type="submit"
                color="primary"
                onClick={(e) => {
                  handleEditTodo(e, currentTitle);
                }}
              >
                Update
              </Button>
              <Button onClick={handleEditClose} color="primary">
                Close
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
