import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreatePopUp.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";
// import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

const CreatePopUp = (  {modal, toggle} ) => {
  let [taskname, setTaskName] = useState("");
  let [status, setStatus] = useState("incomplete");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    
    if (taskname && status) {
      
        dispatch(
          
          addTodo({
            
          
            taskname,
            status,
            time: new Date().toLocaleString(),
          })
        );

        toast.success("Task created successfully");
        toggle(false);
      }

     
     else {
      toast.error("Task should not be empty");
    }
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        Add Task
      </ModalHeader>
      <ModalBody>
        <form className="frm">
          <label>Task</label>
          <input
            type="text"
            name="taskName"
            value={taskname}
            onChange={(event) => setTaskName(event.target.value)}
          />
          <p>Status</p>
          <select
            id="ci"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="complete">complete</option>
            <option value="incomplete">incomplete</option>
          </select>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary"  onClick={handleSubmit}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default CreatePopUp;
