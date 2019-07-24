import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/font/iconfont.css';
import "./assets/css/Brewmaster.css"
import TabBarExample from './components/TabBarExample';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Tz from './router'
import RouteList from './router/RouteList'
class App extends React.Component {
  render(h) {
    if (!localStorage.userList) {
      localStorage.userList = JSON.stringify([{ user: "admin", password: "jiuxian" }, { user: "1905", password: "1905" }, { user: "react", password: "react" }])
    }
    return (
      <div id="brewmaster">
        <Router>
          <div id="main">
            {
              RouteList.map((v, i) => {
                return (<Route path={v.path} exact={v.exact} render={() => <Tz {...v}></Tz>} key={i}></Route>)
              })
            }
          </div>
          <TabBarExample ></TabBarExample>
        </Router>
      </div>
    );
  }
}



export default App;
