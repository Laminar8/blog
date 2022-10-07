export const prerender = true;

import { redirect } from '@sveltejs/kit';
import { url } from '$lib/contents/url';

export function load() {
	throw redirect(307, `${url}/posts`);
}
