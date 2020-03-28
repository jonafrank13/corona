<template>
  <q-page class="q-pa-sm">
    <div class="q-my-md text-bold text-black text-h6">COVID-19 Outbreak Situation</div>
    <div class="dash-box">
      <div class="box-1">
        <div class="box-title text-bold text-center">Total Cases</div>
        <div class="box-data text-center">{{formatNumber(cases)}}</div>
        <div class="box-title-sm text-center">Updated: {{last_updated}}</div>
      </div>
      <div class="box-2">
        <div class="box-title text-bold text-center">Total Recoveries</div>
        <div class="box-data text-center">{{formatNumber(recoveries)}}</div>
        <div class="box-title-sm text-center">Updated: {{last_updated}}</div>
      </div>
      <div class="box-3">
        <div class="box-title text-bold text-center">Total Deaths</div>
        <div class="box-data text-center">{{formatNumber(deaths)}}</div>
        <div class="box-title-sm text-center">Updated: {{last_updated}}</div>
      </div>
      <div class="box-4">
        <div class="box-title text-bold text-center">Worst Hit</div>
        <div class="box-data text-center">{{max_hit}}</div>
        <div class="box-title-sm text-center">Death Count: {{formatNumber(max_hit_count)}}</div>
      </div>
    </div>
    <div class="q-md-md text-bold text-grey">Source: JHU CSSE</div>
    <div class="q-my-md text-bold text-black text-h6">Worldwide Cases</div>
    <q-table
      :data="data"
      :columns="columns"
      :filter="filter"
      :filter-method="filterMethod"
      row-key="id"
      flat
    >
      <template v-slot:top-right="props">
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>
    </q-table>
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
      max_hit: 'China',
      max_hit_count: 6000,
      last_updated: '12th Mar 2020, 07:00 AM',
      filter: '',
      data: [],
      columns: [
        { name: 'country', required: true, label: 'Country', field: 'country', align: 'left', sortable: true },
        { name: 'confirmed', align: 'center', label: 'Cases', field: row => row.latest.confirmed, sortable: true },
        { name: 'deaths', align: 'center', label: 'Deaths', field: row => row.latest.deaths, sortable: true },
        // { name: 'recovered', align: 'center', label: 'Recoveries', field: row => row.latest.recovered, sortable: true },
        { name: 'city', align: 'left', label: 'City', field: 'city', sortable: true },
        { name: 'province', align: 'left', label: 'Province', field: 'province', sortable: true },
        { name: 'last_updated', label: 'Last Updated', field: 'last_updated', format: val => { return (new Date(val)).toString() }, sortable: true }
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
        this.last_updated = (new Date()).toDateString()

        this.data = resp[1].data.locations
        const maxDeathCountry = this.data.sort((elm1, elm2) => {
          return elm2.latest.deaths - elm1.latest.deaths
        })[0]
        this.max_hit = maxDeathCountry.country
        this.max_hit_count = maxDeathCountry.latest.deaths
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
    },
    filterMethod (rows, terms, cols) {
      return rows.filter((row) => {
        return (row.country.toLowerCase().indexOf(terms) > -1)
      })
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
