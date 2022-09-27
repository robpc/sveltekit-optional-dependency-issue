import type { PageServerLoad } from './$types';

// Comment out this import line to remove the 500 error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import jsdom from 'jsdom';

export const load: PageServerLoad = async function GET() {
	let canvasInstalled = false;
	try {
		require.resolve('canvas');
		canvasInstalled = true;
	} catch (e) {
		// canvas is not installed
	}

	return { canvasInstalled };
};
