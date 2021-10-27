<template>
  <el-table
      :data="users.filter(data => !search || (`${data.snils} ${data.firstName} ${data.lastName} ${data.middleName}`).toLowerCase().includes(search.toLowerCase()))"
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
            placeholder="Type to search"/>
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
  props: ['users', 'consultations'],
  data() {
    return {
      search: '',
    }
  },
  methods: {
    formatter(row, col, value, index) {
      return `${row.lastName} ${row.firstName} ${row.middleName}`
    }
  },
}
</script>
