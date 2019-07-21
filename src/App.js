import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/font/iconfont.css';
import Test from "./views/Brewmaster"
class App extends React.Component {
  render(h) {
    if (!localStorage.userList) {
      localStorage.userList = JSON.stringify([{ user: "admin", password: "jiuxian" }, { user: "1905", password: "1905" }, { user: "react", password: "react" }])
    }
    return (
      <Test></Test>
    );
  }
}



export default App;
