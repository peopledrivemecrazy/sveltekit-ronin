import { ronin } from '$lib/server/ronin';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const posts = await ronin.get.greenTroutEntries();
	return {
		posts
	};
}) satisfies PageServerLoad;
