<template lang="html">
<div class="container">
    <div class="dashboard">
        <h1 class="is-size-1">Dashboard</h1>
        <div class="columns">
            <div class="column is-10">
                <video id="video" ref="video" src="https://sample-videos.com/video/mp4/720/big_buck_bunny_720p_20mb.mp4" />

                <div class="columns">
                    <div class="column is-10">
                        <video-controller
                            @play="play"
                            @pause="pause"
                            @skip="skip"
                            @fullscreen="fullscreen"
                        />
                    </div>
                    <div class="column is-2">
                        <div class="is-pulled-right">
                            <timeline :playing="playing" :time="time" :duration="duration" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-2">
                <annotations @goto="onGoTo" />
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import VideoController from './VideoController';
import Timeline from './Timeline';
import Annotations from './Annotations';

export default {
  name: 'dashboard',
  components: {
    VideoController,
    Annotations,
    Timeline,
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    ...mapGetters('video', ['playing', 'duration', 'time']),
    ...mapGetters('annotations', ['next']),
  },
  watch: {
    playing() {
      if (this.playing) {
        this.$refs.video.play();
        this.trackTime();
      } else {
        this.$refs.video.pause();
        this.stopTime();
      }
    },
  },
  mounted() {
    this.$refs.video.addEventListener('durationchange', () => {
      this.setDuration(Math.round(this.$refs.video.duration));
    });
  },
  methods: {
    ...mapMutations('video', ['setPlaying', 'setDuration', 'setTime']),
    play() {
      this.setPlaying(true);
    },
    pause() {
      this.setPlaying(false);
    },
    skip() {
      const next = this.next();
      if (next) {
        this.onGoTo(next.time);
      }
    },
    fullscreen() {
      // Hardcoded
      document.querySelector('#video').webkitEnterFullscreen();
    },
    trackTime() {
      this.timer = setInterval(() => {
        this.setTime(Math.round(this.$refs.video.currentTime));
      }, 1000);
    },
    stopTime() {
      clearInterval(this.timer);
    },
    onGoTo(time) {
      this.$refs.video.currentTime = time;
      this.setTime(time);
    },
  },
};
</script>
<style lang="scss">

</style>
