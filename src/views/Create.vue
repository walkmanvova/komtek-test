<template>
  <UserForm @create-user="createUser" :newUserId="newUserId" />
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
  },
  computed: {
    newUserId() {
      return Math.max(...this.users.map(i => i.id)) + 1
    }
  }
}
</script>
