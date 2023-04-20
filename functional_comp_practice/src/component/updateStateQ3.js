import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("id1").innerHTML = `Name: ${name}`;
    document.getElementById("id2").innerHTML = `Email: ${email}`;
  };

  const styles = {
    input: {
      border: "solid",
      borderWidth: "1px",
      margin: "auto",
      width: "70%",
    },
    button: {
      marginTop: "2rem",
      width: "30%",
    },
    card: {
      width: "45%",
      textAlign: "center",
      margin: "auto",
      marginTop: "3rem",
    },
    label: {
      width: "fitContent",
    },
  };

  return (
    <div>
      <div className="card" style={styles.card}>
        <div className="card-body">
          <h5 className="card-title">Enter Details</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" style={styles.label}>
                Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  style={styles.input}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" style={styles.label}>
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  style={styles.input}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <h3 id="id1"></h3>
      <h3 id="id2"></h3>
    </div>
  );
}

export default UserForm;
