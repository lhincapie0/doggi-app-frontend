import { DOG_BREED_FIELDS_KEYS } from "../constants/dogBreed";

function validateStringField(field, value) {
    if (value !== '' && value !== null) {
        return null;
    }
    return `${field} is mandatory and can not be empty`;
}

function calculateMinValue(field) {
    switch (field) {
        case DOG_BREED_FIELDS_KEYS.height:
            return 30;
        default:
            return 1;
    }
}

function validateNumericField(field, value) {
    const minValue = calculateMinValue(field);
    if (value > minValue) {
        return null;
    }
    return `${field} field is mandatory and should and greater than ${minValue}`;
}

function validateListNotEmpty(field, array) {
    if (array.length > 0) {
        return null;
    }
    return `${field} field is mandatory and should have at least one element`;
}

function validateFields(field, value) {
    switch (field) {
        case DOG_BREED_FIELDS_KEYS.name:
            return validateStringField(field, value);
        case DOG_BREED_FIELDS_KEYS.country:
            return validateStringField(field, value);
        case DOG_BREED_FIELDS_KEYS.height:
            return validateNumericField(field, value);
        case DOG_BREED_FIELDS_KEYS.lifeExpectancy:
            return validateNumericField(field, value);
        case DOG_BREED_FIELDS_KEYS.weight:
            return validateNumericField(field, value);
        case DOG_BREED_FIELDS_KEYS.dogBreedColors:
            return validateListNotEmpty(field, value);
        case DOG_BREED_FIELDS_KEYS.dogBreedNatures:
            return validateListNotEmpty(field, value);
        default:
            return null;
    }
}

export default validateFields;
