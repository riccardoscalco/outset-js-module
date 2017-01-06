import babel from 'rollup-plugin-babel';

export default {
	entry: 'index.js',
	format: 'es',
	plugins: [
		babel()
	],
	dest: 'build.es.js'
};
