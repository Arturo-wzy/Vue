<template>
  <body>
  <div class="container">
    <div :class="[isfb?'form-box-left':'form-box-right']">
      <!--注册-->
      <div :class="[isrb?'rb':'rb-hidden']">
        <h1>register</h1>
        <div class="login-form">
          <form action="" method="post">
            <input type="text" placeholder="用户名" v-model="Rname">
            <input type="email" placeholder="邮箱" v-model="Remail">
            <input type="password" placeholder="密码" v-model="Rpwd">
            <input type="password" placeholder="确认密码" v-model="Rapwd">
            <button type="button" @click="submitRegist">注册</button>
          </form>
        </div>
      </div>
      <!--登录-->
      <div :class="[islb?'lb':'lb-hidden']">
        <h1>login</h1>
        <div class="login-form">
          <form action="" method="post">
            <input type="text" placeholder="用户名" name="ID" v-model="name"/>
            <input type="password" placeholder="密码" name="PWD" v-model="pwd"/>
            <button type="button" @click="submitLogin">登录</button>
          </form>

        </div>
      </div>
    </div>
    <div class="con-box left">
      <h2>欢迎来到<span>宠物之家</span></h2>
      <p>快来领取你的专属<span>宠物</span>吧</p>
      <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.rZScb4b36dXda7mImAOh8wHaHv?w=159&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="">
      <p>已有帐号</p>
      <button @click="login">去登录</button>
    </div>
    <div class="con-box right">
      <h2>欢迎来到<span>宠物之家</span></h2>
      <p>快来看看你的可爱<span>宠物</span>吧</p>
      <img
          src="https://tse1-mm.cn.bing.net/th/id/OIP-C.cGRvDIOrw_IdHuEsqz0s8gHaGI?w=236&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="">
      <p>没有帐号？</p>
      <button @click="register">去注册</button>
    </div>
  </div>
  </body>
</template>

<script>
import router from "@/router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      isfb: true,
      isrb: false,
      islb: true,
      Rname: '',
      Remail: '',
      Rpwd: '',
      Rapwd: '',
      name: '',
      pwd: ''
    }
  },
  methods: {
    register() {
      this.isfb = !this.isfb
      this.isrb = !this.isrb
      this.islb = !this.islb
    },
    login() {
      this.isfb = !this.isfb
      this.isrb = !this.isrb
      this.islb = !this.islb
    },
    submitRegist() {
      let ID = this.Rname
      let PWD = this.Rpwd
      let APWD = this.Rapwd
      let Email = this.Remail
      var pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
      var emailTest = new RegExp(pattern)
      if (!ID || !PWD || !APWD || !Email) {
        this.$message({
          type: 'error',
          message: '请填写完整所有信息',
          showClose: true
        })
      } else {
        if (PWD !== APWD) {
          this.$message({
            type: 'error',
            message: '密码填写不一致，请您再次确认！',
            showClose: true
          })
        }
        if (!emailTest.test(Email)) {
          alert('Email地址填写有误，请您仔细检查哦！')
        } else {
          this.$ajax.post('/regist', {ID, PWD, Email}).then((res) => {
            if (res.data !== '已注册') {
              alert('恭喜您已完成注册！')
              this.Rname = ''
              this.Remail = ''
              this.Rpwd = ''
              this.Rapwd = ''
              this.login()
            } else {
              this.$message({
                type: 'error',
                message: '该用户名已被注册，请您更换一个哦！',
                showClose: true
              })
            }
          })
        }
      }

    },
    async submitLogin() {
      let ID = this.name
      let PWD = this.pwd
      await this.$ajax.post('/post', {ID, PWD}).then((res) => {
        console.log(typeof res.data.pwd)
        console.log(typeof PWD)
        if (res.data.pwd === PWD) {
          this.$notify({
            type: 'success',
            message: '欢迎您 ' + res.data.name + ' !',
            duration: 3000
          })
          router.push('/Home')
        } else {
          this.$message({
            type: 'error',
            message: '用户名或密码错误',
            showClose: true
          })
        }
      })

    }
  }
}




</script>

<style scoped>
* {
  /*初始化*/
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(200deg, #f3e7e9, #e3eeff);
}

.container {
  background-color: #fff;
  width: 650px;
  height: 415px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.form-box-left {
  position: absolute;
  top: -10%;
  left: 5%;
  background-color: #d3b7d8;
  width: 320px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: 0.5s ease-in-out;
  transform:translateX(0%);
}

.form-box-right {
  position: absolute;
  top: -10%;
  left: 5%;
  background-color: #d3b7d8;
  width: 320px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: 0.5s ease-in-out;
  transform:translateX(82%);
}

.rb, .lb {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.rb-hidden, .lb-hidden {
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: 0.5s;
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  /*大写*/
  text-transform: uppercase;
  color: #fff;
  /*字间距*/
  letter-spacing: 5px;
}

input {
  background-color: transparent;
  width: 70%;
  color: #fff;
  border: none;
  /*下边框样式*/
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px 0;
  text-indent: 10px;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 2px;
}

input::placeholder {
  color: #fff;
}

input:focus {
  color: #a262ad;
  outline: none;
  border-bottom: 1px solid #a262ad80;
  transition: 0.5s;
}

input:focus::placeholder {
  opacity: 0;
}

.form-box-left button, .form-box-right button {
  width: 70%;
  margin-top: 35px;
  background-color: #f6f6f6;
  outline: none;
  border-radius: 8px;
  padding: 13px;
  color: #a262ad;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
}

.form-box-left button:hover, .form-box-right button:hover {
  background-color: #a262ad;
  color: #f6f6f6;
  transition: background-color 0.5s ease;
}

.con-box {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.con-box.left {
  left: -2%;
}

.con-box.right {
  right: -2%;
}

.con-box h2 {
  color: #8e9aaf;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 4px;
}

.con-box p {
  font-size: 12px;
  letter-spacing: 2px;
  color: #8e9aaf;
  text-align: center;
}

.con-box span {
  color: #d3b7d8;
}

.con-box img {
  width: 150px;
  height: 150px;
  opacity: 0.9;
  margin: 40px 0;
}

.con-box button {
  margin-top: 3%;
  background-color: #fff;
  color: #a262ad;
  border: 1px solid #d3b7d8;
  padding: 6px 10px;
  border-radius: 5px;
  letter-spacing: 1px;
  outline: none;
  cursor: pointer;
}

.con-box button:hover {
  background-color: #d3b7d8;
  color: #fff;

}

.login-form{
  margin-left: 70px;
}
</style>