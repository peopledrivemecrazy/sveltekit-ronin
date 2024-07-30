import type { PageServerLoad } from './$types';
import { ronin } from '$lib/server/ronin';


export const load = (async ({ params }) => {
	const { id } = params;
	const post = await ronin.get.greenTroutEntry.with.id(id);
    
	return {
		post
	};
}) satisfies PageServerLoad;
