<template>
  <ConsultationForm @consultation-add="consultationAdd" :consultations="consultations" />
</template>

<script>
import ConsultationForm from '@/components/ConsultationForm'
export default {
  components: {
    ConsultationForm
  },
  props: ['consultations'],
  methods: {
    consultationAdd(consultation) {
      this.$emit('consultationAdd', consultation)
    }
  }
}
</script>
