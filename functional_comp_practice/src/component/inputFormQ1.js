import React, { useState } from "react";

function InputForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your form has been submitted!\nFirst Name: ${firstName}\nLast Name: ${lastName}`);
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
                First Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  style={styles.input}
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" style={styles.label}>
                Last Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  style={styles.input}
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
            </div>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
