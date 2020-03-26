<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    exact
    active-class="highlight"
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
<style lang="scss" scoped>
.highlight {
  background: #4e4e4e;
  pointer-events: none;
  .q-item__label {
    color: white;
  }
}
</style>
