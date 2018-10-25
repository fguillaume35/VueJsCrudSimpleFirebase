// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import router from './router'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
require('bootstrap-sass')
Vue.use(VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
var AppVue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});




