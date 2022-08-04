<template>
  <div class="navbar">
    <!-- 左边logo -->
    <img src="http://likede2-admin.itheima.net/img/logo.3673fab5.png" alt="" />
    <!-- 右边结构 -->
    <div class="right-menu">
      <el-col :span="5" class="avater">
        <div class="image">
          <img
            v-imgError="defaultImg"
            :src="$store.state.user.userInfo.image + '11'"
          />
        </div>
      </el-col>
      <el-col :span="14" class="user">
        <span>欢迎你, {{ $store.state.user.userInfo.loginName }}</span>
      </el-col>
      <el-col :span="5" class="logout">
        <el-tooltip
          class="item"
          effect="dark"
          content="退出登录"
          placement="top-start"
        >
          <el-button @click="logout">退出</el-button>
        </el-tooltip>
      </el-col>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import defaultImg from '../../assets/404_images/touxiang.jpg'

export default {
  data() {
    return {
      defaultImg
    }
  },
  components: {},
  computed: {
    ...mapGetters(['sidebar', 'avatar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  // position: fixed;

  background: #fff;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 99;
  width: 100%;
  > img {
    width: 88px;
    height: 36px;
    position: relative;
    left: 14px;
    top: 11px;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    width: 240px;
    height: 100%;
    position: relative;
    left: 1000px;
    color: #fff;
    // line-height: 60px;
    .avater {
      position: relative;
      top: -24px;
    }
    .image {
      width: 45px;
      height: 45px;
      padding-right: 5px;

      img {
        width: 100%;
        border-radius: 15px;
      }
    }

    .user {
      position: relative;
      top: -16px;
    }
    .logout {
      .item {
        color: #fff;
        font-size: 14px;
        background: unset;
        border: none;
        position: relative;
        top: -26px;
        left: -23px;
      }
    }
  }
  // .right-menu {
  //   display: flex;

  //   &:focus {
  //     outline: none;
  //   }

  //   .right-menu-item {
  //     display: inline-block;
  //     padding: 0 8px;
  //     height: 100%;
  //     font-size: 18px;
  //     color: #5a5e66;
  //     vertical-align: text-bottom;

  //     &.hover-effect {
  //       cursor: pointer;
  //       transition: background 0.3s;

  //       &:hover {
  //         background: rgba(0, 0, 0, 0.025);
  //       }
  //     }
  //   }

  //   .avatar-container {
  //     margin-right: 30px;

  //     .avatar-wrapper {
  //       margin-top: 5px;
  //       position: relative;

  //       .user-avatar {
  //         cursor: pointer;
  //         width: 40px;
  //         height: 40px;
  //         border-radius: 10px;
  //       }

  //       .el-icon-caret-bottom {
  //         cursor: pointer;
  //         position: absolute;
  //         right: -20px;
  //         top: 25px;
  //         font-size: 12px;
  //       }
  //     }
  //   }
  // }
}
</style>
