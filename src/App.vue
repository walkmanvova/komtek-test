<template>
  <div id="app">
    <nav class="nav">
      <el-row>
        <router-link :to="{name: 'List'}"><el-button type="info" :plain="$route.name !== 'List'"><i class="el-icon-tickets"></i>&nbsp;Список пациентов</el-button></router-link>&nbsp;
        <router-link :to="{name: 'Create'}"><el-button type="info" :plain="$route.name !== 'Create'"><i class="el-icon-circle-plus-outline"></i>&nbsp;Создать пациента</el-button></router-link>
      </el-row>
    </nav>
    <hr/>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="16" :xl="12">
        <div v-loading="!(usersLoaded && consultationsLoaded)">
          <router-view v-if="usersLoaded && consultationsLoaded"
            class="content"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  methods: {
    ...mapActions(['requestUsers', 'requestConsultations'])
  },
  computed: {
    ...mapGetters(['usersLoaded', 'consultationsLoaded'])
  },
  async created() {
    this.requestUsers()
    this.requestConsultations()
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
