const app = new Vue({
  el: '.container',

  data() {
    return {
      langList: [
        {
          name: 'English',
          abbr: 'ENG'
        },
        {
          name: 'Simplified Chinese',
          abbr: 'CHS'
        },
        {
          name: 'Vietnamese',
          abbr: 'VN'
        },
        {
          name: 'Malay',
          abbr: 'MY'
        },
        {
          name: 'Thai',
          abbr: 'TH'
        }
      ], // 语言列表
      currentLang: 0, // 当前语言 index
      isShowLangDialog: false // 是否显示语音选择弹窗
    }
  },

  mounted() {

  },

  methods: {
    toShowLangDialog() {
      this.isShowLangDialog = true
    },

    toChooseLang(item, index) {
      this.currentLang = index
      this.isShowLangDialog = false
    },

    // 分享
    toShare() {
      console.log('share')
    },

    // 跳转 join 页面
    toJoinPage() {
      window.location.href = './html/join.html'
    }
  }
})
