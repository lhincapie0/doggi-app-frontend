import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import React from "react";
import {renderAddDialogForm, renderDogCardDetail} from "../helpers/helpers";
import userEvent from "@testing-library/user-event";
import {dogMockData} from "../helpers/mockData";

describe("Success cases, Show Dialog Form", () => {
    test("When form is render title, close button and main fields should be shown", () => {
        renderDogCardDetail(dogMockData);
        const dialogTitle = screen.getByTestId('e2e-dog-card-title-4');
        expect(dialogTitle).toBeInTheDocument();

        const closeButton = screen.getByTestId('e2e-breed-details-close-button');
        expect(closeButton).toBeInTheDocument();

        const breedLifeExpectancyText = screen.getByTestId('e2e-dog-card-life-expectancy-4');
        expect(breedLifeExpectancyText).toBeInTheDocument();
        expect(breedLifeExpectancyText).toHaveTextContent(dogMockData.lifeExpectancy);

        const breedNameText = screen.getByTestId('e2e-dog-card-name-4');
        expect(breedNameText).toBeInTheDocument();
        expect(breedNameText).toHaveTextContent(dogMockData.name);

        const breedHeightText = screen.getByTestId('e2e-dog-card-height-4');
        expect(breedHeightText).toBeInTheDocument();
        expect(breedHeightText).toHaveTextContent(dogMockData.height);

        const breedWeightText = screen.getByTestId('e2e-dog-card-weight-4');
        expect(breedWeightText).toBeInTheDocument();
        expect(breedWeightText).toHaveTextContent(dogMockData.weight);
    });
});

describe('Error cases, when some value is null', () => {
    test('When dog breed name is null or empty, should show fallback text', () => {
        const dogDataWithNoName = { ...dogMockData, ...{ name: null }};
        renderDogCardDetail(dogDataWithNoName);
        const breedNameText = screen.getByTestId('e2e-dog-card-name-4');
        expect(breedNameText).toBeInTheDocument();
        expect(breedNameText).toHaveTextContent('Name: Name was not defined');
    });

    test('When dog breed life expectancy is null or empty, should show fallback text', () => {
        const dogDataWithNoLifeExpectancy = { ...dogMockData, ...{ lifeExpectancy: null }};
        renderDogCardDetail(dogDataWithNoLifeExpectancy);
        const breedLifeExpectancyText = screen.getByTestId('e2e-dog-card-life-expectancy-4');
        expect(breedLifeExpectancyText).toBeInTheDocument();
        expect(breedLifeExpectancyText).toHaveTextContent('Life expectancy: Life expectancy was not defined');
    });

    test('When dog breed weight is null or empty, should show fallback text', () => {
        const dogDataWithNoWeight = { ...dogMockData, ...{ weight: null }};
        renderDogCardDetail(dogDataWithNoWeight);
        const breedWeightText = screen.getByTestId('e2e-dog-card-weight-4');
        expect(breedWeightText).toBeInTheDocument();
        expect(breedWeightText).toHaveTextContent('Weight: Weight was not defined');
    });

    test('When dog breed height is null or empty, should show fallback text', () => {
        const dogDataWithNoHeight = { ...dogMockData, ...{ height: null }};
        renderDogCardDetail(dogDataWithNoHeight);
        const breedHeightText = screen.getByTestId('e2e-dog-card-height-4');
        expect(breedHeightText).toBeInTheDocument();
        expect(breedHeightText).toHaveTextContent('Height: Height was not defined');
    });
})
