import React from 'react'
import { TabBar } from 'antd-mobile';
import "../assets/css/TabBarExample.css";
import {
  Route
} from "react-router-dom";
import Home from '../views/Home';
import My from '../views/My';
import Car from '../views/Car';
import Clearance from '../views/Clearance';
import Category from '../views/Category';









class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "/home",
      hidden: false,
      fullScreen: false,
      route:{
        "/home":Home,
        "/":Home,
        "/my":My,
        "/clearance":Clearance,
        "/category":Category,
        "/car":Car
      }
    };
    console.log(this.state.selectedTab)
  }
  componentWillMount(){
    // 组件挂载之前，执行一次判断
    this.onHidden()
  }
  componentWillReceiveProps(){
    // 点击前进后退按钮时，也要判断是否导航组件
    this.onHidden()
  }
  // 点击事件
  jumpRoute(selectedTab) {
    this.props.history.push(selectedTab);
    this.onHidden()
  }
  onHidden(){
    console.log(this)
    if( this.props.history.location.pathname === "/home" || this.props.history.location.pathname === "/"){
      this.setState({
        hidden:false,
        selectedTab: "/home",
      })
    }else if(this.props.history.location.pathname !== "/home"){
      this.setState({
        hidden:true,
        selectedTab: this.props.history.location.pathname,
      })
    }
  }
  render() {
    return (
      <div id="tabBown" style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100%' }}>
        <TabBar
          unselectedTintColor="#888883"
          tintColor="rgb(241, 18, 18)"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<i
              className="iconfont icon-shouye"
            />
            }
            selectedIcon={<i
              className="iconfont icon-shouye"
            />
            }
            selected={this.state.selectedTab === '/home'}
            // badge={1}
            onPress={this.jumpRoute.bind(this, '/home', "true")}

            data-seed="logId"
          >
          </TabBar.Item>

          <TabBar.Item
            icon={
              <i
                className="iconfont icon-fenlei"
              />
            }
            selectedIcon={
              <i
                className="iconfont icon-fenlei"
              />
            }
            title="分类"
            key="category"
            // badge={'new'}
            selected={this.state.selectedTab === '/category'}
            onPress={this.jumpRoute.bind(this, '/category')}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i
                className="iconfont icon-pinpaiqingcang"
              />
            }
            selectedIcon={
              <i
                className="iconfont icon-pinpaiqingcang"
              />
            }
            title="清仓"
            key="clearance"
            selected={this.state.selectedTab === '/clearance'}
            onPress={this.jumpRoute.bind(this, '/clearance')}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<i
              className="iconfont icon-tubiaolunkuo-"
            />}
            selectedIcon={<i className="iconfont icon-tubiaolunkuo-"
              style={{
                width: '26px',
                height: '26px',
                fontSize: "22px"
              }}
            />}
            title="购物车"
            key="car"
            selected={this.state.selectedTab === '/car'}
            onPress={this.jumpRoute.bind(this, '/car')}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<i
              className="iconfont icon-ziyuan"
              style={{
                width: '26px',
                height: '26px',
                fontSize: "22px"
              }}
            />}
            selectedIcon={<i className="iconfont icon-ziyuan"
              style={{
                width: '26px',
                height: '26px',
                fontSize: "22px"
              }}
            />}
            title="我的"
            key="my"
            selected={this.state.selectedTab === '/my'}
            onPress={this.jumpRoute.bind(this, '/my')}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}




































































// class TabBarExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedTab: "/home",
//       hidden: false,
//       fullScreen: false,
//       route:{
//         "/home":Home,
//         "/":Home,
//         "/my":My,
//         "/clearance":Clearance,
//         "/category":Category,
//         "/car":Car
//       }
//     };
//     console.log(this.state.selectedTab)
//   }
//   componentWillMount(){
//     // 组件挂载之前，执行一次判断
//     this.onHidden()
//   }
//   renderContent(route) {
    
//     setTimeout(()=>{
//       console.log(route)
//     },2000)
//       return (
//         <div>55
//           <Route exact path={route}  component={Home}></Route>
//         </div>
//       )
//   }
//   componentWillReceiveProps(){
//     // 点击前进后退按钮时，也要判断是否导航组件
//     this.onHidden()
//   }
//   // 点击事件
//   jumpRoute(selectedTab) {
//     this.props.history.push(selectedTab);
//     this.onHidden()
//   }
//   onHidden(){
//     console.log(this)
//     if( this.props.history.location.pathname === "/home" || this.props.history.location.pathname === "/"){
//       this.setState({
//         hidden:false,
//         selectedTab: "/home",
//       })
//     }else if(this.props.history.location.pathname !== "/home"){
//       this.setState({
//         hidden:true,
//         selectedTab: this.props.history.location.pathname,
//       })
//     }
//   }
//   render() {
//     return (
//       <div id="tabBown" style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100%' }}>
//         <TabBar
//           unselectedTintColor="#888883"
//           tintColor="rgb(241, 18, 18)"
//           barTintColor="white"
//           hidden={this.state.hidden}
//         >
//           <TabBar.Item
//             title="首页"
//             key="home"
//             icon={<i
//               className="iconfont icon-shouye"
//             />
//             }
//             selectedIcon={<i
//               className="iconfont icon-shouye"
//             />
//             }
//             selected={this.state.selectedTab === '/home'}
//             // badge={1}
//             onPress={this.jumpRoute.bind(this, '/home', "true")}

//             data-seed="logId"
//           >
//             {/* {this.renderContent('/home')} */}
//           </TabBar.Item>

//           <TabBar.Item
//             icon={
//               <i
//                 className="iconfont icon-fenlei"
//               />
//             }
//             selectedIcon={
//               <i
//                 className="iconfont icon-fenlei"
//               />
//             }
//             title="分类"
//             key="category"
//             // badge={'new'}
//             selected={this.state.selectedTab === '/category'}
//             onPress={this.jumpRoute.bind(this, '/category')}
//             data-seed="logId1"
//           >
//             {this.renderContent('/category')}
//           </TabBar.Item>
//           <TabBar.Item
//             icon={
//               <i
//                 className="iconfont icon-pinpaiqingcang"
//               />
//             }
//             selectedIcon={
//               <i
//                 className="iconfont icon-pinpaiqingcang"
//               />
//             }
//             title="清仓"
//             key="clearance"
//             selected={this.state.selectedTab === '/clearance'}
//             onPress={this.jumpRoute.bind(this, '/clearance')}
//           >
//             {/* {this.renderContent('/clearance')} */}
//           </TabBar.Item>
//           <TabBar.Item
//             icon={<i
//               className="iconfont icon-tubiaolunkuo-"
//             />}
//             selectedIcon={<i className="iconfont icon-tubiaolunkuo-"
//               style={{
//                 width: '26px',
//                 height: '26px',
//                 fontSize: "22px"
//               }}
//             />}
//             title="购物车"
//             key="car"
//             selected={this.state.selectedTab === '/car'}
//             onPress={this.jumpRoute.bind(this, '/car')}
//           >
//             {this.renderContent('/car')}
//           </TabBar.Item>
//           <TabBar.Item
//             icon={<i
//               className="iconfont icon-ziyuan"
//               style={{
//                 width: '26px',
//                 height: '26px',
//                 fontSize: "22px"
//               }}
//             />}
//             selectedIcon={<i className="iconfont icon-ziyuan"
//               style={{
//                 width: '26px',
//                 height: '26px',
//                 fontSize: "22px"
//               }}
//             />}
//             title="我的"
//             key="my"
//             selected={this.state.selectedTab === '/my'}
//             onPress={this.jumpRoute.bind(this, '/my')}
//           >
//             {this.renderContent('/my')}
//           </TabBar.Item>
//         </TabBar>
//       </div>
//     );
//   }
// }

export default TabBarExample