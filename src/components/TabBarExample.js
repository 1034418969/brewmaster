import React from 'react'
import { TabBar } from 'antd-mobile';

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  renderContent(pageText) {
    return (
      <div>{pageText}</div>
    );
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
            key="Home"
            icon={<i
              className="iconfont icon-shouye"
              style={{
                width: '26px',
                height: '26px',
                fontSize: "22px"
              }}
            />
            }
            selectedIcon={<i
              className="iconfont icon-shouye"
              style={{
                width: '26px',
                height: '26px',
                fontSize: "22px"

              }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
              console.log(this)
            }}
            data-seed="logId"
          >
            {this.renderContent('首页')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                className="iconfont icon-fenlei"
                style={
                  {
                    width: '26px',
                    height: '26px',
                    fontSize: "22px"
                  }}
              />
            }
            selectedIcon={
              <div
                className="iconfont icon-fenlei"
                style={{
                  width: '26px',
                  height: '26px',
                  fontSize: "22px"
                }}
              />
            }
            title="分类"
            key="class"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('分类')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                className="iconfont icon-pinpaiqingcang"
                style={{
                  width: '26px',
                  height: '26px',
                  fontSize: "22px"
                }}
              />
            }
            selectedIcon={
              <div
                className="iconfont icon-pinpaiqingcang"
                style={{
                  width: '26px',
                  height: '26px',
                  fontSize: "22px"
                }}
              />
            }
            title="清仓"
            key="clearance"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('清仓')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i
              className="iconfont icon-tubiaolunkuo-"
              style={{
                width: '26px',
                height: '26px',
                fontSize: "22px"
              }}
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
            selected={this.state.selectedTab === 'car'}
            onPress={() => {
              this.setState({
                selectedTab: 'car',
              });
            }}
          >
            {this.renderContent('购物车')}
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
            selected={this.state.selectedTab === 'My'}
            onPress={() => {
              this.setState({
                selectedTab: 'My',
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarExample