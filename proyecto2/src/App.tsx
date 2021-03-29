
import { Counter } from "./components/counter";
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from "./components/formulario";
function App() {
  return (
    <>
      <h1>React + typeScripts</h1>
      <hr/>

      <h2>useState</h2>
      <Counter />

      <Usuario />
      <hr/>

<h2>useEffect - useRef</h2>
<hr/>
<TimerPadre />

<h2>useReducer</h2>
<hr/>

    
      <ContadorRed />
      <h2>useReducer</h2>
      <hr/><br/>
      <h2>costomHooks</h2>
      <hr/>
    <Formulario/>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    </>
  );
}

export default App;
