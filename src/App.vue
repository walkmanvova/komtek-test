<template>
  <div id="app">
    <nav class="nav">
      <router-link :to="{name: 'List'}">Список пациентов</router-link> |
      <router-link :to="{name: 'Create'}">Создать пациента</router-link>
    </nav>
    <hr/>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="16" :xl="12">
        <router-view
          :users="users"
          :consultations="consultations"
          class="content"
          @delete-user="deleteUser"
          @createUser="createUser"
          @delete-consultation="deleteConsultation"
          @consultationAdd="consultationAdd"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [{
        id: 0,
        firstName: 'Пётр',
        lastName: 'Петров',
        middleName: 'Петрович',
        dateBirth: '01-01-1990',
        gender: 'мужской',
        snils: '12345678901'
      }, {
        id: 3,
        firstName: 'Пётр',
        lastName: 'Иванов',
        middleName: 'Петрович',
        dateBirth: '02-04-1934',
        gender: 'мужской',
        snils: '12345678902'
      }, {
        id: 17,
        firstName: 'Светлана',
        lastName: 'Иванова',
        middleName: 'Петровна',
        dateBirth: '03-06-1993',
        gender: 'женский',
        snils: '12345678903'
      }, {
        id: 105,
        firstName: 'Иван',
        lastName: 'Иванов',
        middleName: 'Иванович',
        dateBirth: '04-08-1980',
        gender: 'мужской',
        snils: '12345678904'
      }],
      consultations: [{
        id: 2,
        userId: 0,
        date: '01-01-2021',
        time: '12:30',
        symptoms: 'Болит живот'
      }, {
        id: 20,
        userId: 0,
        date: '02-01-2021',
        time: '14:00',
        symptoms: 'Болит голова'
      }, {

        id: 200,
        userId: 17,
        date: '03-01-2021',
        time: '18:00',
        symptoms: 'Температура'
      }, {
        id: 2000,
        userId: 105,
        date: '04-01-2021',
        time: '10:00',
        symptoms: 'Кашель'
      }, {
        id: 2001,
        userId: 105,
        date: '04-01-2021',
        time: '10:30',
        symptoms: 'Першение'
      }, {
        id: 2002,
        userId: 105,
        date: '04-01-2021',
        time: '11:00',
        symptoms: 'Боль в горле'
      }]
    }
  },
  methods: {
    deleteUser(id) {
      this.users = this.users.filter(user => user.id !== id)
    },
    createUser(user) {
      this.users.push(user)
    },
    deleteConsultation(id) {
      this.consultations = this.consultations.filter(consultation => {
        return consultation.id !== id})
    },
    consultationAdd(consultation) {
      this.consultations.push(consultation)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {
  padding: 20px 0;
  text-align: center;
}
.content {
  padding: 20px 0 0;
}
</style>
