<template>
  <ConsultationForm :editableConsultation="currentConsultation" />
</template>

<script>
import ConsultationForm from '@/components/ConsultationForm'
export default {
  components: {
    ConsultationForm
  },
  props: ['consultations'],
  computed: {
    currentConsultation() {
      return this.consultations.find(consultation => consultation.id === +this.$route.params.id);
    }
  }
}
</script>
