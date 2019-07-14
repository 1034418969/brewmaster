import React from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import TabBarExample from './components/TabBarExample';
import './assets/font/iconfont.css';
import Test from "./views/test"
import { 
  BrowserRouter as Router,
  Route,

 } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Test}></Route>
      </Router>
    </div>
  );
}

export default App;
