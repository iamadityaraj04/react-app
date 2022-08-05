import logo from './logo.svg';
import './App.css';

const name="Aditya Raj";
const regNo=11911045;
const date=new Date();
const currDate=date.toLocaleDateString();
var currTime=date.toLocaleTimeString();

//styling time
const customStyle={
  color:"",
}
if(date.getHours()<12){
  customStyle.color="green";
}else if(date.getHours()<18){
  customStyle.color="orange";
}else{
  customStyle.color="darkgrey";
}

function App() {
  return (
    <div className="App">

      {/* inline styling is done by creating javascript object */}
      <h1 style={{color: "red"}}>Date: {currDate}</h1>
      <h1 style={customStyle}>Time: {currTime}</h1>
      <p>Name : {name} </p>
      <p>RegNo. : {regNo}</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
