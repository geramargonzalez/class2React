
function MyButton({ title }) {
    return (
      <button>{title}</button>
    );
  }
  
  export default function App() {
    return (
      <div>
        <h1>Bienvenido a mi aplicación</h1>
        <MyButton title="Soy un botón" />
      </div>
    );
  } 