import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", exclude: ["**/stories"] }),
      postcss({
        extract: false,
        modules: true,
        use: ['sass'],
      }),
    ],
    external: [
      'storybook', 
      'react',
      'react-dom',
    ]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
  {
    input: "src/styles/theme.scss",
    output: {
      file: 'dist/styles/theme.scss',
      name: "style",
    },
    plugins: [
      postcss({
        extract: 'theme.scss',
        sourceMap: true,
        minimize: true,
        use: ['sass'],
      }),
    ],
  },
];