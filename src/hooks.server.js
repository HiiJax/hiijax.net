import { readFile, writeFile } from "fs/promises";
			
/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ event, error, status }) {
    const formatted_error = `\n\x1b[1;31m[${status}] ${event.request.method} ${event.url.pathname}\x1b[0m`;
    if (status === 404) {
		console.error(formatted_error);
	} else if (error instanceof Error) {
	    console.error(`${formatted_error}\n${error.stack}`);
    }

    const hits = Number(await readFile('data/hits', 'utf8')) - 1;
    if (hits > 1) {
        writeFile('data/hits', String(hits))
    }
}