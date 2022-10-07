import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			edge: false,
			split: true
		}),
		paths: {
			base: dev ? '' : '/blog'
		}
	}
};

export default config;
