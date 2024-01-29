import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

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
    babel({ extensions, include: ['src/**/*'], babelHelpers: 'bundled' }), 
    terser() 
  ],
  external: ['react', 'react-dom'] 
};
