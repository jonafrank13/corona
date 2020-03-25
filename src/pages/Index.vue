<template>
  <q-page class="q-pa-sm">
    <div class="q-my-md text-bold text-black">COVID-19 Outbreak Situation</div>
    <div class="dash-box">
      <div class="box-1">
        <div class="box-title text-bold text-center">Cases</div>
        <div class="box-data text-center">{{formatNumber(cases)}}</div>
        <div class="box-title-sm text-center">Updated: {{last_updated}}</div>
      </div>
      <div class="box-2">
        <div class="box-title text-bold text-center">Recoveries</div>
        <div class="box-data text-center">{{formatNumber(recoveries)}}</div>
        <div class="box-title-sm text-center">Updated: {{last_updated}}</div>
      </div>
      <div class="box-3">
        <div class="box-title text-bold text-center">Deaths</div>
        <div class="box-data text-center">{{formatNumber(deaths)}}</div>
        <div class="box-title-sm text-center">Updated: {{last_updated}}</div>
      </div>
      <div class="box-4">
        <div class="box-title text-bold text-center">Serious/Critical</div>
        <div class="box-data text-center">{{formatNumber(serious)}}</div>
        <div class="box-title-sm text-center">Updated: {{last_updated}}</div>
      </div>
    </div>
    <div class="q-my-md text-bold text-black">Worldwide Cases</div>
    <q-table
      :data="data"
      :columns="columns"
      row-key="id"
      flat
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      cases: 10000,
      recoveries: 2000,
      deaths: 5000,
      serious: 3000,
      last_updated: '12th Mar 2020, 07:00 AM',
      data: [],
      columns: [
        { name: 'country', required: true, label: 'Country', field: 'country', align: 'left', sortable: true },
        { name: 'confirmed', align: 'center', label: 'Cases', field: row => row.latest.confirmed, sortable: true },
        { name: 'deaths', align: 'center', label: 'Deaths', field: row => row.latest.deaths, sortable: true },
        { name: 'recovered', align: 'center', label: 'Recoveries', field: row => row.latest.recovered, sortable: true },
        { name: 'city', align: 'left', label: 'City', field: 'city', sortable: true },
        { name: 'province', align: 'left', label: 'Province', field: 'province', sortable: true },
        { name: 'last_updated', label: 'Last Updated', field: 'last_updated', sortable: true }
      ]
    }
  },
  methods: {
    refresh () {
      this.$q.loading.show()
      this.$axios.all([
        this.$axios.get('https://coronavirus-19-api.herokuapp.com/all'),
        this.$axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
      ]).then((resp) => {
        this.cases = resp[0].data.cases
        this.deaths = resp[0].data.deaths
        this.recoveries = resp[0].data.recovered
        this.serious = this.cases - this.deaths - this.recoveries
        this.last_updated = (new Date()).toDateString()

        this.data = resp[1].data.locations
      }).catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'bottom',
          message: 'API failed',
          icon: 'report_problem'
        })
      }).finally(() => {
        this.$q.loading.hide()
      })
    },
    formatNumber (value) {
      return new Intl.NumberFormat().format(value)
    }
  },
  mounted () {
    this.refresh()
  }
}
</script>
<style lang="scss" scoped>
.dash-box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  > div {
    width: calc(50% - 15px);
    height: 130px;
    border-radius: 3px;
    filter: drop-shadow(4.95px 4.95px 8.5px rgba(0,0,0,0.08));
    margin-bottom: 15px;
    padding: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .box-1 {
    background: $primary;
  }
  .box-2 {
    background: $accent;
  }
  .box-3 {
    background: $secondary;
  }
  .box-4 {
    background: $info;
  }
  .box-data {
    font-size: 26px;
    font-weight: 500;
  }
  .box-title {
    font-size: 18x;
  }
  .box-title-sm {
    font-size: 12px;
  }
}
</style>
