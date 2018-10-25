import Vue from 'vue'
import Router from 'vue-router'
import Edit from '@/components/Edit'
import Listing from '@/components/Listing'
import VueFire from 'vuefire'
Vue.use(Router)
Vue.use(VueFire)
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});
export default new Router({
  routes: [
    {
      path: '/',
      component: Listing,
      name:'listing'
    },
    {
      path: '/Edit',
      component: Edit, 
      name:'edit'    
    }
  ],



})
