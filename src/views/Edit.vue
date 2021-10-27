<template>
  <div>
    <UserForm :user="user" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm'
export default {
  components: {
    UserForm
  },
  props: ['users'],
  data() {
    return {
      user: null
    }
  },
  created() {
    const user = this.users.find(item => item.id === +this.$route.params.id)
    if(user){
      this.user = user
    }
  },
}
</script>
