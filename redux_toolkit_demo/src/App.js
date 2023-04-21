import "./App.css";
import { Provider } from "react-redux";
import PostComp from "./components/PostComp";
import { store } from "./redux/store";
import UserComp from "./components/UserComp";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <PostComp/> */}
        <UserComp />
      </Provider>
    </div>
  );
}

export default App;
