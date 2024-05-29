import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCoutries } from "./CountriesSlice";
import { useGetAllCountriesQuery } from "../../services/countriesApi";
 
function Countries(){
    var {isLoading,data}=useGetAllCountriesQuery();
   var desam=useSelector(state=>state.countriesReducer.countries)
    var dispatch = useDispatch()
     useEffect(()=>{
        if(isLoading===false){
          dispatch(updateCoutries(data))
        }
     },[isLoading])
     console.log(desam);
    return (
        <div>
            <h1>Countries</h1>
            {isLoading &&( <button class="btn btn-primary" tye="button" disabled>
                <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>

            </button>
            )}
            <ul>
            {isLoading===false &&(
                desam?.map(function(country){
                    return <li>{country.name.common}</li>
                })
            )}
            </ul>
        </div>
    )
}
export default Countries