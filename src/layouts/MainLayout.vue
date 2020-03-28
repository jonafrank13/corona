<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="text-center text-bold">
          {{$route.name}}
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="replay"
          aria-label="replay"
          @click="refresh()"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <div class="menu-img"></div>
          <div class="text-bold text-center text-black q-mt-md">Cororna Risk Calculator</div>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <transition
        name="transitions"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutRight"
        mode="out-in"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Dashboard',
          caption: 'Application Dashboard',
          icon: 'dashboard',
          link: '/',
          color: '#0b9299'
        },
        {
          title: 'Quick Checkup',
          caption: 'Quickly check your symptoms',
          icon: 'gamepad',
          link: '/checkup',
          color: '#30b258'
        },
        {
          title: 'Quick Reference',
          caption: 'A collection of do\'s dont\'s myths and facts',
          icon: 'rss_feed',
          link: '/reference',
          color: '#ffb05d'
        },
        {
          title: 'About',
          caption: 'About us information',
          icon: 'info',
          link: '/about',
          color: '#d42b73'
        }
      ]
    }
  },
  methods: {
    refresh () {
      window.location.reload()
    }
  }
}
</script>
<style scoped>
.menu-img {
  height: 100px;
  width: 100px;
  margin: auto;
  background: url('../statics/app-logo-128x128.svg') no-repeat;
  margin-top: 50px;
}
.menu-txt {
  color: black;
  text-align: center;
}

</style>
