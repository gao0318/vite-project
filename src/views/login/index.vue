<template>
  <div class="login-wrapper">
    <div class="login-body">
      <div class="login-poster-slide">
        <h3>欢迎使用XX系统</h3>
        <h4>覆盖销售、营销、服务的客户全生命周期移动化、数字化管理</h4>
      </div>
      <div class="login-form">
        <div class="logo-box">欢迎登录</div>
        <a-form :wrapper-col="wrapperCol">
          <a-form-item v-bind="validateInfos.userName">
            <a-input v-model:value="loginForm.userName" />
          </a-form-item>
          <a-form-item v-bind="validateInfos.password">
            <a-input v-model:value="loginForm.password" />
          </a-form-item>
          <a-form-item >
            <div class="flex-center">
              <a-checkbox v-model:checked="loginForm.checked">
                下次自动登录</a-checkbox
              >
              <a href="">忘记密码</a>
            </div>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 24 }">
            <a-button
              type="primary"
              shape="round"
              :size="large"
              @click="onSubmit"
              block
            >
              登录
            </a-button>
          </a-form-item>
          <div class="flex-center">
           <a href=""></a>
            <a href="">注册</a>
          </div>
        </a-form>
      </div>
    </div>
    <!-- -->
  </div>
</template>
<script>
import { reactive, toRaw } from "vue";
import { useForm } from "@ant-design-vue/use";
export default {
  setup() {
    const loginForm = reactive({
      userName: "",
      password:"",
      checked:false
    });
    const { validate, validateInfos } = useForm(
      loginForm,
      reactive({
        userName: [
          {
            required: true,
            message: "账号不能为空",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
          },
        ],
        
      })
    );
    const onSubmit = (e) => {
      e.preventDefault();
      validate()
        .then((res) => {
          console.log(res, toRaw(loginForm));
        })
        .catch((err) => {
          console.log("error", err);
        });
    };
    return {
      wrapperCol: { span: 24 },
      validateInfos,
      loginForm,
      onSubmit,
    };
  },
};
</script>
<style lang="less" scoped>
/deep/ .ant-form-item {
  margin-bottom: 15px;
}
.flex-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-wrapper {
  display: flex;
  width: 100vw;
  height: 100vh;
  // background: url(../../assets/images/login-bg.jpg) no-repeat center center;
  background: url(https://docs.idqqimg.com/tim/docs/components/img/page/Login/images//bg_gradient3x-fdc6f4.png)
    no-repeat center center;
  background-color: #fff;
  background-size: cover;
  .login-body {
    position: relative;
    display: flex;
    width: 77.76041667vw;
    min-height: 490px;
    max-width: 1493px;
    min-width: 936px;
    padding-bottom: 80px;
    margin: 80px auto 0;
    .login-poster-slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      h3 {
        font-size: 42px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.74;
        letter-spacing: 9.33px;
        text-align: center;
        color: #1a1a1a;
        margin-bottom: 20px;
      }
      h4 {
        font-size: 18px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 3px;
        text-align: center;
      }
    }
    .login-form {
      display: inline-block;
      width: 400px;
      margin: auto;
      box-shadow: 0px 0px 13px 0px rgba(223, 223, 223, 0.6);
      border: solid 1px rgba(0, 0, 0, 0.12);
      background-color: #fff;
      border-radius: 12px;
      padding: 50px;
      .logo-box {
           position: relative;
    width: 100%;
    font-weight: 700;
    font-size: 20px;
    color: #4c4c4c;
    letter-spacing: 2px;
    margin: 15px 0 20px;
    &:before{
          position: absolute;
    top: 50%;
    left: -14px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    content: "";
    width: 4px;
    height: 16px;
    background-color: #3e6bea;
    border-radius: 2px;
    display: block;
    }
      }
      
    }
  }
}
</style>