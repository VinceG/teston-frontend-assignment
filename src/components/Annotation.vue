<template>
    <div class="tile is-parent is-vertical" @click="goTo">
        <article class="tile is-child notification"
                :class="{'is-primary': !current, 'is-danger': current}">
            <p class="title">{{ row.time }}</p>
            <p class="subtitle">{{ row.message }}</p>
        </article>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('video', ['time']),
    current() {
      return this.time === this.row.time;
    },
  },
  methods: {
    goTo() {
      this.$emit('goto', this.row.time);
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
    cursor: pointer;
}
</style>
