/**
 * START: Follow the instructions below.
 */

import { symbol } from "prop-types";

// Add a type annotation to this variable that describes the object it contains.

const countryPopulation: { code: string, population: number } = {
    code: "NZ",
    population: 5_135_300,
};

// Define a `Country` interface that describes the object in this variable.
// Add the `Country` type as a type annotation for this variable.

interface Country {
    name: string,
    code: string,
    population?: number,
}

const countryData: Country = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

// Define a `Currency` type alias that describes the object in this variable.
// Add the `Currency` type as a type annotation for this variable.

interface CountryWithCurrency extends Country {
    symbol: {
        symbol: string,
    }
}

const currencyData: CountryWithCurrency = {
    name: "Euro",
    code: "EUR",
    symbol: {
        symbol: "€"
    }
};

// ----

export { };
