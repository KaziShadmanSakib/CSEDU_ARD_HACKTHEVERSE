import {React, useEffect, useState} from 'react'
import * as api from '../api/index.js';
import { useSelector, useDispatch } from 'react-redux';
function What(){
    // const dispatch = useDispatch();
    const fetchData = async () =>{
    const newData = await api.getCountries()
    const countries = newData.data;
    var cityList = []
    console.log(countries[0].country)
    console.log(newData.data)

    const state = await api.getStatesByCountry(countries[0].country)
    console.log (state.data)
    // for(let i = 0;i < countries.length; i++){
    //     var state = await api.getStatesByCountry(countries[i])

    // }
    // console.log('ya re bai')
    // const states = await api.getStatesByCountry('China')
    // console.log('oibo re')
    // console.log(states)

    // const cities = await api.getCitiesByState('China' , 'Hainan')
    // console.log(cities)

    // const bruh = await api.getCityAirData('Dhaka')
    // console.log(bruh)

    // const allCities = await api.getAllCities()
    // console.log(allCities)
  }
    useEffect(()=>{
    fetchData()
    },[])
    return(
        <div>
            <h1>App data</h1>
        </div>
    );
}
export default What;