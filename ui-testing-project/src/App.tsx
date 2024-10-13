
import './App.css';
import {MyButton, MyInput} from "ui-kit";

function App() {
  return (
    <div className="App">
      <MyButton color={"ORANGE"} big>BUTTON</MyButton>
      <MyInput big={true} label="Input" placeholder="Enter your message..."/>
    </div>
  );
}

export default App;
