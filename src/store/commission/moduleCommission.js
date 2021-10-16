/*=========================================================================================
  File Name: moduleCommission.js
  Description: Commission Module
  ----------------------------------------------------------------------------------------
  Item Name: abjcloudsolutions.com dashboard management portal
    Author: Justed@Aidy
  Staging URL: http://tripcarte.gispatial.tech/api
==========================================================================================*/


import state from './moduleCommissionState.js'
import mutations from './moduleCommissionMutations.js'
import actions from './moduleCommissionActions.js'
import getters from './moduleCommissionGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
