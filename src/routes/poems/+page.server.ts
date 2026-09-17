import { poemsData }  from "../../data/poemsData.ts"
import { orderPoems } from "../../helper/poemsHandler.ts";

export function load() {
	return {
		poems: orderPoems({ poems: poemsData, type: 'date', direction: 'dsc' }).map((poem) => ({
			title: poem.title,
			slug: poem.slug,
			theme: poem.theme,
			dateCreated: poem.dateCreated,
			poem: poem.poem			
		}))
	};
}