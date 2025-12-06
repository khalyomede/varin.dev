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
          { text: '8. Variables', link: '/8-variables' },
          { text: '9. Type: string', link: '/9-type-string' },
          { text: '10. Type: boolean', link: '/10-type-boolean' },
          { text: '11. Type: integer', link: '/11-type-integer' },
          { text: '12. Conditions', link: '/12-conditions' },
          { text: '13. Reading files', link: '/13-reading-files' },
          { text: '14. Reading big files', link: '/14-reading-big-files' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
