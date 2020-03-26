<template>
  <q-page>
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
      vertical
      flat
      class="full-width"
    >
      <q-step
        :name="1"
        title="Personal Details"
        icon="supervised_user_circle"
        :done="step > 1"
        active-color="green"
      >
        <div class="text-bold">Please choose your age group</div>
        <div class="q-py-md">
          <div class="row q-mb-md justify-between">
            <q-btn :outline="age_group !== 1 ? true : false" color="primary" class="col text-capitalize q-mr-sm" @click="age_group = (age_group === 1 ? null : 1)" size="12px" label="Kids (1-15yrs)" />
            <q-btn :outline="age_group !== 2 ? true : false" color="primary" class="col text-capitalize" @click="age_group = (age_group === 2 ? null : 2)" size="12px" label="Youth (16-25yrs)" />
          </div>
          <div class="row justify-between">
            <q-btn :outline="age_group !== 3 ? true : false" color="primary" class="col text-capitalize q-mr-sm" @click="age_group = (age_group === 3 ? null : 3)" size="12px" label="Adults (26-60yrs)" />
            <q-btn :outline="age_group !== 4 ? true : false" color="primary" class="col text-capitalize" @click="age_group = (age_group === 4 ? null : 4)" size="12px" label="Seniors (60+yrs)" />
          </div>
        </div>
        <div class="text-bold">Please choose your gender</div>
        <div class="row justify-between q-py-md">
          <q-btn color="primary" :outline="gender !== 1 ? true : false" class="col text-capitalize q-mr-sm" @click="gender = (gender === 1 ? null : 1)" size="12px" label="male" />
          <q-btn color="primary" :outline="gender !== 2 ? true : false" class="col text-capitalize q-mr-sm" @click="gender = (gender === 2 ? null : 2)" size="12px" label="female" />
          <q-btn color="primary" :outline="gender !== 3 ? true : false" class="col text-capitalize" @click="gender = (gender === 3 ? null : 3)" size="12px" label="other" />
        </div>
      </q-step>

      <q-step
        :name="2"
        title="Symptoms"
        icon="create_new_folder"
        :done="step > 2"
        active-color="green"
      >
        <div class="text-bold">Please tell us your fever level</div>
        <div class="text-bold text-grey">(Normal Temprature is 98.6°F)</div>
        <div class="q-py-md">
          <div class="row q-mb-md justify-between">
            <q-btn :outline="fever !== 1 ? true : false" color="primary" class="col text-capitalize q-mr-sm" size="12px" @click="fever = (fever === 1 ? null : 1)" label="Normal (<98.6°F)" />
            <q-btn :outline="fever !== 2 ? true : false" color="primary" class="col text-capitalize" size="12px" @click="fever = (fever === 2 ? null : 2)" label="Fever (98.6-102°F)" />
          </div>
          <div class="row justify-between">
            <q-btn :outline="fever !== 3 ? true : false" color="primary" class="col text-capitalize q-mr-sm" @click="fever = (fever === 3 ? null : 3)" size="12px" label="High Fever (>102°F)" />
          </div>
        </div>
        <div class="text-bold">Please tell us all your current symptoms</div>
        <div class="text-bold text-grey">(Mark all applicable)</div>
        <div class="q-py-md">
          <div class="row q-mb-md justify-between">
            <q-btn :outline="!symptoms.includes(1) ? true : false" color="primary" class="col text-capitalize q-mr-sm" @click="symptoms = addOrRemoveFromArray(1, symptoms)" size="12px" label="Dry Cough" />
            <q-btn :outline="!symptoms.includes(2) ? true : false" color="primary" class="col text-capitalize q-mr-sm" @click="symptoms = addOrRemoveFromArray(2, symptoms)" size="12px" label="Sneezing" />
            <q-btn :outline="!symptoms.includes(3) ? true : false" color="primary" class="col text-capitalize" size="12px" @click="symptoms = addOrRemoveFromArray(3, symptoms)" label="SoreThroat" />
          </div>
          <div class="row q-mb-md justify-between">
            <q-btn :outline="!symptoms.includes(4) ? true : false" color="primary" class="col text-capitalize q-mr-sm" size="12px" @click="symptoms = addOrRemoveFromArray(4, symptoms)" label="Weakness" />
            <q-btn :outline="!symptoms.includes(5) ? true : false" color="primary" class="col text-capitalize q-mr-sm" size="12px" @click="symptoms = addOrRemoveFromArray(5, symptoms)" label="Breathlessness" />
            <q-btn :outline="!symptoms.includes(6) ? true : false" color="primary" class="col text-capitalize" size="12px" @click="symptoms = addOrRemoveFromArray(6, symptoms)" label="Diarrhoea" />
          </div>
          <div class="row justify-between">
            <q-btn :outline="!symptoms.includes(7) ? true : false" color="primary" class="col text-capitalize full-width" size="12px" @click="symptoms = addOrRemoveFromArray(7, symptoms)" label="Sudden loss of taste/smell" />
          </div>
        </div>
      </q-step>

      <q-step
        :name="3"
        title="Health & Activity History"
        icon="assignment"
        active-color="green"
      >
        <div class="text-bold">Please tell us your existing conditions</div>
        <div class="text-bold text-grey">(Mark all applicable)</div>
        <div class="q-py-md">
          <div class="row q-mb-md justify-between">
            <q-btn :outline="!conditions.includes(1) ? true : false" color="primary" class="col text-capitalize q-mr-sm" size="12px" @click="conditions = addOrRemoveFromArray(1, conditions)" label="Weak Immunity" />
            <q-btn :outline="!conditions.includes(2) ? true : false" color="primary" class="col text-capitalize q-mr-sm" size="12px" @click="conditions = addOrRemoveFromArray(2, conditions)" label="Heart Disease" />
            <q-btn :outline="!conditions.includes(3) ? true : false" color="primary" class="col text-capitalize" size="12px" @click="conditions = addOrRemoveFromArray(3, conditions)" label="Lung Disease" />
          </div>
          <div class="row justify-between">
            <q-btn :outline="!conditions.includes(4) ? true : false" color="primary" class="col text-capitalize q-mr-sm" size="12px" @click="conditions = addOrRemoveFromArray(4, conditions)" label="Kidney Failures" />
            <q-btn :outline="!conditions.includes(5) ? true : false" color="primary" class="col text-capitalize" size="12px" @click="conditions = addOrRemoveFromArray(5, conditions)" label="Diabetes" />
          </div>
        </div>
        <div class="text-bold q-mb-md">Please tell us about your recent activity</div>
        <q-btn :outline="travel !== 1 ? true : false" color="primary" class="col text-capitalize full-width q-mb-md" size="12px" @click="travel = (travel === 1 ? null : 1)" label="No Recent Travel" />
        <q-btn :outline="travel !== 2 ? true : false" color="primary" class="col text-capitalize full-width q-mb-md" size="12px" @click="travel = (travel === 2 ? null : 2)" label="Recent Travel to crowded areas" />
        <q-btn :outline="travel !== 3 ? true : false" color="primary" class="col text-capitalize full-width q-mb-md" size="12px" @click="travel = (travel === 3 ? null : 3)" label="Visited affected areas( <14 days back )" />
        <q-btn :outline="travel !== 4 ? true : false" color="primary" class="col text-capitalize full-width q-mb-md" size="12px" @click="travel = (travel === 4 ? null : 4)" label="Came into vicinity of COVID-19 affected person" />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="info" v-if="step < 3" label="Continue" />
          <q-btn @click="calculateRiskPercentate()" color="info" v-else label="Finish" />
          <q-btn v-if="step > 1" flat color="secondary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
    <q-dialog
      v-model="result_dialog"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="text-white">
        <q-toolbar class="bg-primary">
          <q-btn dense flat size="20px" icon="menu" color="primary" />
          <q-toolbar-title class="text-center">Results</q-toolbar-title>
          <q-btn dense flat size="20px" icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section v-if="result_dialog" class="q-pa-sm">
          <div class="text-center text-grey">Your risk of having contracted the virus is :</div>
          <h1 class="text-center" :style="{ color: getGreenToRed((100 - risk_percentage)) }">
            <animated-number
              :value="risk_percentage"
              :duration="1000"
              :formatValue="formatPercentage"
              easing="easeInOutSine"
            />
          </h1>
          <q-list bordered>
            <q-item>
              <q-item-section>
                <q-item-label class="text-grey-9 text-h5">COVID-19 Risk Level</q-item-label>
                <q-item-label caption>Your calculated risk evaluation</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label class="text-h6">{{getLevel(risk_percentage)}}</q-item-label>
                <q-item-label caption class="text-secondary">{{getStatus(risk_percentage)}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced />
            <q-item>
              <q-item-section>
                <q-item-label caption>Please note that these are only indicative results, Contact a doctor immediately if symptoms persists/becomes worse</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import AnimatedNumber from 'animated-number-vue'

export default {
  name: 'PageIndex',
  data () {
    return {
      step: 1,
      age_group: null,
      gender: null,
      fever: null,
      symptoms: [],
      conditions: [],
      travel: null,
      result_dialog: true,
      risk_percentage: 0
    }
  },
  components: {
    AnimatedNumber
  },
  methods: {
    formatPercentage (value) {
      return `${Number(value).toFixed(0)}%`
    },
    getGreenToRed (percent) {
      const r = percent < 50 ? 255 : Math.floor(255 - (percent * 2 - 100) * 255 / 100)
      const g = percent > 50 ? 255 : Math.floor((percent * 2) * 255 / 100)
      return 'rgb(' + r + ',' + g + ',0)'
    },
    getLevel (percent) {
      return percent < 30 ? 'Low' : (((parent > 30 && parent < 60) ? 'Medium' : 'High'))
    },
    getStatus (percent) {
      return percent < 30 ? 'Harmless' : (((parent > 30 && parent < 60) ? 'Fever' : 'Possible infection'))
    },
    addOrRemoveFromArray (val, array) {
      if (!array.includes(val)) {
        array.push(val)
      } else {
        array = array.filter(elm => elm !== val)
      }
      return array
    },
    calculateRiskPercentate () {
      // References
      // https://www.statnews.com/2020/03/03/who-is-getting-sick-and-how-sick-a-breakdown-of-coronavirus-risk-by-demographic-factors/
      // GENDER
      // 1 - 51%, 2 - 48%, 3 - 1%
      // AGE
      // 1 - 2% , 2 - 8% , 3 - 35% , 4 - 55%
      // FEVER
      // 1 - 1%, 2 - 20%,3- 80%
      // SYMPTOMS
      // 1 - 40%, 2 - 5%, 3 - 30% , 4 - 30% , 5 - 60% , 6 - 5% , 7 - 45%
      // CONDITIONS
      // 1 - 30% , 2 - 20% , 3 - 40% , 4 - 10% , 5 - 30%
      // TRAVEL
      // 1 - 2% , 2 - 8% , 3 - 15% , 4 - 75%
      // FORMULA
      // Gender - 2%, Age - 20%, Fever - 15%, Symptoms - 40%, Conditions - 13%, Travel - 10%
      const genderMap = {
        1: 51,
        2: 48,
        3: 1
      }
      const ageMap = {
        1: 2,
        2: 8,
        3: 35,
        4: 55
      }
      const feverMap = {
        1: 1,
        2: 20,
        3: 80
      }
      const symptomMap = {
        1: 40,
        2: 5,
        3: 30,
        4: 30,
        5: 50,
        6: 5,
        7: 45
      }
      const conditionMap = {
        1: 30,
        2: 20,
        3: 40,
        4: 10,
        5: 30
      }
      const travelMap = {
        1: 2,
        2: 8,
        3: 15,
        4: 75
      }

      const genderContribution = ((genderMap[this.gender] ? genderMap[this.gender] : 0) * 0.02)
      const ageContribution = ((ageMap[this.age] ? ageMap[this.age] : 0) * 0.2)
      const feverContribution = ((feverMap[this.fever] ? feverMap[this.fever] : 0) * 0.15)

      const symptomSum = this.symptoms.reduce((sum, symptom) => {
        return (sum + (symptomMap[symptom] ? symptomMap[symptom] : 0))
      }, 0)
      const symptomTotal = Object.keys(symptomMap).reduce((total, item) => {
        return (total + symptomMap[item])
      }, 0)
      const symptomContribution = (((symptomSum / symptomTotal) * 100) * 0.4)

      const conditionSum = this.conditions.reduce((sum, condition) => {
        return (sum + conditionMap[condition])
      }, 0)
      const conditionTotal = Object.keys(conditionMap).reduce((total, item) => {
        return (total + (conditionMap[item] ? conditionMap[item] : 0))
      }, 0)
      const conditionContribution = (((conditionSum / conditionTotal) * 100) * 0.13)

      const travelContribution = ((travelMap[this.travel] ? travelMap[this.travel] : 0) * 0.1)

      const riskPercentage = genderContribution + ageContribution + feverContribution + symptomContribution + conditionContribution + travelContribution

      this.risk_percentage = Math.round(riskPercentage)
      this.result_dialog = true
    }
  }
}
</script>
