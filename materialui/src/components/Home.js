import React from "react";

const Home = () => {
  const loggedData = JSON.parse(sessionStorage.getItem("loggedData"))

  return (
    <>
      {loggedData !== null ? (
        <h1>Welcome {loggedData.userName}</h1>
      ) : (
        <h1>Welcome</h1>
      )}
    </>
  );
};

export default Home;
