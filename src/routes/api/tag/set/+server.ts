import { tag } from '$lib/contents/store';
export const prerender = true;

export async function POST(request: Request) {
	const req = await request.json();
	tag.update(() => req.tag);

	return new Response('Success');
}