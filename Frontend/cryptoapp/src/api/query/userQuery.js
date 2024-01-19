import Axios from "../axios";

const USER_URL = "/users";



export const signinUser = (email, password) => {
    return new Promise((resolve, reject) => {
      Axios.post(`${USER_URL}/login`, {
        "email": email,
        "password": password,
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject({ error });
        });
    });
  };

  export const sendForgot = ( password ,email ) => {
    return new Promise((resolve, reject) => {
      Axios.put(`${USER_URL}/forgot-password`, {
        "email": email,
        "password": password,
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  };

export const signUpUser = (firstName, lastName , email, password ) => {

   return new Promise((resolve, reject) => {

    Axios.post(`${USER_URL}/signup`, {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        
    }).then(response => {
        resolve(response.data);
    })
    .catch(error => {
        reject({ error });
    });
    });
    };

    export const sendVerificationMail = ({ email }) => {
      return new Promise((resolve, reject) => {
        Axios.post(`${USER_URL}/send-verification-mail`, { email })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject({error});
          });
      });
    };

export const getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token) => {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
};
