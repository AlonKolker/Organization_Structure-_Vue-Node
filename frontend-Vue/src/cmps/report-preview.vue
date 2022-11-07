<template>
  <section v-if="report" class="report-preview-conteiner">
    <div class="report-text">
      <span class="report-text-header"> Report {{ idx }}: </span>{{ shortBody }}
    </div>
    <div class="report-date"><span class="report-text-header">Date: </span> {{ report.date }}</div>
  </section>
</template>

<script>
export default {
  name: "report-preview",
  props: {
    report: {
      type: Object,
    },
    idx: {
      type: Number,
    },
  },
  data() {
    return {}
  },
  created() {
    console.log(this.idx)
  },
  methods: {},
  computed: {
    shortBody() {
      if (this.report.text.length < 50) return "      " + this.report.text
      return "      " + this.report.text.substr(0, 50) + "..."
    },
  },
  emits: [""],
  components: {},
}
</script>
