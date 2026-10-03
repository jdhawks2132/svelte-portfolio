import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
	js.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			// Every dynamic href on this site is an external URL; the one internal link is "/".
			'svelte/no-navigation-without-resolve': ['error', { ignoreLinks: true }]
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'node_modules/']
	}
];
