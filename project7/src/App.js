import './App.css';
import Dropdown from './component/dropdownQ4';
import ImageSlider from './component/imageSliderQ2';
import ListMemo from './component/listMemoQ6';
import ListReducer from './component/listReducerQ5';
import Loader from './component/loaderQ3';
import MenuChildComponent from './component/menuChildCompQ7';
import MenuParentComponent from './component/menuParentCompQ7';
import ListSearch from './component/searchQ1';

function App() {
  const options = ['Fullstack', 'Salesforce', 'Mulesoft', 'Guidewire', 'SDET', 'Data Analytics', 'Digital Automation'];
  const items = [
    { name: 'Nairwita', age: 27 },
    { name: 'Srabana', age: 30 },
    { name: 'Sagar', age: 20 },
    { name: 'Debjit', age: 15 },
    { name: 'Ankit', age: 32 }
  ];
  return (
    <div className="App">
      {/* <ListSearch /> */}
      {/* <ImageSlider /> */}
      {/* <Loader /> */}
      {/* <Dropdown options={options} /> */}
      {/* <ListReducer /> */}
      {/* <ListMemo items = {items} /> */}
      <MenuParentComponent />
    </div>
  );
}

export default App;
