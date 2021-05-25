export const countriesMockData = [
    { id: 1, name: "Afganistán" },
    { id: 2, name: "Albania" },
    { id: 3, name: "Alemania" },
    { id: 4, name: "Andorra" },
    { id: 5, name: "Angola" },
    { id: 6, name: "Antigua y Barbuda" },
    { id: 7, name: "Arabia Saudita" },
    { id: 8, name: "Reino Unido" },
];

export const colorsMockData = [
    { id: 1, name: "Red" },
    { id: 2, name: "Black" },
    { id: 3, name: "Brindle" },
    { id: 4, name: "Fawn" },
    { id: 5, name: "Tan" },
    { id: 6, name: "Grey" },
    { id: 7, name: "Brown" },
    { id: 8, name: "Blue" },
    { id: 9, name: "Sable" },
];

export const naturesMockData = [
    { id: 1, name: "sweet-tempered" },
    { id: 2, name: "Trainable" },
    { id: 3, name: "Stubborn" },
    { id: 4, name: "Keen" },
    { id: 5, name: "Active" },
    { id: 7, name: "Intelligent" },
    { id: 8, name: "Affectionate" },
    { id: 9, name: "Friendly" },
    { id: 11, name: "Loyal" },
    { id: 12, name: "Courageous" },
    { id: 6, name: "Preteotive" },
    { id: 10, name: "Obedient" },
];


export const dogMockData = {
    country: "Reino Unido",
    dogBreedColors: [
        { id: 1, name: "Red" },
        { id: 2, name: "Black" },
        { id: 3, name: "Brindle" },
    ],
    dogBreedNatures: [
        { id: 1, name: "sweet-tempered" },
        { id: 2, name: "Trainable" },
        { id: 3, name: "Stubborn" },
    ],
    height: 31,
    id: 4,
    lifeExpectancy: 9,
    name: "Beagle",
    weight: 35,
};

// STATES
export const dogsData = {
    rowsLoading: false,
    dogs: [dogMockData],
    colors: colorsMockData,
    natures: naturesMockData,
};

export const countriesData = {
    countriesLoading: false,
    countries: countriesMockData,
};
