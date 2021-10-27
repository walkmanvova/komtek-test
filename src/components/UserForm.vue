<template>
  <el-form :model="ruleForm" :rules="rules" @submit.native.prevent ref="ruleForm" label-width="200px" class="demo-ruleForm">
    <el-form-item label="Фамилия" prop="lastName">
      <el-input v-model="ruleForm.lastName"></el-input>
    </el-form-item>
    <el-form-item label="Имя" prop="firstName">
      <el-input v-model="ruleForm.firstName"></el-input>
    </el-form-item>
    <el-form-item label="Отчество" prop="middleName">
      <el-input v-model="ruleForm.middleName"></el-input>
    </el-form-item>
    <el-form-item label="Дата рождения" required>
      <el-form-item prop="dateBirth">
        <el-date-picker type="date" placeholder="Выберите дату" format="dd-MM-yyyy" value-format="dd-MM-yyyy" :picker-options="{ firstDayOfWeek: 1 }" v-model="ruleForm.dateBirth"></el-date-picker>
      </el-form-item>
    </el-form-item>
    <el-form-item label="Пол" prop="gender">
      <el-radio-group v-model="ruleForm.gender">
        <el-radio label="мужской"></el-radio>
        <el-radio label="женский"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="СНИЛС" prop="snils">
      <el-input v-model="ruleForm.snils"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button v-if="$route.name === 'Edit'" type="primary" @click="submitForm('ruleForm')">Сохранить изменения</el-button>
      <el-button v-else type="primary" @click="submitForm('ruleForm')">Создать</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: ['users', 'user'],
  data() {
    let checkSnils = (rule, value, callback) => {
      if (!value) {
        callback(new Error('Это поле обязательно для заполнения'));
      } else if (value.length !== 11 || /[^0-9]/.test(value)) {
        callback(new Error('СНИЛС должен состоять из 11 цифр'));
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        firstName: '',
        lastName: '',
        middleName: '',
        dateBirth: '',
        gender: '',
        snils: ''
      },
      rules: {
        firstName: [
          { required: true, message: 'Это поле обязательно для заполнения', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'Это поле обязательно для заполнения', trigger: 'blur' }
        ],
        dateBirth: [
          { type: 'string', required: true, message: 'Это поле обязательно для заполнения', trigger: 'change' }
        ],
        gender: [
          { required: true, message: 'Пожалуйста укажите пол', trigger: 'change' }
        ],
        snils: [
          { validator: checkSnils, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.$route.name === 'Edit') {
            this.$router.push({name: 'List'})
          } else {
            this.ruleForm.id = Math.max(...this.users.map(i => i.id)) + 1;
            this.$emit('create-user', this.ruleForm);
            this.$router.push({name: 'List'})
          }
        } else {
          return false;
        }
      });
    }
  },
  created() {
    if (this.$route.name === 'Edit') {
      this.ruleForm = this.user;
    }
  }
}
</script>
