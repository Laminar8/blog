import { json } from '@sveltejs/kit';
import { tag } from '$lib/contents/store';

let newTag: string;
export const prerender = true;

export async function GET() {
	tag.subscribe((value) => (newTag = value));

	return json(newTag);
}
