import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

const App = () => {
  useEffect(()=>{
    M.AutoInit()
  })
  return (
    <Fragment>
      <SearchBar/>
      <div className='container '>
        <Logs/>
        <AddLogModal/>
        <AddBtn/>
      </div>
      
    </Fragment>
  );
}

export default App;
