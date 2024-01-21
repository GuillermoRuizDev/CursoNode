<template>
    <div class="page-holder align-items-center py-4 bg-gray-100 vh-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 px-lg-12" >
            <div class="card">  
              <div class="card-header px-lg-5">
                <div class="card-heading text-primary">RESET PASSWORD</div>
              </div>
              <div class="card-body p-lg-5">
                
                <form id="loginForm" action="index.html">
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                    <label for="floatingInput">Email</label>
                  </div>
                  <button class="btn btn-primary" @click="user_register()" type="button">Reset Password</button>
                </form>
              </div>
              <div class="card-footer px-lg-5 py-lg-4">
                <div class="text-sm text-muted">
                  No recuerdas tu contraseña? <a href="/resetPassword">Recuperar contraseña</a>.
                </div>
              </div>
            </div>
          </div>         
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  //importing bootstrap 5 Modules
  import "bootstrap/dist/css/bootstrap.min.css";
  
  export default {
    name: "reset-password",
    methods: {
      //user login button click event
    //   user_login() {
    //     (this.userlogin = true), (this.userregister = false);
    //   },
    //   //user register button click event
    //   user_register() {
    //     (this.userlogin = false), (this.userregister = true);
    //   },
    }//,
    // data: function () {
    //   return {
    //     userlogin: true,
    //     userregister: false,
    //   };
    // },
  };
  </script>
  
