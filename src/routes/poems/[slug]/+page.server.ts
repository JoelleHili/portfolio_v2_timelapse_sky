import { error } from '@sveltejs/kit';
import { poemsData } from '../../../data/poemsData.ts';

export function load({ params }) {
	const poemData = poemsData.find((poem) => poem.slug === params.slug);

	if (!poemData) error(404);

	return {
		poemData
	};
}