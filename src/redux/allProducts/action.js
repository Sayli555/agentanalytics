import axios from "axios";
import * as types from "./actionType";

const allProductFetchRequest=()=>{
    return {
        type:types.ALL_PRODUCT_FETCH_REQUEST,
    }
}

const allProductFetchSuccess=(payload)=>{
    return {
        type:types.ALL_PRODUCT_FETCH_SUCCESS,
        payload
    }
}

const allProductFetchFailure=()=>{
    return {
        type:types.ALL_PRODUCT_FETCH_FAILURE,
    }
}


export const allDataGet=(params)=>(dispatch)=>{
dispatch(allProductFetchRequest());
axios.get("https://eshopren.onrender.com/all",params)
.then((r)=>

dispatch(allProductFetchSuccess(r.data))
)
.catch((e)=>dispatch(allProductFetchFailure(e.data)))
}


// **************************************************all single product ***********************************************


const allSingleProductRequest=()=>{
    return {
        type:types.ALL_SINGLE_PRODUCT_REQUEST,
    }
}

const allSingleProductSuccess=(payload)=>{
    return {
        type:types.ALL_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const allSingleProductFailure=()=>{
    return {
        type:types.ALL_SINGLE_PRODUCT_FAILURE,
    }
}


export const allSingleDataGet=(payload)=>(dispatch)=>{
dispatch(allSingleProductRequest());
axios.get(`https://eshopren.onrender.com/all/${payload}`)
.then((r)=>
// console.log("r",r.data)
dispatch(allSingleProductSuccess(r.data))
)
.catch((e)=>dispatch(allSingleProductFailure(e.data)))
}

