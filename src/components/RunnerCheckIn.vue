<template>
<div id="runnercheckinwrapper">
  <div id="runnercheckin">
    <h1>Add Runner to Roster</h1>
    <v-form id="runnercheckinform" v-model="valid" ref="form" lazy-validation>
      <v-text-field label="Bib #" v-model="bibNumber"></v-text-field>
      <v-text-field label="Name" v-model="name"></v-text-field>
      <v-text-field label="Shirt Size" v-model="shirtSize"></v-text-field>
      <v-text-field label="Location Staying" v-model="locationStaying"></v-text-field>
      <v-text-field label="Shoe Bath" v-model="shoeBath"></v-text-field>
      <v-text-field label="Medical Conditions" v-model="medicalCondition"></v-text-field>
      <v-text-field label="Current Medications" v-model="medication"></v-text-field>
      <v-btn @click="addNewRunner" :disabled="!valid">
        submit
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
    <p id="submissionconfirmation" v-model="submissionText">{{submissionText}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'RunnerCheckIn',
  data: () => ({
    apiUrl: 'https://hl100-runnertracking.herokuapp.com/runners',
    valid: true,
    checkbox: false,
    submissionText: '',
    id: 0,
    bibNumber: 0,
    name: '',
    shirtSize: '',
    locationStaying: '',
    shoeBath: '',
    medicalCondition: '',
    medication: ''
  }),
  methods: {
    addNewRunner () {
      fetch(this.apiUrl, {
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
          bibNumber: this.bibNumber,
          name: this.name,
          shirtSize: this.shirtSize,
          locationStaying: this.locationStaying,
          shoeBath: this.shoeBath,
          medicalCondition: this.medicalCondition,
          medication: this.medication
        })
      })
      .then(response => response.json())
      .then(() => this.confirmSubmission())
      .then(() => this.clear())
      .then(() => {
        setTimeout(() => {
          this.$router.push({
            name: 'RunnerCheckIn'
          })
        }, 1500)
      })
      .catch(err => console.log('Request failed', err))
    },
    clear () {
      this.$refs.form.reset()
    },
    confirmSubmission () {
      this.submissionText = 'Submission successful!'
      setTimeout(() => {
        this.submissionText = ''
      }, 1500)
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding-top: 20px;
}
#runnercheckinform {
  margin-top: 5%;
  padding: 5% 10%;
  color: white;
  background-color: #CBA37F;
  /* background-color: #F6D7BD; */
}

#runnercheckinwrapper {
  display: flex;
  justify-content: center;
}

#runnercheckin {
  align-self: center;
  width: 80vw;
}

#runnercheckinform {
  justify-content: space-around;
  width: 80vw;
}

#submissionconfirmation {
  margin: 1vh;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 300;
}
</style>
