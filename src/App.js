import logo from './logo.svg';
import './App.css';

const name="Aditya Raj";
const regNo=11911045;
const date=new Date();
const currDate=date.getDate();
const currMonth=date.getMonth();
const currYear=date.getFullYear();

function App() {
  return (
    <div className="App">
    <div className="info">
      <span>Date: {currDate} </span><span>/ {currMonth}/ </span><span>{currYear}</span>
      <p>Name : {name} </p>
      <p>RegNo. : {regNo}</p>
    </div>
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
