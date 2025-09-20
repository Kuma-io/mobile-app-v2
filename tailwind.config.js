/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './pages/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        bg: '#fff',
        fg: '#000',
        accent: '#e3342f',
      },
      fontFamily: {
        'inter-thin': ['Inter_100Thin'],
        'inter-extralight': ['Inter_200ExtraLight'],
        'inter-light': ['Inter_300Light'],
        'inter-regular': ['Inter_400Regular'],
        'inter-medium': ['Inter_500Medium'],
        'inter-semibold': ['Inter_600SemiBold'],
        'inter-bold': ['Inter_700Bold'],
        'inter-extrabold': ['Inter_800ExtraBold'],
        'inter-black': ['Inter_900Black'],
      },
    },
  },
  plugins: [],
};
