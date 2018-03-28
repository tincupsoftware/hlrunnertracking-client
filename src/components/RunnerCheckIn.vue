<template>
<div id="runnercheckinwrapper">
<div id="runnercheckin">
  <v-form id="runnercheckinform" v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Bib #"
      v-model="bibNumber"
    ></v-text-field>
    <v-text-field
      label="Name"
      v-model="name"
    ></v-text-field>
    <v-text-field
      label="Shirt Size"
      v-model="shirtSize"
    ></v-text-field>
    <v-text-field
      label="Location Staying"
      v-model="locationStaying"
    ></v-text-field>
     <v-text-field
      label="Shoe Bath"
      v-model="shoeBath"
    ></v-text-field>
        <v-text-field
      label="Medical Conditions"
      v-model="medicalCondition"
    ></v-text-field>
    <v-text-field
      label="Current Medications"
      v-model="medication"
    ></v-text-field>
    <v-btn
      @click="addNewRunner"
      :disabled="!valid"
    >
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
          medication: '',
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
          medication: this.medication,
        })
      })
        .then(response => response.json())
        .then(() => this.confirmSubmission())
        .then(() => this.clear())
        .then(() => {
          setTimeout(() => {
            this.$router.push({ name: 'RunnerCheckIn' })
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
#runnercheckinwrapper {
  display: flex;
  justify-content: center;
}
#runnercheckin {
  align-self: center;
  margin: 10vh auto auto auto;
  padding: 10vh;
  align-self: center;
  width: 60vw;
}
#runnercheckinform {
  justify-content: space-around;
  width: 50vw;
}
#submissionconfirmation {
  margin: 1vh;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 300;
}
</style>