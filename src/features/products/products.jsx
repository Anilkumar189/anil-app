import React from "react";
import { useGetAllproductsQuery, useLazyGetAllproductsQuery } from "../../services/productsApi";
import { useState  } from "react";

function Products(){
    // var {isLoading,data}=useGetAllproductsQuery();
    // console.log("isLoading::",isLoading)
    // console.log("data::",data)
    var [isLoading,setIsLoading]=useState(true);
    var [data,setData]=useState({})
    var [getAllprodFn]=useLazyGetAllproductsQuery();
    function getProducts(){
        getAllprodFn().then ((res)=>{
            setIsLoading(false)
            setData(res.data)
        })
        
    }
    return (
        <div>
            <h1>Products</h1>
            <button onClick={()=>{getProducts()}}>Load our products</button>
            {
                isLoading && (<button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-grow-sm"  aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                </button>)}
                <ul>
                    {isLoading===false &&(
                        data.map(function(products){
                            return <li>{products.title}</li>
                        })
                    )}
                </ul>
        </div>
    )
}
export default Products