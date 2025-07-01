import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    "get/userMailPassword",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("http://localhost:3000/users")
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)


export const login = createAsyncThunk(
    "post/user",
    async (data, thunkAPI) => {
        try {
            const res = await axios.post("http://localhost:3000/user", data)
            return res.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)


export const getUser = createAsyncThunk(
    "user/get",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('http://localhost:3000/user')
            return res.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)


const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        users: [],
        user: null,
        loading: false,
        loadingUser:true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true
                state.error = ""
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload
                state.loading = false
                state.error = ""
            })
            .addCase(login.pending, (state) => {
                state.loading = true
                state.error = ""
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.error = ""
                state.user = action.payload
            })
            .addCase(getUser.pending, (state) => {
                state.errors = ""
            })
            .addCase(getUser.rejected, (state, action) => {
                state.error = action.payload
                state.loadingUser = false
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.loadingUser = false
                state.error = ""
            })
    }
})

export default userSlice.reducer