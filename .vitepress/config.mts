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
        text: 'About Varin',
        link: '/about-varin',
      },
      {
        text: 'Resources',
        items: [
          { text: 'Documentation', link: '/resources/documentation' },
          { text: 'Modules', link: '/resources/modules' },
          { text: 'Playground', link: '/resources/playground' },
        ],
      },
      {
        text: 'Getting started',
        items: [
          { text: 'What is V?', link: '/getting-started/what-is-v' },
          { text: 'Hello world', link: '/getting-started/hello-world' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Comments', link: '/getting-started/comments' },
          { text: 'Variables', link: '/getting-started/variables' },
        ],
      },
      {
        text: 'Commands',
        items: [
          { text: 'init', link: '/commands/init' },
          { text: 'run', link: '/commands/run' },
          { text: 'watch', link: '/commands/watch' },
          { text: 'test', link: '/commands/test' },
          { text: 'fmt', link: '/commands/fmt' },
          { text: 'self', link: '/commands/self' },
          { text: 'Compile', link: '/commands/compile' },
        ],
      },
      {
        text: 'Types',
        items: [
          { text: 'string', link: '/types/string' },
          { text: 'bool', link: '/types/bool' },
          { text: 'int', link: '/types/int' },
          { text: 'float', link: '/types/float' },
        ],
      },
      {
        text: 'Operators',
        items: [
          { text: 'mut', link: '/operators/mut' },
          { text: 'if', link: '/operators/if' },
          { text: 'match', link: '/operators/match' },
          { text: 'defer', link: '/operators/defer' },
          { text: 'assert', link: '/operators/assert' },
        ],
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Reading files', link: '/advanced/reading-files' },
          { text: 'Reading big files', link: '/advanced/reading-big-files' },
        ],
      },
      {
        text: 'Package development',
        items: [
          { text: 'Modules', link: '/package-development/modules' },
          { text: 'Packages', link: '/package-development/packages' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/khalyomede/varin.dev' }
    ]
  }
})
