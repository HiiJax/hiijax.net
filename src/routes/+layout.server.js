import { dev } from "$app/environment";
import { readdir } from "fs/promises";
import path from "path";

export async function load() {
    let buttonPath = path.resolve("public/buttons")

    if (dev) {
        buttonPath = path.resolve("static/buttons");
    } 

    const buttons = await readdir(buttonPath);

    /**
    * @param {string[]} array
    */
    function shuffle(array) {
        const copy = [...array];
        let currentIndex = copy.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [copy[currentIndex], copy[randomIndex]] = [
                copy[randomIndex], copy[currentIndex]];
        }

        return copy;
    }

    return {
        buttons,
        buttonsShuffled: shuffle(buttons)
    };
}