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
      >
        <div class="text-bold">Please choose your age group</div>
        <div class="q-py-md">
          <div class="row q-mb-md justify-between">
            <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="Kids (1-15yrs)" />
            <q-btn outline color="primary" class="col text-capitalize" size="12px" label="Youth (16-25yrs)" />
          </div>
          <div class="row justify-between">
            <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="Adults (26-60yrs)" />
            <q-btn outline color="primary" class="col text-capitalize" size="12px" label="Seniors (60+yrs)" />
          </div>
        </div>
        <div class="text-bold">Please choose your gender</div>
        <div class="row justify-between q-py-md">
          <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="male" />
          <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="female" />
          <q-btn outline color="primary" class="col text-capitalize" size="12px" label="other" />
        </div>
      </q-step>

      <q-step
        :name="2"
        title="Symptoms"
        icon="create_new_folder"
        :done="step > 2"
      >
        <div class="text-bold">Please tell us your fever level</div>
        <div class="text-bold text-grey">(Normal Temprature is 98.6°F)</div>
        <div class="q-py-md">
          <div class="row q-mb-md justify-between">
            <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="Normal (<98.6°F)" />
            <q-btn outline color="primary" class="col text-capitalize" size="12px" label="Fever (98.6-102°F)" />
          </div>
          <div class="row justify-between">
            <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="High Fever (>102°F)" />
            <q-btn outline color="primary" class="col text-capitalize" size="12px" label="No Fever" />
          </div>
        </div>
        <div class="text-bold">Please tell us all your current symptoms</div>
        <div class="text-bold text-grey">(Mark all applicable)</div>
        <div class="q-py-md">
          <div class="row q-mb-md justify-between">
            <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="Cough" />
            <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="Sneezing" />
            <q-btn outline color="primary" class="col text-capitalize" size="12px" label="SoreThroat" />
          </div>
          <div class="row justify-between">
            <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="Weakness" />
            <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="Breathlessness" />
            <q-btn outline color="primary" class="col text-capitalize" size="12px" label="Diarrhoea" />
          </div>
        </div>
      </q-step>

      <q-step
        :name="3"
        title="Health & Activity History"
        icon="assignment"
      >
        <div class="text-bold">Please tell us your existing conditions</div>
        <div class="text-bold text-grey">(Mark all applicable)</div>
        <div class="q-py-md">
          <div class="row q-mb-md justify-between">
            <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="Weak Immunity" />
            <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="Heart Disease" />
            <q-btn outline color="primary" class="col text-capitalize" size="12px" label="Lung Disease" />
          </div>
          <div class="row justify-between">
            <q-btn outline color="primary" class="col text-capitalize q-mr-sm" size="12px" label="Kidney Failures" />
            <q-btn outline color="primary" class="col text-capitalize" size="12px" label="None of these" />
          </div>
        </div>
        <div class="text-bold q-mb-md">Please tell us about your recent activity</div>
        <q-btn outline color="primary" class="col text-capitalize full-width q-mb-md" size="12px" label="No Recent Travel" />
        <q-btn outline color="primary" class="col text-capitalize full-width q-mb-md" size="12px" label="Had Recent Travel" />
        <q-btn outline color="primary" class="col text-capitalize full-width q-mb-md" size="12px" label="Visited affected areas( <14 days back )" />
        <q-btn outline color="primary" class="col text-capitalize full-width q-mb-md" size="12px" label="Came into vicinity of COVID-19 affected person" />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="info" :label="step === 3 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="secondary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      step: 1,
      age: 40
    }
  }
}
</script>
