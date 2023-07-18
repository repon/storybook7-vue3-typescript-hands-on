import { createI18n } from "vue-i18n";

const i18n = createI18n({
  // デフォルトで日本語を使用する
  locale: 'ja',
  fallbackLocale: 'ja',
  messages: {
    // 日本語の定義
    ja: {
      // MyHeaderコンポーネント内の文言
      header: {
        title: 'Storybook 7 + Vue 3 + TypeScript サンプル',
        login: 'ログイン',
        logout: 'ログアウト',
        signup: '新規登録',
      },
      // MyPage コンポーネント内の文言
      page: {
        content: "コンテンツがここに表示されます。"
      }
    },
    // 英語の定義
    en: {
      header: {
        title: 'Storybook 7 + Vue 3 + TypeScript Sample',
        login: 'Login',
        logout: 'Logout',
        signup: 'Sign Up',
      },
      page: {
        content: "Contents will be displayed here \n",
      }
    }
  }
})

export default i18n;