import flowbitePlugin from 'flowbite/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Pour que Vite scanne Flowbite
    "./node_modules/flowbite-vue/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin,
  ],
}
