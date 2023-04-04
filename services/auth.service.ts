import axios from '../axios'

const ROUTER_URL = '/api/auth/';

interface RegisterInterface {
    name: string,
    emailId: string,
    password: string,
    userName: string,
    userLevel: number,
    rating: number,
    phone: number
}

interface LoginInterface {
    password: string,
    userName: string,
}

const register = async ({ name, emailId, password, userName, userLevel, rating, phone }: RegisterInterface) => {
    return await axios.post(ROUTER_URL + "signup", {
        name,
        emailId,
        password,
        userName,
        userLevel,
        rating,
        phone
    }).then(response => {
        return response.data;
    })
};

const login = async ({ userName, password }: LoginInterface) => {
    return await axios.post(ROUTER_URL + "login", {
        userName,
        password
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("token", JSON.stringify(response.data));
        }
        return response.data;
    })
}

const logout = () => {
    localStorage.removeItem("token");
};

export default {
    register, login, logout
}
