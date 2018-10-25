
<template id="Listing">
  <div>
    <div class="actions" >
      <router-link class="btn btn-info" :to="{name:'edit', params:{id:0}}" id="ajout"  ><i  class="fa fa-plus"> Ajouter</i></router-link>
    </div>
    <div class="filters row">
      <div class="form-group col-sm-3">
        <label for="search-element">Recherche : </label>
        <input v-model="searchKey" class="form-control" id="search-element"/>
      </div>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th>Nom</th>
        <th>Catégorie</th>
        <th class="col-sm-2">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="lib in filteredLibs" :key="lib['.key']" >
        <td>
          {{ lib.nom }}
        </td>
        <td>{{ lib.categorie }}</td>
        <td>
          <router-link class="btn btn-info btn-xs" :to="{name:'edit', params: {id: lib['.key']}}">Edition</i></router-link>
          <button class="btn btn-danger btn-xs" v-on:click="deleteItem(lib['.key'])" id="myBtn">Suppression</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  
</template>

<script>
import { db } from '../config/db';
import jQuery from 'jquery';
window.jQuery = window.$ = jQuery;
require('bootstrap-sass');

let libsRef = db.ref('libs');

export default {
  name: 'Listing',
  firebase: {
    libs: libsRef
  },
  data : function () { 
    return {
        newLib: {
          nom: '',
          categorie: '',
          installation:''
        },
        libs:[],
        searchKey:""
      };
  },
  computed: {
    filteredLibs() {
      return this.libs.filter(lib => {
        return lib.nom.indexOf(this.searchKey) > -1;
      });
    }
  },

  methods: {

    deleteItem(key) {
       if (confirm("Supprimer cet élément?")) {
        this.$firebaseRefs.libs.child(key).remove();
       }
    }
  }
}

</script>
