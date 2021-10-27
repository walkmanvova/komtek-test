<template>
  <el-form :model="consultationForm" :rules="rules" @submit.native.prevent ref="consultationForm" label-width="200px">
    <el-form-item label="Дата консультации" required>
      <el-form-item prop="date">
        <el-date-picker type="date" placeholder="Выберите дату" format="dd-MM-yyyy" value-format="dd-MM-yyyy" :picker-options="{ firstDayOfWeek: 1 }" v-model="consultationForm.date"></el-date-picker>
      </el-form-item>
    </el-form-item>
    <el-form-item label="Время консультаци" required>
      <el-form-item prop="time">
        <el-time-select placeholder="Выберите время" v-model="consultationForm.time" :picker-options="{start: '10:00', step: '00:30', end: '21:00'}"></el-time-select>
      </el-form-item>
    </el-form-item>
    <el-form-item label="Симптомы" prop="symptoms">
      <el-input v-model="consultationForm.symptoms"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button v-if="$route.name === 'ConsultationEdit'" type="primary" @click="submitForm('consultationForm')">Сохранить изменения</el-button>
      <el-button v-else type="primary" @click="submitForm('consultationForm')">Создать</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: ['consultations', 'consultation'],
  data() {
    return {
      consultationForm: {
        date: '',
        time: '',
        symptoms: '',
      },
      rules: {
        date: [
          { type: 'string', required: true, message: 'Это поле обязательно для заполнения', trigger: 'change' }
        ],
        time: [
          { type: 'string', required: true, message: 'Это поле обязательно для заполнения', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.$route.name === 'ConsultationEdit') {
            this.$router.push({name: 'User', params: { id: this.consultation.userId }})
          } else {
            this.consultationForm.id = Math.max(...this.consultations.map(i => i.id)) + 1;
            this.consultationForm.userId = this.$route.params.id;
            this.$emit('consultation-add', this.consultationForm);
            this.$router.push({name: 'User', params: { id: this.$route.params.id }})
          }
        } else {
          return false;
        }
      });
    }
  },
  created() {
    if (this.$route.name === 'ConsultationEdit') {
      this.consultationForm = this.consultation;
    }
  }
}
</script>
