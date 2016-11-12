import tape from 'tape';
import foo from './index';

tape(
	'foo() returns the answer to the ultimate question of life, the universe, and everything.',
	test => {
		test.equal(foo(), 42);
		test.end();
	}
);
