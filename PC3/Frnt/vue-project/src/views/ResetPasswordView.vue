<template>
    <div class="resetPassword">
      <ResetPassword />
    </div>
  </template>

  <script>
  // @ is an alias to /src
  import ResetPassword from "@/components/reset-password.vue";

  export default {
    name: "ResetPasswordView",
    components: {

        ResetPassword
  },
  };
  </script>