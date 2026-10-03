import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// The whole stylesheet is ~17 KB (~5 KB gzipped); inline it to skip a render-blocking request.
		inlineStyleThreshold: 20480,
		// Root-absolute asset URLs so the inlined @font-face paths also resolve on nested routes (e.g. 404s).
		paths: { relative: false }
	}
};

export default config;
