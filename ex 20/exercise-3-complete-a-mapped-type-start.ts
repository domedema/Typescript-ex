/**
 * START: Follow the instructions below.
 */

import { types } from "@babel/core";

type CountryData = {
    readonly name: string;
    readonly languages: string[];
    readonly population: number;
};

// Complete the syntax for this mapped type.
// Hint: Mapped types are generic.
//
// Replace the `never` type with the correct type.
//
// These changes should fix all the type errors.

type Descriptions = {
    [Property in keyof CountryData]:string ;
};

const countryDataDescriptions: Descriptions<CountryData> = {
    name: "The name of the country.",
    languages: "The languages spoken in the country.",
    population: "The population of the country.",
};

// ----

export {};
