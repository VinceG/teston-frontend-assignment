<template>
    <div class="timeline">
        <button type="button" class="button is-primary" @click="annotate">
            {{ formattedTime }} / {{ formattedDuration }}
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import moment from 'moment';

const momentDurationFormatSetup = require('moment-duration-format');

momentDurationFormatSetup(moment);

export default {
  computed: {
    ...mapGetters('video', ['playing', 'duration', 'time']),
    formattedTime() {
      return this.time > 0 ? moment.duration(this.time, 'seconds').format('hh:mm:ss') : '00:00';
    },
    formattedDuration() {
      return moment.duration(this.duration, 'seconds').format('hh:mm:ss');
    },
  },
  methods: {
    ...mapActions('annotations', ['addAnnotation']),
    ...mapMutations('video', ['setPlaying']),
    annotate() {
      if (!this.time) {
        return false;
      }

      // Stop
      this.setPlaying(false);

      this.$dialog.prompt({
        title: 'Annotate',
        message: 'Enter Annotiation',
        confirmText: 'Add',
        onConfirm: (value) => {
          this.addAnnotation({ message: value, time: this.time });
          this.setPlaying(true);
        },
        onCancel: () => {
          this.setPlaying(true);
        },
      });

      return true;
    },
  },
};
</script>

<style lang="scss">

</style>
