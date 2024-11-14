import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {tokenInfoTypes, UserModalType, UserRoles, UserSliceSchema} from "./UserSliceSchema";
import {USER_ACCESS_TOKEN_KEY} from "@/const/localStorage";
import {jwtDecode} from "jwt-decode";
import {UserData} from "../services/loginByUsername";
import {FiltersSliceSchema} from "@/store/reducers/FiltersSliceSchema";
import {ProductsLabelsMap, ProductTypeLowerCase, unionDescriptionsValues} from "@/types/productsTypes";


const initialState: FiltersSliceSchema = {
    computersFilters: {},
    laptopsFilters: {},
    tvsFilters: {},
    phonesFilters: {},
    tabletsFilters: {},
    musicSpeakersFilters: {},
    currentGoodCategory: 'phones'
};

export const FiltersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        clearAllFilters: (state: FiltersSliceSchema) => {
            state.computersFilters = {};
            state.tabletsFilters = {};
            state.phonesFilters = {};
            state.tvsFilters = {};
            state.musicSpeakersFilters = {};
            state.laptopsFilters = {};
        },
        setCurrentGoodCategory: (state: FiltersSliceSchema, action: PayloadAction<ProductTypeLowerCase>) => {
            state.currentGoodCategory = action.payload;

        },
        setComputersFilters: (state: FiltersSliceSchema, action: PayloadAction<{filterName: keyof typeof ProductsLabelsMap, filterValue: unionDescriptionsValues}>) => {
            const { filterName, filterValue } = action.payload;
            state.computersFilters[filterName] = filterValue;
        },
        setLaptopsFilters: (state: FiltersSliceSchema, action: PayloadAction<{filterName: keyof typeof ProductsLabelsMap, filterValue: unionDescriptionsValues}>) => {
            const { filterName, filterValue } = action.payload;
            state.laptopsFilters[filterName] = filterValue;
        },
        setTabletsFilters: (state: FiltersSliceSchema, action: PayloadAction<{filterName: keyof typeof ProductsLabelsMap, filterValue: unionDescriptionsValues}>) => {
            const { filterName, filterValue } = action.payload;
            state.tabletsFilters[filterName] = filterValue;
        },
        setTvsFilters: (state: FiltersSliceSchema, action: PayloadAction<{filterName: keyof typeof ProductsLabelsMap, filterValue: unionDescriptionsValues}>) => {
            const { filterName, filterValue } = action.payload;
            state.tvsFilters[filterName] = filterValue;
        },
        setMusicSpeakersFilters: (state: FiltersSliceSchema, action: PayloadAction<{filterName: keyof typeof ProductsLabelsMap, filterValue: unionDescriptionsValues}>) => {
            const { filterName, filterValue } = action.payload;
            state.musicSpeakersFilters[filterName] = filterValue;
        },
        setPhonesFilters: (state: FiltersSliceSchema, action: PayloadAction<{filterName: keyof typeof ProductsLabelsMap, filterValue: unionDescriptionsValues}>) => {
            const { filterName, filterValue } = action.payload;
            state.phonesFilters[filterName] = filterValue;
        },
    },
});

export const { actions: FiltersSliceActions } = FiltersSlice;
export const { reducer: FiltersSliceReducer } = FiltersSlice;
