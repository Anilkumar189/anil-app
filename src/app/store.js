import {configureStore} from '@reduxjs/toolkit'
import { countriesApi } from '../services/countriesApi';
import { productsApi } from '../services/productsApi';
import countriesReducer from '../features/countries/CountriesSlice';
export const store = configureStore({
    reducer: {
        countriesReducer,
        [countriesApi.reducerPath]:countriesApi.reducer,
        [productsApi.reducerPath]:productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware),
})