import './App.css';
import './index.css'
import Ejercicio1 from './components/Ejercicio1'
import { PRODUCTOS } from "./constants/List"
import Lista from "./components/Lista"
import Contador from './components/Contador';


function App() {
  

  return (
    <>
      <main>
        <div><Ejercicio1 /></div>
        <div><Lista productos={PRODUCTOS} /></div>
        <div><Contador /></div>
      </main>
    </>
  )
}

export default App
