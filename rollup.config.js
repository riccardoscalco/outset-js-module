import babel from 'rollup-plugin-babel';
// import uglify from 'rollup-plugin-uglify';

export default {
	entry: 'index.js',
	format: 'cjs',
	plugins: [
		babel()
		// uglify()
	],
	dest: 'build.js'
};
