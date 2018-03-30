<template>
<!-- <div class="access"> -->
<v-container class="roster">
  <div class="page-header">
    <h1 align-center><span>{{title_span1}}</span> {{title}} <span>{{title_span2}}</span></h1>
  </div>
  <v-layout column align-center class="logo">
    <!-- <v-toolbar>
      <h1><span>{{title_span1}}</span> {{title}} <span>{{title_span2}}</span></h1>

    </v-toolbar> -->
    <v-card color="taupe">
      <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="items" :search="search">
        <template slot="items" slot-scope="props" color="secondary">
        <td>{{ props.item.bib }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.shoeBath }}</td>
      </template>
        <v-alert slot="no-results" :value="true" color="error" v-icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
    <div class="text-xs-center roster-link">
      <router-link class="nav-link-roster" :to="{ name: 'Access'}">
        <v-btn round color="secondary" class="btn-roster" large dark>
          RETURN
        </v-btn>
      </router-link>
      <router-link class="nav-link-roster" :to="{ name: 'RunnerCheckIn'}">
        <v-btn round color="secondary" class="btn-roster" large dark>
          add
        </v-btn>
      </router-link>
    </div>
  </v-layout>
</v-container>
<!-- </div> -->
</template>

<script>
export default {
  name: 'Roster',
  data () {
    return {
      title: 'RUNNERS',
      title_span1: 'TRAIL',
      title_span2: 'ROSTER',
      search: '',
      headers: [{
        text: 'BiB #',
        align: 'left',
        sortable: false,
        value: 'bib'
      },
      {
        text: 'Name',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      {
        text: 'Shoe Bath',
        align: 'left',
        sortable: false,
        value: 'shoeBath'
      }
      ],
      items: [{
        value: false,
        bib: '041',
        name: 'Brandon Johnson',
        shoeBath: 'Y'
      },
      {
        value: false,
        bib: '021',
        name: 'Charles Ballew',
        shoeBath: 'Y'
      },
      {
        value: false,
        bib: '001',
        name: 'Tyler Mustard',
        shoeBath: 'Y'
      },
      {
        value: false,
        bib: '048',
        name: 'Jordan Smith',
        shoeBath: 'Y'
      },
      {
        value: false,
        bib: '079',
        name: 'Some One',
        shoeBath: 'Y'
      },
      {
        value: false,
        bib: '051',
        name: 'Charles Ballew',
        shoeBath: 'Y'
      },
      {
        value: false,
        bib: '031',
        name: 'Tyler Mustard',
        shoeBath: 'Y'
      },
      {
        value: false,
        bib: '028',
        name: 'Jordan Smith',
        shoeBath: 'Y'
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.roster {
  padding: 0;
  margin: 0;
}
div.card {
  width: 90vw;
  height: 80vh;
}
.page-header {
  border: 6px solid #848181;
  background-color: #5B6789;
  padding: 0;
  margin-bottom: 20px;
  width: 100%;
}
h1 {
  width: 100%;
  text-align: center;
}
span {
  font-weight: 400;
}

.btn {
  font-size: 2rem;
  height: 5rem;
  width: 25rem;
}

.nav-link {
  color: #303131;
  text-decoration: none;
}
.roster-link {
  margin-top: 75px;
}

.nav-link-roster .btn-roster {
  color: #A97C54;
  font-size: 2rem;
  height: 3rem;
  width: 10rem;
  margin-bottom: 25px;
}

.nav-link-roster {
  text-decoration: none;
}
</style>
