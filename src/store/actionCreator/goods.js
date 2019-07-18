import React, { Component } from 'react'
import axios from 'axios';
import goods from '../state/goods';
export default {
    addCarList(e, num) {
        // console.log(11,e,num)
        const goods = this.state.goods;
        const username = localStorage.user;
        e.persist(
            console.log(username, goods, num),
            axios.get("/jx/addCar", {
                    params: {
                        username,
                        goods,
                        num
                    }
                }
            )
            .then(({ data }) => {
              //   console.log(data)
            }))
        
        return (dispatch=>{
            dispatch({
                type:"ADD_CARGOODS",
                payload:{
                    goods: this.state.goods
                }
            })
        })
    }
}
