import { tag } from '$lib/contents/store';
import type { RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
	const req = await request.json();
	tag.update(() => req.tag);

	return new Response('Success');
}
