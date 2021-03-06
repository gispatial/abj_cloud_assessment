/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: abjcloudsolutions.com dashboard management portal
    Author: Justed@Aidy
  Staging URL: http://tripcarte.gispatial.tech/api
==========================================================================================*/

import jwt from "../../http/requests/auth/jwt/index.js"


import router from '@/router'

export default {
    loginJWT({ commit }, payload) {
      return new Promise((resolve,reject) => {
        commit('auth_request')
        jwt.login(payload.userDetails.username, payload.userDetails.password)
          .then(response => {

            // If there's user data in response
            if(response.status == 200) {
              // Navigate User to homepage
              //router.push(router.currentRoute.query.to || '/')

              // Set accessToken
              localStorage.setItem('accessToken', response.data['token'])

              // Update user details
              commit('UPDATE_USER_INFO', response.data, {root: true})

              // Set bearer token in axios
              //commit("SET_BEARER", response.data.accessToken)
              commit('auth_success', response.data['token'])

              // Navigate User to homepage
              router.push('/')

              resolve(response)
            }else {
              reject({message: 'Please try again later.'})
            }

          })
          .catch(error => {
            commit('auth_error')
            reject({message: 'Please double-check your username and password.'}) })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('userInfo')

        // Navigate back to Login Page
        router.push(router.currentRoute.query.to || '/pages/login')

        resolve()
      })
    }

    /*
    registerUserJWT({ commit }, payload) {
      const { displayName, email, password, confirmPassword } = payload.userDetails
      return new Promise((resolve,reject) => {
        // Check confirm password
        if(password !== confirmPassword) {
          reject({message: "Password doesn't match. Please try again."})
        }
        jwt.registerUser(displayName, email, password)
          .then(response => {
            // Redirect User
            router.push(router.currentRoute.query.to || '/')
            // Update data in localStorage
            localStorage.setItem("accessToken", response.data.accessToken)
            commit('UPDATE_USER_INFO', response.data.userData, {root: true})
            resolve(response)
          })
          .catch(error => { reject(error) })
      })
    },
    fetchAccessToken() {
      return new Promise((resolve) => {
        jwt.refreshToken().then(response => { resolve(response) })
      })
    }
    */
}
