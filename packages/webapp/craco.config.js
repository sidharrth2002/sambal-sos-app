// craco.config.js
export const style = {
  postcss: {
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
