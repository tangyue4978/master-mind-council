const app = new Vue({
  el: '.container',

  data() {
    return {

    }
  },

  mounted() {
    this.initTelInput()
  },

  methods: {
    // 初始化 input 输入框
    initTelInput() {
      $("#phone").intlTelInput({
        preferredCountries: [],
        placeholderNumberType: "MOBILE",
        utilsScript: "../assets/intlTelInput/js/utils.js"
      })
    },

    // 注册
    toRegister() {
      window.location.href = '../html/success.html'
    }
  }
})
