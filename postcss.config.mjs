/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // Jangan pakai @tailwindcss/postcss (itu buat v4)
    autoprefixer: {},
  },
};

export default config;