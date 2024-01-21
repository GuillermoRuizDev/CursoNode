<template>
    <div class="page-holder align-items-center py-4 bg-gray-100 vh-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 px-lg-12" v-if="userlogin">
            <div class="card">  
              <div class="card-header px-lg-5">
                <div class="card-heading text-primary">LOGIN</div>
              </div>
              <div class="card-body p-lg-5">
                
                <form id="loginForm" @submit.prevent="login">
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
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="floatingPassword"
                      type="password"
                      placeholder="Password"
                      required
                    />
                    <label for="floatingPassword">Contraseña:</label>
                  </div>
                  <button class="btn btn-primary" type="submit">Ingresar</button>   
                  <button class="btn btn-success" @click="user_register()" type="button">Registrarse</button>
                </form>
              </div>
              <div class="card-footer px-lg-5 py-lg-4">
                <div class="text-sm text-muted">
                  No recuerdas tu contraseña? <a href="/ResetPassword">Recuperar contraseña</a>.
                </div>
              </div>
            </div>
          </div>
          <!-- register -->
          <div class="col-lg-12 px-lg-12" v-if="userregister">
            <div class="card">
              <div class="card-header px-lg-5">
                <div class="card-heading text-primary">Registrate</div>
              </div>
              <div class="card-body p-lg-5">                
                <form action="index.html">     
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="name"
                      type="text"
                      placeholder="Nombre"
                      required
                    />
                    <label for="name">Nombre:</label>
                  </div>
  
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="floatingInput"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                    <label for="floatingInput">E-mail:</label>
                  </div>
  
                  
  
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="age"
                      type="number"
                      placeholder="Type d'établissement"
                      required
                    />
                    <label for="Age">Edad</label>
                  </div>
  
                  

                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="password"
                      type="password"
                      placeholder="Password"
                      required
                    />
  
                    <label for="password">Password</label>
                  </div>
  
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="floatingPassword"
                      type="password"
                      placeholder="Reescribir Password"
                      required
                    />
  
                    <label for="floatingPassword">Reescribir Password</label>
                  </div>
                  <div class="form-check mb-3">
                   
                    <label class="form-check-label" for="agree"
                      >Ya tengo una cuenta creada. Ir a 
                      <a href="#">Login</a>.</label
                    >
                  </div>
                  <div class="form-group">
                    <button
                      class="btn btn-primary"
                      id="regidter"
                      type="button"
                      name="registerSubmit"
                    >
                      Registrarse
                    </button>
                  </div>
                </form>
              </div>
              <div class="card-footer px-lg-5 py-lg-4">
                <div class="text-sm text-muted">
                    Ya tengo una cuenta creada. Ir a  <a @click="user_login()">Login</a>.
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
  import auth from '../auth'

export default {
  data () {
    return {
      email: 'joe@example.com',
      pass: '',
      error: false,
      userlogin: true,
      userregister: false,
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
    },
    user_login() {
        (this.userlogin = true), (this.userregister = false);
      },
      //user register button click event
    user_register() {
        (this.userlogin = false), (this.userregister = true);
      },
  }
}
</script>

  
  
  
