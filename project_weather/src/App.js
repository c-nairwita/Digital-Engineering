import { Provider } from "react-redux";
import './App.css';
import WeatherComp from './components/WeatherComp';
import { store } from "./redux/store";

function App() {
  return (
    <div className="App bg-image">
      <Provider store={store}>
        <WeatherComp/>
      </Provider>
    </div>
  );
}

export default App;
