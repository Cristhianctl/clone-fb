import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useStateValue } from './components/StateProvider';
import Widgets from './components/Widgets';
import Login from './pages/Login';

function App() {
  const [{user}, dispatch]= useStateValue();

  return (
    //BEM naming covention
    <div className="app">
      {!user ? (
        <Login/>
      ) : ( 
        <>
          <Header/>

          <div className='app__body'>
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
        </>
      )}
      
    </div>
  );
}

export default App;
