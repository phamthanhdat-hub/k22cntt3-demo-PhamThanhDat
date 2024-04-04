import React from 'react';
import logo from './logo.svg';
import './App.css';
import Func_JSX_PhamThanhDat from './components/Func_JSX_PhamThanhDat';
import Class_PhamThanhDat from './components/Class_PhamThanhDat'; // import the Class_PhamThanhDat component

function App(){
  return(
    <section ClassName="App">
      <h1>Demo JSX</h1>
      {/*function component demo*/}
      <Func_JSX_PhamThanhDat/>
      <Func_JSX_PhamThanhDat fullname="Pham Thanh Dat" age="20"/>
      <Class_PhamThanhDat/>
      <hr/>
      <Class_PhamThanhDat info="Hoc ReactJS" time="11"/>
    </section>
  );
}

export default App;