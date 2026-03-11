import { readFile, writeFile } from "fs/promises";
			
/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError() {
    const hits = Number(await readFile('data/hits', 'utf8')) - 1;
    if (hits > 1) {
        writeFile('data/hits', String(hits))
    }
}