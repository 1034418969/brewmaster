import React from 'react'
import "../../assets/css/search.css"
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'



/*//封装jonsp为promise对象
function jsonp(url,opts={}) {
    return new Promise((resolve,reject)=>{
        JSONP(url,opts, (err,data)=> {
            if (err) reject(err);
            resolve(data);
        })
    })
}*/



class Search extends React.Component{
    constructor (){
        super();
        this.state={
            hotList:[],
            searchvalue:"",
            searchlist:[],
            searchisShow:false
        }
    }
    componentDidMount(){
        axios.get("/mlist/m_v1/search/getHotKeyword?%20jsoncallback=jQuery16206308000392189062_1563024437803&_=1563024439540").then(({data})=>{
            console.log(123,data.hotKeywords.slice(1))
            this.setState({
                hotList:data.hotKeywords.slice(1)
            })
        })


    }
    render(){
        return(
            <div className="search">
                <div className="search_head">
                    <span className="goback" onClick={this.goback.bind(this)}>《</span>
                    <input type="text"
                           placeholder="澳洲专场特卖：满399送精美高脚杯8支"
                           value={this.state.searchvalue}
                           onChange={this.add.bind(this)}
                           ref="txt"/>
                    <span>搜索</span>
                </div>
                <ul className="searchlist" style={{display:this.state.searchisShow?"block":"none"}}>
                    {

                        this.state.searchlist.map((v,i)=>{
                            return (
                                <li className="searchcon" onClick={this.xuanzhong.bind(this,v.word)}>{v.word}</li>
                            )
                        })

                    }
                </ul>
                <div className="search_hot">
                    <span className="search_bt">@  热门搜索</span>
                    <div className="searchhot_con">
                        {
                            this.state.hotList.map((v,i)=>{
                                return(
                                    <span className="hots" style={{color:v.color}} key={i}>{v.keyword}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <p className="ever_search">
                    <span className="search_bt">@  最近搜索</span>
                </p>
            </div>
        )
    }

    /*search(){

    }
*/

    xuanzhong(word){
        this.setState({
            searchvalue:word,
            searchisShow:false
        })


    }
    goback(){
        this.props.history.go(-1)
    }
    add(){
        this.setState({
            searchvalue:this.refs.txt.value,
        })
        if(this.state.searchvalue.length===0){
            this.setState({
                searchisShow:false
            })
        }else{
            this.setState({
                searchisShow:true
            })
        }

       /*
       第一种
       axios.get("/mlist/m_v1/search/getSuggestKeyword?jsoncallback=fn&wd="+this.refs.txt.value+"&_=1563023912284").then(({data})=>{
            data()
            console.log(data);
            this.setState({
                searchlist:data
            })
        })
        console.log("返回的数据",this.state.searchlist)*/




    //  第二种

        var url='/mlist/m_v1/search/getSuggestKeyword?jsoncallback=fn&wd='+this.refs.txt.value
        fetchJsonp(url, {
            jsonpCallbackFunction: 'fn',
        })
            .then((response)=>{
                return response.json()
            }).then((json)=>{
            console.log('哎', json.suggests)
            this.setState({
                searchlist:json.suggests?json.suggests:[]
            })

        }).catch(function(ex) {
            console.log('惨', ex)
        })


       /* //第四种
        var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
        fetchJsonp(api)
            .then(function(response) {
                return response.json()
            }).then((json)=> {
            // console.log(json);

            this.setState({

                list:json.result
            })

        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
        */





      //第三种

/*

        var ajax = {
            jsonp(url,data,callback){
                return new Promise((resolve,reject)=>{
                    // https://www.baidu.com/sugrec?prod=pc&&wd=%E6%B0%B4%E6%B5%92%E4%BC%A0&cb=lalalala
                    var script = document.createElement("script");
                    var cbName = "m"+Date.now();
                    var arr=[callback.jsonp+"="+cbName];// [cb=mxxxxxxx]  ["cb=m1559701390787"]
                    for(var key in data){
                        arr.push(key+"="+data[key]);// [prod="pc",wd=中国]
                    }
                    script.src=url+"?"+arr.join("&");

                    var response = {};
                    window[cbName] = function (obj) {
                        response.data = obj;
                    }
                    document.body.appendChild(script);

                    script.onload = ()=>{
                        document.body.removeChild(script);
                        delete window[cbName];
                        resolve(response);

                    };
                    script.onerror =()=>{
                        reject("网络连接错误")
                    }
                })


            }

        }




        var url='/mlist/m_v1/search/getSuggestKeyword?jsoncallback=fn&wd='
        this.$http.jsonp(url,{
            prod:"pc",
            wd:this.refs.txt.value
        },{
            jsonp:"cb"
        }).then(({data})=>{
            console.log(data);
            this.q = data.q;
            this.g = data.g;
        })

*/
    }





}

export default Search;


//搜索默认
// /m_v1/search/getHotKeywordjsoncallback=jQuery16206308000392189062_1563024437803&_=1563024439540