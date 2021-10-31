<template>
  <ConsultationForm @consultation-add="consultationAdd" :newConsultationId="newConsultationId" />
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
  },
  computed: {
    newConsultationId() {
      return Math.max(...this.consultations.map(i => i.id)) + 1
    }
  }
}
</script>
