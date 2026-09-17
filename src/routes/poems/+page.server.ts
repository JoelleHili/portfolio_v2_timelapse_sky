import { poemsData }  from "../../data/poemsData.ts"

export function load() {
	return {
		poems: poemsData.map((poem) => ({
			title: poem.title,
			slug: poem.slug,
			theme: poem.theme,
			dateCreated: poem.dateCreated,
			poem: poem.poem			
		}))
	};
}