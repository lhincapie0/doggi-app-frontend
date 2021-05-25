import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import React from "react";
import { renderAddDialogForm } from "../helpers/helpers";
import userEvent from "@testing-library/user-event";
import { dogMockData } from "../helpers/mockData";
import {fromJS} from "immutable";

describe("Success cases, Edit Dialog Form", () => {
  test("When form is render title, buttons and required fields should be shown", () => {
    renderAddDialogForm(fromJS(dogMockData));

    // Dialog title
    const dialogTitle = screen.getByTestId("e2e-create-update-dialog-title");
    expect(dialogTitle).toBeInTheDocument();
    expect(dialogTitle).toHaveTextContent("Update");

    // DialogButton
    const dialogButton = screen.getByTestId("e2e-create-update-dialog-button");
    expect(dialogButton).toBeInTheDocument();
    expect(dialogButton).toHaveTextContent("Update dog");

    // Name field
    const nameInput = screen.getByTestId("e2e-breed-dog-name-input");
    expect(nameInput).toBeInTheDocument();

    // Height field
    const heightInput = screen.getByTestId("e2e-breed-dog-height-input");
    expect(heightInput).toBeInTheDocument();

    // Weight field
    const weightField = screen.getByTestId("e2e-breed-dog-weight-input");
    expect(weightField).toBeInTheDocument();

    const lifeExpectancyInput = screen.getByTestId(
      "e2e-breed-dog-life-expectancy-input"
    );
    expect(lifeExpectancyInput).toBeInTheDocument();

    const countrySelect = screen.getByTestId("e2e-dog-breed-country-select");
    expect(countrySelect).toBeInTheDocument();

    const colorsAutocomplete = screen.getByTestId(
      "e2e-dog-breed-colors-autocomplete"
    );
    expect(colorsAutocomplete).toBeInTheDocument();

    const natureAutocomplete = screen.getByTestId(
      "e2e-dog-breed-nature-autocomplete"
    );
    expect(natureAutocomplete).toBeInTheDocument();
  });

  test('On edit, dog breed name is shown with correct data', () => {
    renderAddDialogForm(fromJS(dogMockData));
    const nameInput = screen.getByTestId("e2e-breed-dog-name-input");
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue(dogMockData.name);
  });

  test('On edit, dog breed weight is shown with correct data', () => {
    renderAddDialogForm(fromJS(dogMockData));
    const weightInput = screen.getByTestId("e2e-breed-dog-weight-input");
    expect(weightInput).toBeInTheDocument();
    expect(weightInput).toHaveValue(dogMockData.weight);
  });

  test('On edit, dog breed height is shown with correct data', () => {
    renderAddDialogForm(fromJS(dogMockData));
    const heightInput = screen.getByTestId("e2e-breed-dog-height-input");
    expect(heightInput).toBeInTheDocument();
    expect(heightInput).toHaveValue(dogMockData.height);
  });

  test('On edit, dog breed life expectancy is shown with correct data', () => {
    renderAddDialogForm(fromJS(dogMockData));
    const lifeExpectancyInput = screen.getByTestId("e2e-breed-dog-life-expectancy-input");
    expect(lifeExpectancyInput).toBeInTheDocument();
    expect(lifeExpectancyInput).toHaveValue(dogMockData.lifeExpectancy);
  });

  test('On edit, dog breed country is shown with correct data', async () => {
    renderAddDialogForm(fromJS(dogMockData));
    const countrySelect = screen.getByTestId("e2e-dog-breed-country-select");
    expect(countrySelect).toBeInTheDocument();

    const countryInput = await screen.findByText('Reino Unido');
    expect(countryInput).toBeInTheDocument();
  });

  test('On edit, dog breed colors is shown with correct data', async () => {
    renderAddDialogForm(fromJS(dogMockData));
    const redColorChip = screen.getByTestId(
        "e2e-color-chip-Red"
    );
    expect(redColorChip).toBeInTheDocument();
    const blackColorChip = screen.getByTestId(
        "e2e-color-chip-Black"
    );
    expect(blackColorChip).toBeInTheDocument();

    const brindleColorChip = screen.getByTestId(
        "e2e-color-chip-Brindle"
    );
    expect(brindleColorChip).toBeInTheDocument();
  });

  test('On edit, dog breed natures is shown with correct data', async () => {
    renderAddDialogForm(fromJS(dogMockData));
    const sweetTemperedNatureChip = screen.getByTestId(
        "e2e-nature-chip-sweet-tempered"
    );
    expect(sweetTemperedNatureChip).toBeInTheDocument();

    const trainableNatureChip = screen.getByTestId(
        "e2e-nature-chip-Trainable"
    );
    expect(trainableNatureChip).toBeInTheDocument();

    const stubbornNatureChip = screen.getByTestId(
        'e2e-nature-chip-Stubborn'
    );
    expect(stubbornNatureChip).toBeInTheDocument();
  });

  test('Edit button should be disabled if no changes has been made', () => {
    renderAddDialogForm(fromJS(dogMockData));

    const dialogButton = screen.getByTestId("e2e-create-update-dialog-button");
    expect(dialogButton).toBeInTheDocument();
    expect(dialogButton).toBeDisabled();
  });

  test('Edit button should be enabled if a change has been made', () => {
    renderAddDialogForm(fromJS(dogMockData));

    const dialogButton = screen.getByTestId("e2e-create-update-dialog-button");
    expect(dialogButton).toBeInTheDocument();
    expect(dialogButton).toBeDisabled();

    const nameInput = screen.getByTestId("e2e-breed-dog-name-input");
    expect(nameInput).toBeInTheDocument();
    userEvent.type(nameInput, ' Updated');

    expect(dialogButton).toBeEnabled();
  });

});

// Same validations as in add dialog mode
describe('Error cases - validations, edit dialog from', () => {
  test("Should show error message when name is removed", () => {
    renderAddDialogForm(fromJS(dogMockData));

    const nameInput = screen.getByTestId("e2e-breed-dog-name-input");

    expect(nameInput).toHaveValue(dogMockData.name);
    userEvent.clear(nameInput);
    const errorNameText = screen.getByText(
        "name is mandatory and can not be empty"
    );
    expect(errorNameText).toBeInTheDocument();

    userEvent.type(nameInput, dogMockData.name);
    expect(errorNameText).not.toBeInTheDocument();
  });

  test("Should show error message when weight is less than 1", () => {
    renderAddDialogForm(fromJS(dogMockData));

    const weigtInput = screen.getByTestId("e2e-breed-dog-weight-input");

    expect(weigtInput).toHaveValue(dogMockData.weight);
    userEvent.clear(weigtInput);
    userEvent.type(weigtInput, '-30');
    const errorWeightText = screen.getByText(
        "weight field is mandatory and should and greater than 1"
    );
    expect(errorWeightText).toBeInTheDocument();

    userEvent.clear(weigtInput);
    userEvent.type(weigtInput, `${dogMockData.weight}`);
    expect(errorWeightText).not.toBeInTheDocument();
  });

  test("Should show error message when weight is removed", () => {
    renderAddDialogForm(fromJS(dogMockData));

    const weigtInput = screen.getByTestId("e2e-breed-dog-weight-input");

    expect(weigtInput).toHaveValue(dogMockData.weight);
    userEvent.clear(weigtInput);
    const errorWeightText = screen.getByText(
        "weight field is mandatory and should and greater than 1"
    );
    expect(errorWeightText).toBeInTheDocument();

    userEvent.type(weigtInput, `${dogMockData.weight}`);
    expect(errorWeightText).not.toBeInTheDocument();
  });

  test("Should show error message when height is less than 30", () => {
    renderAddDialogForm(fromJS(dogMockData));

    const heightInput = screen.getByTestId("e2e-breed-dog-height-input");

    expect(heightInput).toHaveValue(dogMockData.height);
    userEvent.clear(heightInput);
    userEvent.type(heightInput, '-29');
    const errorHeightText = screen.getByText(
        "height field is mandatory and should and greater than 30"
    );
    expect(errorHeightText).toBeInTheDocument();

    userEvent.clear(heightInput);
    userEvent.type(heightInput, `${dogMockData.height}`);
    expect(errorHeightText).not.toBeInTheDocument();
  });

  test("Should show error message when height is removed", () => {
    renderAddDialogForm(fromJS(dogMockData));

    const heightInput = screen.getByTestId("e2e-breed-dog-height-input");

    expect(heightInput).toHaveValue(dogMockData.height);
    userEvent.clear(heightInput);
    const errorHeightText = screen.getByText(
        "height field is mandatory and should and greater than 30"
    );
    expect(errorHeightText).toBeInTheDocument();

    userEvent.type(heightInput, `${dogMockData.height}`);
    expect(errorHeightText).not.toBeInTheDocument();
  });

  test("Should show error message when life expectancy is removed", () => {
    renderAddDialogForm(fromJS(dogMockData));

    const lifeExpectancyInput = screen.getByTestId("e2e-breed-dog-life-expectancy-input");

    expect(lifeExpectancyInput).toHaveValue(dogMockData.lifeExpectancy);
    userEvent.clear(lifeExpectancyInput);
    const erroLifeExpectancyText = screen.getByText(
        "lifeExpectancy field is mandatory and should and greater than 1"
    );
    expect(erroLifeExpectancyText).toBeInTheDocument();

    userEvent.type(lifeExpectancyInput, `${dogMockData.lifeExpectancy}`);
    expect(erroLifeExpectancyText).not.toBeInTheDocument();
  });

  test("Should show error message when life expectancy is less than 1", () => {
    renderAddDialogForm(fromJS(dogMockData));

    const lifeExpectancyInput = screen.getByTestId("e2e-breed-dog-life-expectancy-input");

    expect(lifeExpectancyInput).toHaveValue(dogMockData.lifeExpectancy);
    userEvent.clear(lifeExpectancyInput);
    userEvent.type(lifeExpectancyInput, '-10');
    const erroLifeExpectancyText = screen.getByText(
        "lifeExpectancy field is mandatory and should and greater than 1"
    );
    expect(erroLifeExpectancyText).toBeInTheDocument();

    userEvent.clear(lifeExpectancyInput);
    userEvent.type(lifeExpectancyInput, `${dogMockData.lifeExpectancy}`);
    expect(erroLifeExpectancyText).not.toBeInTheDocument();
  });

  test("Should show error message when all colors are removed", () => {
    renderAddDialogForm(fromJS(dogMockData));

    const deleteIconButtonBlack = screen.getByTestId('e2e-delete-color-Black');
    expect(deleteIconButtonBlack).toBeInTheDocument();
    userEvent.click(deleteIconButtonBlack);

    const deleteIconButtonRed = screen.getByTestId('e2e-delete-color-Red');
    expect(deleteIconButtonRed).toBeInTheDocument();
    userEvent.click(deleteIconButtonRed);

    const deleteIconButtonBrindle = screen.getByTestId('e2e-delete-color-Brindle');
    expect(deleteIconButtonBrindle).toBeInTheDocument();
    userEvent.click(deleteIconButtonBrindle);

    const dogBreedColorsErrorText = screen.getByText('dogBreedColors field is mandatory and should have at least one element');
    expect(dogBreedColorsErrorText).toBeInTheDocument();
  })

  test("Should show error message when all natures are removed", () => {
    renderAddDialogForm(fromJS(dogMockData));

    const deleteIconButtonSweetTempered= screen.getByTestId('e2e-delete-nature-sweet-tempered');
    expect(deleteIconButtonSweetTempered).toBeInTheDocument();
    userEvent.click(deleteIconButtonSweetTempered);

    const deleteIconButtonTrainable = screen.getByTestId('e2e-delete-nature-Trainable');
    expect(deleteIconButtonTrainable).toBeInTheDocument();
    userEvent.click(deleteIconButtonTrainable);

    const deleteIconButtonStubborn = screen.getByTestId('e2e-delete-nature-Stubborn');
    expect(deleteIconButtonStubborn).toBeInTheDocument();
    userEvent.click(deleteIconButtonStubborn);

    const dogBreedNaturesErrorText = screen.getByText('dogBreedNatures field is mandatory and should have at least one element');
    expect(dogBreedNaturesErrorText).toBeInTheDocument();
  })
})
