/**
 * START: Follow the instructions below.
 */

interface Country {
    name: string;
    code: string;
}

// Complete the `CountryWithPopulation` interface:
//
// - Extend the `Country` interface
// - Add a `population` property with an appropriate type

interface CountryWithPopulation extends Country {
    population: {
        population: number;
    }

}

const countryA: CountryWithPopulation = {
    name: "India",
    code: "IN",
    population: {
        population: 1_352_642_280,
    }
};

const countryB: Country = {
    name: "Italy",
    code: "IT"
};

const countryC: CountryWithPopulation = {
    name: "Spain",
    code: "ES",
    population: {
        population: 47_450_795,
    }
};

// ----

export { };
