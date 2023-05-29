import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import { useEffect } from 'react';

const App = () => {
  useEffect(()=>{
    // Init materialize
    M.AutoInit()
  })
  return (
    <div>
      main
    </div>
  );
}

export default App;
