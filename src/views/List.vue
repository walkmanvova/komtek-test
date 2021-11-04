<template>
  <el-table
      :data="filteredUsers"
      style="width: 100%">
    <el-table-column
        label="ФИО"
        prop="lastName"
        :formatter="formatter">
    </el-table-column>
    <el-table-column
        width="110"
        label="СНИЛС"
        prop="snils">
    </el-table-column>
    <el-table-column
        align="right">
      <template slot="header" slot-scope="scope">
        <el-input
            v-model="search"
            size="mini"
            placeholder="Поиск по имени или СНИЛС"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="$router.push({ name: 'User', params: { id: scope.row.id } })">Просмотр</el-button>
        <el-button
          size="mini"
          @click="$router.push({ name: 'Edit', params: { id: scope.row.id } })">Редактировать</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="$emit('delete-user', scope.row.id)">Удалить</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ['users'],
  data() {
    return {
      search: ''
    }
  },
  methods: {
    formatter(row, col, value, index) {
      return `${row.lastName} ${row.firstName} ${row.middleName}`
    }
  },
  computed: {
    filteredUsers() { // Получаем массив пациентов отфильтрованный в соответствии с поисковым запросом
      return this.users.filter(data => !this.search || (`${data.snils} ${data.firstName} ${data.lastName} ${data.middleName}`).toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>
