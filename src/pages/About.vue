<template>
  <q-page>
    <div class="text-bold q-pa-md text-grey">
      Made this app to give back what we can to the society.
      This is mainly to help hypochondriacs, who are worried if their symptoms are related to the COVID-19 virus infection.
      Please note that, this app in no way guarentees any accuracy in the results, Consult your doctor at the earliest if symptoms persist.
      Thanks to <a href="https://github.com/ExpDev07/coronavirus-tracker-api" class="text-grey">https://github.com/ExpDev07/coronavirus-tracker-api</a> for providing the dashboard APIs
    </div>
    <q-list class="rounded-borders">
      <q-item-label header>Made with ♡ :</q-item-label>
      <q-item clickable v-ripple class="q-mb-lg">
        <q-item-section avatar>
          <q-avatar class="avatar" @click="open('https://www.linkedin.com/in/jonafrank13')">
            <img src="../statics/jona.jpg" style="filter: grayscale(100%)">
          </q-avatar>
        </q-item-section>
        <q-item-section class="section">
          <q-item-label lines="1">Ideated and Developed by :</q-item-label>
          <q-item-label class="text-weight-bold" style="font-size: 20px">Jona Frank S</q-item-label>
          <q-item-label caption><a href="mailto:jona.mailbox@gmail.com"><span class="link-icon email"></span></a></q-item-label>
          <q-item-label caption><a href="https://www.linkedin.com/in/jonafrank13" v-ripple><span class="link-icon linkedin"></span></a></q-item-label>
          <q-item-label caption><a href="https://github.com/jonafrank13" v-ripple><span class="link-icon github"></span></a></q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple class="q-mb-lg">
        <q-item-section avatar>
          <q-avatar class="avatar" @click="open('https://www.linkedin.com/in/balaji-sundaram-41b981109')">
            <img src="../statics/balaji.png">
          </q-avatar>
        </q-item-section>
        <q-item-section class="section">
          <q-item-label lines="1">Designed by :</q-item-label>
          <q-item-label class="text-weight-bold" style="font-size: 20px">Balaji Sundaram</q-item-label>
          <q-item-label caption><a href="mailto:Balaji.sundar619@gmail.com"><span class="link-icon email"></span></a></q-item-label>
          <q-item-label caption><a href="https://www.linkedin.com/in/balaji-sundaram-41b981109" v-ripple><span class="link-icon linkedin"></span></a></q-item-label>
          <q-item-label caption><a href="https://www.behance.net/balaji619" v-ripple><span class="link-icon behance"></span></a></q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple class="q-mb-lg">
        <q-item-section avatar>
          <q-avatar class="avatar" @click="open('https://www.linkedin.com/in/srikanth-karamala-735736196')">
            <img src="../statics/srikanth.png">
          </q-avatar>
        </q-item-section>
        <q-item-section class="section">
          <q-item-label lines="1">Designed by :</q-item-label>
          <q-item-label class="text-weight-bold" style="font-size: 20px">Srikanth Karmala</q-item-label>
          <q-item-label caption><a href="mailto:srikanthkaramala96@gmail.com"><span class="link-icon email"></span></a></q-item-label>
          <q-item-label caption><a href="https://www.linkedin.com/in/srikanth-karamala-735736196" v-ripple><span class="link-icon linkedin"></span></a></q-item-label>
          <q-item-label caption><a href="https://www.behance.net/srikanthkaramala" v-ripple><span class="link-icon behance"></span></a></q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'About',
  methods: {
    open (link) {
      openURL(link)
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar {
  height: 100px;
  width: 100px;
}
.link-icon {
  height: 25px;
  width: 25px;
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 5px 15px 5px 0;
}
.email {
  background-image: url('../statics/mail.svg');
}
.linkedin {
  background-image: url('../statics/linkedin.svg');
}
.github {
  background-image: url('../statics/github.svg');
}
.behance {
  background-image: url('../statics/behance.svg');
}
.section a {
  color: #666666;
  text-decoration: none;
}
</style>
