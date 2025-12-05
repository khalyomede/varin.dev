import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Varin",
  srcDir: "_docs",
  outDir: "docs",
  base: "/varin.dev",
  description: "Learn V lang and its ecosystem for free.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'What is Varin?',
        link: '/what-is-varin',
      },
      {
        text: 'Documentation',
        items: [
          { text: '1. What is V?', link: '/1-what-is-v' },
          { text: '2. Hello world', link: '/2-hello-world' },
          { text: '3. Run V', link: '/3-run-v' },
          { text: '4. Watch for changes', link: '/4-watch-for-changes' },
          { text: '5. Compile', link: '/5-compile' },
          { text: '6. Format conventions', link: '/6-format-conventions' },
          { text: '7. Comments', link: '/7-comments' },
          { text: '30. Reading big files', link: '/30-reading-big-files' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
