<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    @click="$router.push(link)"
    class="q-my-md"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" :style="{'color':color}" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },

    color: {
      type: String,
      default: '#000000'
    }
  }
}
</script>
