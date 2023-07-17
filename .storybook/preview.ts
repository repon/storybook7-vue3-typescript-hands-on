import { Decorator } from "@storybook/vue3"

/**
 * Storybook全体でのparametersのデフォルト値を定義する
 */
export const parameters = {
  // Viewport addon で使用される設定
  viewport: {
    // プリセットをアプリケーションの使用に合わせて定義
    viewports: {
      pc: {
        name: "Min PC Layout",
        styles: {
          width: "992px",
          height: "100%",
        }
      },
      mobile: {
        name: "Min Mobile Layout",
        styles: {
          width: "375px",
          height: "100%",
        }
      }
    },
    // すべてのストーリーでデフォルト PC ビューを使用する
    defaultViewport: "pc",
  },
}

export const decorators: Decorator[] = [
  () => ({
    template: '<div style="margin: 5em; border: 1px solid; border-color: white"><story /></div>'
  })
]

export const globalTypes = {}