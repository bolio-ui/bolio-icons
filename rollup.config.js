import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import svgr from '@svgr/rollup';
const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: packageJson.main,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    svgr(),
    filesize(),
  ],
};
