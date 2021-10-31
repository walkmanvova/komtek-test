<template>
  <div>
    <el-descriptions title="Данные пациента">
      <el-descriptions-item label="ФИО">{{currentUser.lastName}} {{currentUser.firstName}} {{currentUser.middleName}}</el-descriptions-item>
      <el-descriptions-item label="Дата рождения">{{currentUser.dateBirth}}</el-descriptions-item>
      <el-descriptions-item label="Пол">{{currentUser.gender}}</el-descriptions-item>
      <el-descriptions-item label="СНИЛС">{{currentUser.snils}}</el-descriptions-item>
    </el-descriptions>
    <el-row :gutter="20">
      <el-col :span="12">Консультации:</el-col>
      <el-col :span="12" style="text-align: right;">
        <el-button
          size="mini"
          type="success"
          @click="$router.push({ name: 'ConsultationAdd', params: { id: currentUser.id } })">Добавить консультацию</el-button>
      </el-col>
    </el-row>
    <el-table
        :data="currentUserConsultations"
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
  methods: {
    deleteConsultation(id) {
      this.$emit('delete-consultation', id);
    }
  },
  computed: {
    currentUser() {
      return this.users.find(item => item.id === +this.$route.params.id)
    },
    currentUserConsultations() {
      return this.consultations.filter(consultation => consultation.userId === this.currentUser.id)
    }
  }
}
</script>
