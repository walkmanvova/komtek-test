<template>
  <div>
    <UserForm :editableUser="currentUser" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm'
export default {
  components: {
    UserForm
  },
  props: ['users'],
  computed: {
    currentUser() {
      return this.users.find(item => item.id === +this.$route.params.id)
    }
  }
}
</script>
