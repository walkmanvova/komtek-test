<template>
  <div id="app">
    <nav class="nav">
      <router-link :to="{name: 'List'}">Список пациентов</router-link> |
      <router-link :to="{name: 'Create'}">Создать пациента</router-link>
    </nav>
    <hr/>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="16" :xl="12">
        <!-- Пока не разобрался как правильно обрабатывать дочерними компонентами еще не загруженные данные () -->
        <router-view v-if="users.length !== 0"
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
      users: [],
      consultations: []
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
      this.consultations = this.consultations.filter(consultation =>  consultation.id !== id)
    },
    consultationAdd(consultation) {
      this.consultations.push(consultation)
    },
    async getUsers() {
      try {
        const response = await fetch('https://my-json-server.typicode.com/walkmanvova/komtek-test/users');
        const result = await response.json();
        this.users.push(...result);
      } catch (error) {
        console.log('error:', error)
      }
    },
    async getConsultations() {
      try {
        const response = await fetch('https://my-json-server.typicode.com/walkmanvova/komtek-test/consultations');
        const result = await response.json();
        this.consultations.push(...result);
      } catch (error) {
        console.log('error:', error)
      }
    }
  },
  created() {
    this.getUsers();
    this.getConsultations();
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
