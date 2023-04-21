import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { fetchUsersReq } from "../redux/actionTypes/userActionTypes";

export default function UserComp() {
  // const store = useStore()
  // console.log(store.getState()) // if we use store we have to set the state of users in a state variable in a separate useEffect with store as dependency
  const users = useSelector((state) => state.users); //it's better to use this
  const dispatch = useDispatch();

//   console.log(stateVal);

  useEffect(() => {
    dispatch(fetchUsersReq());
    // store.dispatch(fetchUsersReq())
  }, [dispatch]);
  return (
    <>
      <div>User Details</div>
      <ul>
        {users.length !== 0
          ? users.map((user) => {
              return <li>{user.name}</li>;
            })
          : []}
      </ul>
    </>
  );
}
