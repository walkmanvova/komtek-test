<template>
  <UserForm @create-user="createUser" :users="users" />
</template>

<script>
import UserForm from '@/components/UserForm'
export default {
  components: {
    UserForm
  },
  props: ['users'],
  methods: {
    createUser(user) {
      this.$emit('createUser', user)
    }
  }
}
</script>
