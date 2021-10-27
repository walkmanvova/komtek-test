<template>
  <ConsultationForm :consultation="consultation" />
</template>

<script>
import ConsultationForm from '@/components/ConsultationForm'
export default {
  components: {
    ConsultationForm
  },
  props: ['consultations'],
  data() {
    return {
      consultation: null
    }
  },
  created() {
    const consultation = this.consultations.find(consultation => consultation.id === +this.$route.params.id)
    if(consultation){
      this.consultation = consultation
    }
  },
}
</script>
