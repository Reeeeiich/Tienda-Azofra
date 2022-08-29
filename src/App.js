import './App.css';
import NavBar from './components/NavBar';


function App() {
  let numeroClase = 20;


  return (
    <>
      <NavBar/>

      <div className="App">
        <p> Bienvenidos a la clase {numeroClase}</p>
      </div>

    </>
);
    
    

}

export default App;
