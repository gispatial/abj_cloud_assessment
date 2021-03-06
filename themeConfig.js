/*=========================================================================================
  File Name: themeConfig.js
  Description: Theme configuration
  ----------------------------------------------------------------------------------------
	Item Name: abjcloudsolutions.com dashboard management portal
	Author: Justed@Aidy
	Author URL: https://www.abjcloudsolutions.com/
==========================================================================================*/

// MAIN COLORS - TC_ASIA THEME COLORS
let colors = {
	primary : '#EA5455',
	success : '#1D2430',
	danger  : '#ED5567',
	warning : '#FF9F43',
	dark    : '#1E1E1E',
}

// CONFIGS
const themeConfig = {
  disableCustomizer : false,       // options[Boolean] : true, false(default)
  disableThemeTour  : false,       // options[Boolean] : true, false(default)
  footerType        : "sticky",    // options[String]  : static(default) / sticky / hidden
  hideScrollToTop   : false,       // options[Boolean] : true, false(default)
  mainLayoutType    : "vertical",  // options[String]  : vertical(default) / horizontal
  navbarColor       : "#ED5567",      // options[String]  : HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
  navbarType        : "sticky",  // options[String]  : floating(default) / static / sticky / hidden
  routerTransition  : "zoom-out", // options[String]  : zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
  rtl               : false,       // options[Boolean] : true, false(default)
  sidebarCollapsed  : false,       // options[Boolean] : true, false(default)
  theme             : "semi-dark",     // options[String]  : "light"(default), "dark", "semi-dark"

  // Not required yet - WIP
  userInfoLocalStorageKey: "userInfo",

  // NOTE: themeTour will be disabled in screens < 1200. Please refer docs for more info.
}

import Vue from 'vue'
import Vuesax from 'vuesax'
Vue.use(Vuesax, { theme:{ colors }, rtl: themeConfig.rtl })

export default themeConfig
