<template lang="html">
  <div class="video-controller">
    <button
      v-if="!playing"
      @click="play"
      class="button is-primary">
      Play
    </button>
    <button
      v-if="playing"
      @click="pause"
      class="button is-primary">
      Pause
    </button>
    <button
      @click="skip"
      class="button is-primary">
      Skip
    </button>
    <button
      @click="fullScreen"
      class="button is-primary">
      Full Screen
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'video-controller',
  computed: {
    ...mapGetters('video', ['playing']),
  },
  methods: {
    play() {
      this.$emit('play');
    },
    pause() {
      this.$emit('pause');
    },
    skip() {
      this.$emit('skip');
    },
    fullScreen() {
      this.$emit('fullscreen');
    },
  },
};
</script>

<style lang="scss">
.video-controller {

}
</style>
