/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: abjcloudsolutions.com dashboard management portal
    Author: Justed@Aidy
  Staging URL: http://tripcarte.gispatial.tech/api
==========================================================================================*/


export default {
  getEvent: state => (eventId) => state.events.find((event) => event.id == eventId),
}
