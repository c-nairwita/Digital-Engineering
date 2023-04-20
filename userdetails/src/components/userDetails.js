import React, { Component } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      users: [],
      // inactiveUsers: [],

      currentName: "",
      currentEmail: "",
      currentPhone: "",
      currentId: "",
      currentIndex: "",
      editing: false,
      isActive: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        const selectedData = users.map((user) => ({
          ...user,
          isActive: true,
        }));
        this.setState({ users: selectedData });
      });
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, isActive } = this.state;
    const id = uuidv4();
    const newUser = { id, name, email, phone, isActive };

    const duplicate = this.state.users.find(
      (user) =>
        user.name === name || user.email === email || user.phone === phone
    );
    if (duplicate) {
      alert("Duplicate Entry!");
      return;
    }

    this.setState({
      users: [...this.state.users, newUser],
      name: "",
      email: "",
      phone: "",
      isActive: true,
    });
  };

  handleDelete(index) {
    const check = window.confirm("Delete user?");
    if (check === true) {
      const updatedUsers = [...this.state.users];
      updatedUsers.splice(index, 1);
      this.setState({ users: updatedUsers });
    }
  }

  handleStatusChange(event, user) {
    const users = this.state.users.map((u) => {
      if (u === user) {
        alert("Change status of user?");
        return { ...u, isActive: !u.isActive };
      }
      return u;
    });
    this.setState({ users });
  }

  // handleDeactivate(index) {
  //   const check = window.confirm("Deactivate user?");
  //   if (check === true) {
  //     const activeUsers = [...this.state.users];
  //     this.state.inactiveUsers.push(this.state.users[index]);
  //     activeUsers.splice(index, 1);
  //     this.setState({ users: activeUsers });
  //   }
  //   console.log(this.state.inactiveUsers);
  // }

  onEdit = (user, index) => {
    this.setState({ editing: true });
    this.setState({ currentName: user.name });
    this.setState({ currentEmail: user.email });
    this.setState({ currentPhone: user.phone });
    this.setState({ currentId: user.id });
    this.setState({ currentIndex: index });
    console.log(this.state.editing);
    console.log(user);
  };

  hideModal = () => this.setState({ editing: false });

  onEditChangeName = (e) => {
    this.setState({ currentName: e.target.value });
  };
  onEditChangeEmail = (e) => {
    this.setState({ currentEmail: e.target.value });
  };
  onEditChangePhone = (e) => {
    this.setState({ currentPhone: e.target.value });
  };
  onEditSubmit = (e) => {
    e.preventDefault();
    this.setState({ editing: false });
    console.log(this.state.users[this.state.currentIndex]);
    this.state.users.map((user) => {
      if (user.id === this.state.currentId) {
        user.name = this.state.currentName;
        user.email = this.state.currentEmail;
        user.phone = this.state.currentPhone;
      }
    });
  };

  render() {
    const activeUsersCount = this.state.users.filter(
      (user) => user.isActive
    ).length;
    const inactiveUsersCount = this.state.users.filter(
      (user) => !user.isActive
    ).length;

    return (
      <div>
        <div id="formdiv">
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>Enter Custom Details</Card.Title>
              <Card.Text>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      Name
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChangeName}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalPassword"
                  >
                    <Form.Label column sm={2}>
                      Phone
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="tel"
                        placeholder="Phone"
                        value={this.state.phone}
                        onChange={this.handleChangePhone}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalPassword"
                  >
                    <Form.Label column sm={2}>
                      Email
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                      />
                    </Col>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>Stats:</Card.Title>
              <hr />
              <Card.Text style={{ fontFamily: "Times-Bold" }}>
                <h4>Total Users:{activeUsersCount + inactiveUsersCount}</h4>
                <h4>Active Users: {activeUsersCount}</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  {user.isActive ? (
                    <button
                      onClick={(event) => this.handleStatusChange(event, user)}
                    >
                      Active
                    </button>
                  ) : (
                    <button
                      onClick={(event) => this.handleStatusChange(event, user)}
                    >
                      Inactive
                    </button>
                  )}
                </td>
                <td>
                  <button id="edit-btn" onClick={() => this.onEdit(user)}>
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button onClick={() => this.handleDelete(index)}>
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={this.state.editing}>
          <Modal.Header>Update Details</Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="name"
                    placeholder="Name"
                    value={this.state.currentName}
                    onChange={this.onEditChangeName}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPhone"
              >
                <Form.Label column sm={2}>
                  Phone
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    value={this.state.currentPhone}
                    onChange={this.onEditChangePhone}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={this.state.currentEmail}
                    onChange={this.onEditChangeEmail}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onEditSubmit}>Save</Button>
            <Button onClick={this.hideModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UserDetails;
