<template>
    <div v-if="rows.length">
        <annotation v-for="(row, index) in rows" :row="row" :key="index" @goto="onGoTo" />
    </div>
    <div v-else>
        <i>No Annotations.</i>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Annotation from './Annotation';

export default {
  components: {
    Annotation,
  },
  computed: {
    ...mapGetters('annotations', ['rows']),
  },
  methods: {
    onGoTo(time) {
      this.$emit('goto', time);
    },
  },
};
</script>
