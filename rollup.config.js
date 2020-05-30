import babel from 'rollup-plugin-babel';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

import pkg from './package.json';

import process from 'process';

export default {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: process.env.BUILD === 'development'
        }
    ],
    plugins: [
        cleaner({
            targets: process.env.BUILD === 'production' ? ['./dist/'] : []
        }),
        external(),
        postcss({
            module: true,
            exec: true
        }),
        url(),
        svgr(),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers']
        }),
        resolve(),
        commonjs()
    ]
};
