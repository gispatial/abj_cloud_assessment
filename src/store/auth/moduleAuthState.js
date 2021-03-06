/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Item Name: abjcloudsolutions.com dashboard management portal
    Author: Justed@Aidy
  Staging URL: http://tripcarte.gispatial.tech/api
==========================================================================================*/


import auth from "@/auth/authService";

export default {
  /*
    isUserLoggedIn: () => {
        let isAuthenticated = false
        // get firebase current user
        //const firebaseCurrentUser = firebase.auth().currentUser
        //if (auth.isAuthenticated() || firebaseCurrentUser) isAuthenticated = true
        //else isAuthenticated = false
        return (localStorage.getItem('userInfo') && isAuthenticated)
    },
    */
    status: '',
    token: localStorage.getItem('accessToken') || ''
}
