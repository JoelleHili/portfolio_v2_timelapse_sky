export const GET = async () => {
	const site = 'https://joellehili.com';

	const pages = ['/', '/about', '/education', '/experience'];

	const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `
	<url>
		<loc>${site}${page}</loc>
	</url>`
	)
	.join('')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};