import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { GET_USER, LOGIN_USER } from '../endpoints';
import axios from 'axios';
import { Dispatch } from 'redux';

export interface LoginState {
    loginPageIsLoading: boolean;
    userData: object;
    loginToken: string;
    loginMassageError: string | null;
    modalError: string | null;
}

export const initialState: LoginState = {
    userData: {
        login: "",
        password: ""
    },
    loginToken: localStorage.getItem("token") || "",
    loginPageIsLoading: false,
    loginMassageError: null,
    modalError: null,
};



export const setAuthToken = (token: string | null): void=> {
    // Функция setAuthToken: Она принимает один аргумент token и устанавливает заголовок Authorization 
    // для всех запросов Axios, если токен присутствует. Если токен отсутствует, заголовок удаляется.
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

const loginSlice: Slice<LoginState> = createSlice({
    name: 'login',
    initialState,
    reducers: {
        actionPageIsLoadingLogin: (state, action: PayloadAction<boolean>) => {
            state.loginPageIsLoading = action.payload;
        },
        actionToken: (state, action: PayloadAction<string>) => {
            localStorage.setItem('token', action.payload);
            state.loginToken = action.payload;
            setAuthToken(action.payload);
        },
        
        actionUserData: (state, action: PayloadAction<object>) => {
            state.userData = action.payload;
        },
        actionLoginMassageError: (state, action: PayloadAction<string>) => {
            state.loginMassageError = action.payload;
        },
        actionLoginError: (state, action: PayloadAction<string>) => {
            state.modalError = action.payload;
        },
    }
});

export const {
    actionPageIsLoadingLogin,
    actionToken,
    actionUserData,
    actionLoginError,
    actionLoginMassageError,
} = loginSlice.actions;

export const sendApiLogin = (value: { login: string; password: string }) => (dispatch: any) => {
    console.log('Sending login request with value:', value);  
    dispatch(actionPageIsLoadingLogin(true));

    const loginData = {
        loginOrEmail: value.login,
        password: value.password
    };

    return axios
        .post(LOGIN_USER, loginData)
        .then((response) => {
            console.log('Login response:', response); 
            const token = response.data.token; 
            dispatch(actionToken(token))
            dispatch(actionUserData(response.data));
            return response;
        })
        .catch((error) => {
            console.error('Login error:', error);  
            if (error.response) {
                console.error('Error response data:', error.response.data);  
                dispatch(actionLoginMassageError(error.response.data.message));
            } else {
                dispatch(actionLoginMassageError('An unknown error occurred.'));
            }
            dispatch(actionLoginError(true));
        }).finally(() => {
            dispatch(actionPageIsLoadingLogin(false));
        });
};

export const getUserApi = ()=>async (dispatch: Dispatch)  =>{
    return axios
    .get(GET_USER)
    .then(customer =>{
        dispatch(actionUserData(customer.data))
    })
    .catch(error => {
        console.error('Get user error:', error);
    });

};
// import { Dispatch } from 'redux';


// export const getUserApi = () => async (dispatch: Dispatch) => {
//     try {
//         const response = await axios.get(GET_USER);
//         dispatch({ type: 'SET_USER_DATA', payload: response.data });
//     } catch (error) {
//         dispatch({ type: 'API_ERROR', payload: error });
//     }
// };

export default loginSlice.reducer;
