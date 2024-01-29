import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.js', '.jsx'];

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.esm.js', 
    format: 'esm', 
  },
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      include: ['src/**/*'],
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react']
    }),
    terser(),
    postcss({
      extensions: ['.css'],
    })
  ],
  external: ['react', 'react-dom'],
  
};
