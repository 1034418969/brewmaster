import React from 'react'
import { TabBar } from 'antd-mobile';
import "../assets/css/TabBarExample.css";
import {withRouter} from "react-router-dom"


class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "/home",
      hidden: false,
      fullScreen: false,
    };
  }
  componentWillMount() {
    // 组件挂载之前，执行一次判断
    this.onHidden()
  }
  componentWillReceiveProps() {
    // 点击前进后退按钮时，也要判断是否导航组件
    this.onHidden()
  }
  // 点击事件
  jumpRoute(selectedTab) {
    this.props.history.push(selectedTab);
    this.onHidden()
  }
  onHidden() {
    if (this.props.history.location.pathname === "/home" || this.props.history.location.pathname === "/") {
      this.setState({
        hidden: false,
        selectedTab: "/home",
      })
    } else if (this.props.history.location.pathname !== "/home") {
      this.setState({
        hidden: true,
        selectedTab: this.props.history.location.pathname,
      })
    }
  }
  render() {
    return (
      <div id="tabBown" style={{display:this.state.hidden?"none":"block"}}>
        <TabBar
          unselectedTintColor="#888883"
          tintColor="rgb(241, 18, 18)"
          barTintColor="white"
          hidden={this.state.hidden}
          // tabBarPosition='top'
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

            />}
            selectedIcon={<i className="iconfont icon-ziyuan"

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

export default withRouter(TabBarExample);











