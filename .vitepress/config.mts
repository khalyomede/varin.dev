import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Varin",
  srcDir: "_docs",
  outDir: "docs",
  base: "/varin.dev",
  description: "Learn V lang and its ecosystem for free.",
  head: [
    // Example using Fira Code from Google Fonts
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap'
    }]
  ],
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
          { text: 'VPM', link: '/resources/vpm' },
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
          { text: 'install', link: '/commands/install' },
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
          { text: 'array', link: '/types/array' },
          { text: 'interface', link: '/types/interface' },
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
        text: 'Functions',
        items: [
          { text: 'panic', link: '/functions/panic' },
          { text: 'println', link: '/functions/println' },
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Reading files', link: '/advanced/reading-files' },
          { text: 'Reading big files', link: '/advanced/reading-big-files' },
          { text: 'Heap VS stack', link: '/advanced/heap-vs-stack' },
        ],
      },
      {
        text: 'Package development',
        items: [
          { text: 'Modules', link: '/package-development/modules' },
          { text: 'Packages', link: '/package-development/packages' },
        ],
      },
      {
        text: 'Constants',
        items: [
          { text: '@FILE', link: '/constants/@file' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/khalyomede/varin.dev' }
    ]
  }
})
