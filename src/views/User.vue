<template>
  <div>
    <el-descriptions title="Данные пациента">
      <el-descriptions-item label="ФИО">{{user.lastName}} {{user.firstName}} {{user.middleName}}</el-descriptions-item>
      <el-descriptions-item label="Дата рождения">{{user.dateBirth}}</el-descriptions-item>
      <el-descriptions-item label="Пол">{{user.gender}}</el-descriptions-item>
      <el-descriptions-item label="СНИЛС">{{user.snils}}</el-descriptions-item>
    </el-descriptions>
    <el-row :gutter="20">
      <el-col :span="12">Консультации:</el-col>
      <el-col :span="12" style="text-align: right;">
        <el-button
          size="mini"
          type="success"
          @click="$router.push({ name: 'ConsultationAdd', params: { id: user.id } })">Добавить консультацию</el-button>
      </el-col>
    </el-row>
    <el-table
        :data="consultationsUser"
        style="width: 100%">
      <el-table-column
          width="100px"
          prop="date"
          label="Дата">
      </el-table-column>
      <el-table-column
          width="70px"
          prop="time"
          label="Время">
      </el-table-column>
      <el-table-column
          prop="symptoms"
          label="Симптомы">
      </el-table-column>
      <el-table-column
          align="right">
        <template v-slot="scope">
          <el-button
              size="mini"
              @click="$router.push({ name: 'ConsultationEdit', params: { id: scope.row.id } })">Редактировать</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="deleteConsultation(scope.row.id)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['users', 'consultations'],
  data() {
    return {
      user: null,
      consultationsUser: null,
    }
  },
  created() {
    const user = this.users.find(item => item.id === +this.$route.params.id);
    const consultationsUser = null;

    if(user){
      this.user = user
      this.consultationsUser = this.consultations.filter(consultation => consultation.userId === this.user.id)
    }
  },
  methods: {
    deleteConsultation(id) {
      this.$emit('delete-consultation', id);
      // Удаляем консультацию в таблице consultationsUser
      this.consultationsUser = this.consultationsUser.filter(consultation => consultation.id !== id)
    }
  }
}
</script>
