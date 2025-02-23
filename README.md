Ejercicio 1: Saludar
Crea un componente llamado "Saludar" que reciba el prop "nombre" y muestre un mensaje de saludo utilizando ese nombre.


Instrucciones
Crea un nuevo componente llamado "Saludar".
Define una prop llamada "nombre" en el componente "Saludar".
En el renderizado del componente, muestra un mensaje de saludo que incluya el nombre recibido por props.
Utiliza este componente en tu aplicación principal importándolo y pasándole un nombre como prop.
Ejemplo:

Creamos el componente Saludar en la carpeta componentes:

Saludar.jsx
export default function Saludar(props) {
  return <h2 className="titulo-ejercicio">Hola {props.nombre}</h2>
}

Importamos el componente saludar en el componente Ejercicio1 y le pasamos la prop nombre="Juan":

Ejercicio1.jsx
import Saludar from './Saludar'
import TituloEjercicio from '../TituloEjercicio'

export default function Ejercicio1() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
      <Saludar nombre="Juan" />
    </section>
  )
}

Importamos el componente Ejercicio1 a nuestro componente App:

App.jsx
import Ejercicio1 from './components/Ejercicio1/Ejercicio1'
import Footer from './components/Footer'
import Header from './components/Header'
import TituloPrincipal from './components/TituloPrincipal'
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <TituloPrincipal />
        <Ejercicio1 />
      </main>
      <Footer />
    </>
  )
}


Ejercicio 2: Lista de Productos
Dada una lista de productos ubicada en el archivo de constantes, crea un componente llamado "Lista" que reciba esta lista como prop y la renderice en la pantalla.


Instrucciones

Importa la lista de productos desde el archivo de constantes.
Crea un nuevo componente llamado "Lista".
Define una prop llamada "productos" en el componente "Lista" para recibir la lista de productos.
Dentro del renderizado del componente, itera sobre la lista de productos y muestra cada elemento en una lista o tabla.
Utiliza este componente en tu aplicación principal importándolo y pasándole la lista de productos como prop.



Ejercicio 3: Renderizado Condicional en la Lista
Reutiliza el componente "Lista" que creaste en el ejercicio 2 y añade una funcionalidad de renderizado condicional. Si la longitud de la lista de productos es igual a cero, muestra el mensaje "No hay elementos en la lista".


Instrucciones

Modifica el componente "Lista" para incluir una comprobación de longitud de la lista de productos.
Si la longitud es cero, muestra el mensaje "No hay elementos en la lista".
Si la longitud no es cero, renderiza la lista de productos como lo hiciste en el ejercicio 2.
Utiliza el componente modificado en tu aplicación principal.



Ejercicio 4: Contador
Crea un contador simple que aumente su valor cada vez que se presiona un botón. Este ejercicio te ayudará a comprender cómo gestionar el estado en React.


Instrucciones

Crea un componente llamado "Contador".
En el componente "Contador", define una variable de estado llamada "contador" con un valor inicial de 0.
Renderiza el valor del contador en la pantalla.
Agrega un botón que, cuando se presiona, incremente el valor del contador en 1.
Utiliza este componente en tu aplicación principal.