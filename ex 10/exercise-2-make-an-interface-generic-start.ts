/**
 * START: Follow the instructions below.
 */

import { types } from "@babel/core";
import { type } from "os";

// Make this `LanguagesType` interface generic.
// This should fix the type errors on Lines 14 and 21.
// Hint: The type for the `languages` property should use a type variable.

interface Country<type> {
    name: string;
    languages: unknown;
}

type CountryObject = Country<{ name: string; languages: string; }>;


const languagesObj1: CountryObject = {
    name: "New Zealand",
    languages: "English, Māori"
};

console.log(languagesObj1.languages);

const languagesObj2: CountryObject = {
    name: "Spain",
    languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],
};

console.log(languagesObj2.languages.join(", "));

// ----

export { };
