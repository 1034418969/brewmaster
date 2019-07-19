import axios from 'axios';
export default {
    addCarList(e, num) {
        const goods = this.state.goods;
        const username = localStorage.user;
        e.persist(
            axios.post("/jx/addCar", {
                        username,
                        ...goods,
                        num,
                        choice:false
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
