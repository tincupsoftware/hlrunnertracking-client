<template>
  <v-data-table
    :headers="headers"
    :items="runners"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-center">{{ props.item.bibNumber }}</td>
      <td class="text-xs-center">{{ props.item.Started }}</td>
      <td class="text-xs-center">{{ props.item.RasberryOneIn}}</td>
      <td class="text-xs-center">{{ props.item.RasberryOneOut}}</td>
      <td class="text-xs-center">{{ props.item.AnteroIn}}</td>
      <td class="text-xs-center">{{ props.item.AnteroOut}}</td>
      <td class="text-xs-center">{{ props.item.StElmoOneIn}}</td>
      <td class="text-xs-center">{{ props.item.StElmoOneOut}}</td>
      <td class="text-xs-center">{{ props.item.CottonwoodIn}}</td>
      <td class="text-xs-center">{{ props.item.CottonwoodOut}}</td>
      <td class="text-xs-center">{{ props.item.StElmoTwoIn}}</td>
      <td class="text-xs-center">{{ props.item.StElmoTwoOut}}</td>
      <td class="text-xs-center">{{ props.item.HancockIn}}</td>
      <td class="text-xs-center">{{ props.item.HancockOut}}</td>
      <td class="text-xs-center">{{ props.item.HancockPacerIn}}</td>
      <td class="text-xs-center">{{ props.item.HancockPacerOut}}</td>
      <td class="text-xs-center">{{ props.item.LostWonderIn}}</td>
      <td class="text-xs-center">{{ props.item.LostWonderOut}}</td>
      <td class="text-xs-center">{{ props.item.LostWonderPacerIn}}</td>
      <td class="text-xs-center">{{ props.item.LostWonderPacerOut}}</td>
      <td class="text-xs-center">{{ props.item.PurgatoryIn}}</td>
      <td class="text-xs-center">{{ props.item.PurgatoryOut}}</td>
      <td class="text-xs-center">{{ props.item.PurgatoryPacerIn}}</td>
      <td class="text-xs-center">{{ props.item.PurgatoryPacerOut}}</td>
      <td class="text-xs-center">{{ props.item.MonarchIn}}</td>
      <td class="text-xs-center">{{ props.item.MonarchOut}}</td>
      <td class="text-xs-center">{{ props.item.MonarchPacerIn}}</td>
      <td class="text-xs-center">{{ props.item.MonarchPacerOut}}</td>
      <td class="text-xs-center">{{ props.item.FoosesIn}}</td>
      <td class="text-xs-center">{{ props.item.FoosesOut}}</td>
      <td class="text-xs-center">{{ props.item.FoosesPacerIn}}</td>
      <td class="text-xs-center">{{ props.item.FoosesPacerOut}}</td>
      <td class="text-xs-center">{{ props.item.BlanksIn}}</td>
      <td class="text-xs-center">{{ props.item.BlanksOut}}</td>
      <td class="text-xs-center">{{ props.item.BlanksPacerIn}}</td>
      <td class="text-xs-center">{{ props.item.BlanksPacerOut}}</td>
      <td class="text-xs-center">{{ props.item.RasberryTwoIn}}</td>
      <td class="text-xs-center">{{ props.item.RasberryTwoOut}}</td>
      <td class="text-xs-center">{{ props.item.RasberryTwoPacerIn}}</td>
      <td class="text-xs-center">{{ props.item.RasberryTwoPacerOut}}</td>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    name: 'RunnerList',
    data () {
      return {
      runners: [],
      apiUrl: 'https://hl100-runnertracking.herokuapp.com/api/beta/runners/',
      headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Bib Number', align: 'center', value: 'bibNumber' },
          { text: 'Started', align: 'center', value: 'Started' },
          { text: 'Rasberry Time In', align: 'center', value: 'RasberryOneIn' },
          { text: 'Rasberry Time Out', align: 'center',  value: 'RasberryOneOut' },
          { text: 'Antero Time In', align: 'center',  value: 'AnteroIn' },
          { text: 'Antero Time Out', align: 'center',  value: 'AnteroOut' },
          { text: 'St Elmo One Time In', align: 'center',  value: 'StElmoOneIn' },
          { text: 'St Elmo One Time Out', align: 'center',  value: 'StElmoOneOut' },
          { text: 'Cottonwood Time In', align: 'center',  value: 'CottonwoodIn' },
          { text: 'Cottonwood Time Out', value: 'CottonwoodOut' },
          { text: 'St Elmo Two Time In', value: 'StElmoTwoIn' },
          { text: 'St Elmo Two Time Out', value: 'StElmoTwoOut' },
          { text: 'Hancock Time In',  align: 'center', value: 'HancockIn' },
          { text: 'Hancock Time Out',  align: 'center', value: 'HancockOut' },
          { text: 'Hancock Pacer In',  align: 'center', value: 'HancockPacerIn' },
          { text: 'Hancock Pacer Out',  align: 'center', value: 'HancockPacerOut' },
          { text: 'Lost Wonder In',  align: 'center', value: 'LostWonderIn' },
          { text: 'Lost Wonder Out',  align: 'center', value: 'LostWonderOut' },
           { text: 'Lost Wonder Pacer In',  align: 'center', value: 'LostWonderPacerIn' },
          { text: 'Lost Wonder Pacer Out',  align: 'center', value: 'LostWonderPacerOut' },
          { text: 'Purgatory Time In', align: 'center',  value: 'PurgatoryIn' },
          { text: 'Purgatory Time Out', align: 'center',  value: 'PurgatoryOut' },
          { text: 'Purgatory Pacer In', align: 'center',  value: 'PurgatoryPacerIn' },
          { text: 'Purgatory Pacer Out', align: 'center',  value: 'PurgatoryPacerOut' },
          { text: 'Monarch Time In', align: 'center',  value: 'MonarchIn' },
          { text: 'Monarch Time Out', align: 'center',  value: 'MonarchOut' },
          { text: 'Monarch Pacer In', align: 'center',  value: 'MonarchPacerIn' },
          { text: 'Monarch Pacer Out', align: 'center',  value: 'MonarchPacerOut' },
          { text: 'Fooses Time In', align: 'center',  value: 'FoosesIn' },
          { text: 'Fooses Time Out', align: 'center',  value: 'FoosesOut' },
          { text: 'Fooses Pacer In', align: 'center',  value: 'FoosesPacerIn' },
          { text: 'Fooses Pacer Out', align: 'center',  value: 'FoosesPacerOut' },
          { text: 'Blanks Time In', align: 'center',  value: 'BlanksIn' },
          { text: 'Blanks Time Out', align: 'center',  value: 'BlanksOut' },
          { text: 'Blanks Pacer In', align: 'center',  value: 'BlanksPacerIn' },
          { text: 'Blanks Pacer Out', align: 'center',  value: 'BlanksPacerOut' },
          { text: 'Rasberry Two Time In', align: 'center',  value: 'RasberryTwoIn' },
          { text: 'Rasberry Two Time Out', align: 'center',  value: 'RasberryTwoOut' },
          { text: 'Rasberry Two Pacer In', align: 'center',  value: 'RasberryTwoPacerIn' },
          { text: 'Rasberry Two Pacer Out', align: 'center',  value: 'RasberryTwoPacerOut' },

        ],
      }
    },
    mounted () {
    this.getDataFromDatabase()
  },
  methods: {
    getDataFromDatabase () {
      fetch(this.apiUrl)
        .then(response => response.json())
        .then(response => {
          this.runners = response
        })
    }
  },
  }
</script>
<style scoped>
</style>
