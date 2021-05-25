import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import React from "react";
import { renderAddDialogForm } from "../helpers/helpers";
import userEvent from "@testing-library/user-event";

describe("Success cases, Add Dialog Form", () => {
  test("When form is render title, buttons and required fields should be shown", () => {
    renderAddDialogForm();

    // Dialog title
    const dialogTitle = screen.getByTestId("e2e-create-update-dialog-title");
    expect(dialogTitle).toBeInTheDocument();
    expect(dialogTitle).toHaveTextContent("Add new dog");

    // DialogButton
    const dialogButton = screen.getByTestId("e2e-create-update-dialog-button");
    expect(dialogButton).toBeInTheDocument();
    expect(dialogButton).toHaveTextContent("Create dog");

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

  test("Create button should be disabled when required fields are not filled", () => {
    renderAddDialogForm();
    const dialogButton = screen.getByTestId("e2e-create-update-dialog-button");
    expect(dialogButton).toBeInTheDocument();
    expect(dialogButton).toBeDisabled();
  });

  test("Button should be enabled after all fields are filled", async () => {
    renderAddDialogForm();

    const dialogButton = screen.getByTestId("e2e-create-update-dialog-button");

    const nameInput = screen.getByTestId("e2e-breed-dog-name-input");
    userEvent.type(nameInput, "Siberian Husky");

    expect(dialogButton).toBeDisabled();
    const heightInput = screen.getByTestId("e2e-breed-dog-height-input");
    userEvent.clear(heightInput);
    userEvent.type(heightInput, "40");
    expect(dialogButton).toBeDisabled();

    const weightField = screen.getByTestId("e2e-breed-dog-weight-input");
    userEvent.clear(weightField);
    userEvent.type(weightField, "40");
    expect(dialogButton).toBeDisabled(); //

    const lifeExpectancyField = screen.getByTestId(
      "e2e-breed-dog-life-expectancy-input"
    );
    userEvent.clear(lifeExpectancyField);
    userEvent.type(lifeExpectancyField, "10");

    expect(dialogButton).toBeDisabled();

    const colorsInput = screen.getByTestId("e2e-dog-breed-colors-autocomplete")
      .firstChild.lastChild.firstChild;
    expect(colorsInput.value).toBe("");
    userEvent.type(colorsInput, "Red");
    expect(colorsInput.value).toBe("Red");

    const redOption = screen.getByText("Red");
    userEvent.click(redOption);
    const redColorChip = screen.getByTestId("e2e-color-chip-Red");
    expect(redColorChip).toBeInTheDocument();

    expect(dialogButton).toBeDisabled();

    const naturesInput = screen.getByTestId("e2e-dog-breed-nature-autocomplete")
      .firstChild.lastChild.firstChild;
    expect(naturesInput.value).toBe("");
    userEvent.type(naturesInput, "Intelligent");
    expect(naturesInput.value).toBe("Intelligent");

    const intelligentOption = screen.getByText("Intelligent");
    userEvent.click(intelligentOption);
    const intelligentNatureChip = screen.getByTestId(
      "e2e-nature-chip-Intelligent"
    );
    expect(intelligentNatureChip).toBeInTheDocument();

    expect(dialogButton).toBeEnabled();
  });
});

describe("Error cases, field validations Add Dialog Form", () => {
  test("Should show error message when name is removed", () => {
    renderAddDialogForm();

    const nameInput = screen.getByTestId("e2e-breed-dog-name-input");
    userEvent.type(nameInput, "Siberian Husky");

    userEvent.clear(nameInput);
    const errorNameText = screen.getByText(
      "name is mandatory and can not be empty"
    );
    expect(errorNameText).toBeInTheDocument();

    userEvent.type(nameInput, "Siberian Husky");
    expect(errorNameText).not.toBeInTheDocument();
  });

  test("Should show error message when weight is removed", () => {
    renderAddDialogForm();

    const weightInput = screen.getByTestId("e2e-breed-dog-weight-input");
    userEvent.type(weightInput, '40');

    userEvent.clear(weightInput);
    const errorWeightText = screen.getByText(
        "weight field is mandatory and should and greater than 1"
    );
    expect(errorWeightText).toBeInTheDocument();

    userEvent.type(weightInput, '30');
    expect(errorWeightText).not.toBeInTheDocument();
  });

  test("Should show error message when height is removed", () => {
    renderAddDialogForm();

    const heightInput = screen.getByTestId("e2e-breed-dog-height-input");
    userEvent.type(heightInput, '40');

    userEvent.clear(heightInput);
    const errorHeightText = screen.getByText(
        "height field is mandatory and should and greater than 30"
    );
    expect(errorHeightText).toBeInTheDocument();

    userEvent.type(heightInput, '31');
    expect(errorHeightText).not.toBeInTheDocument();
  });

  test("Should show error message when life expectancy is removed", () => {
    renderAddDialogForm();

    const lifeExpectancy = screen.getByTestId("e2e-breed-dog-life-expectancy-input");
    userEvent.type(lifeExpectancy, '10');

    userEvent.clear(lifeExpectancy);
    const lifeExpectancyErrorText = screen.getByText(
        "lifeExpectancy field is mandatory and should and greater than 1"
    );
    expect(lifeExpectancyErrorText).toBeInTheDocument();

    userEvent.type(lifeExpectancy, '10');
    expect(lifeExpectancyErrorText).not.toBeInTheDocument();
  });

  test('Should show error message when life expectancy value is less than 1', () => {
    renderAddDialogForm();

    const lifeExpectancy = screen.getByTestId("e2e-breed-dog-life-expectancy-input");
    userEvent.type(lifeExpectancy, '-10');

    const lifeExpectancyErrorText = screen.getByText(
        "lifeExpectancy field is mandatory and should and greater than 1"
    );
    expect(lifeExpectancyErrorText).toBeInTheDocument();

    userEvent.type(lifeExpectancy, '10');
    expect(lifeExpectancyErrorText).not.toBeInTheDocument();
  })

  test('Should show error message when weight value is less than 1', () => {
    renderAddDialogForm();

    const weightInput = screen.getByTestId("e2e-breed-dog-weight-input");
    userEvent.type(weightInput, '-90');

    const weightErrorText = screen.getByText(
        "weight field is mandatory and should and greater than 1"
    );
    expect(weightErrorText).toBeInTheDocument();

    userEvent.type(weightInput, '10');
    expect(weightErrorText).not.toBeInTheDocument();
  })

  test('Should show error message when height value is less than 30', () => {
    renderAddDialogForm();

    const heightInput = screen.getByTestId("e2e-breed-dog-height-input");
    userEvent.type(heightInput, '20');

    const heightErrorText = screen.getByText(
        "height field is mandatory and should and greater than 30"
    );
    expect(heightErrorText).toBeInTheDocument();

    userEvent.type(heightInput, '40');
    expect(heightErrorText).not.toBeInTheDocument();
  })

  test('Should show error message when natures length is less than 1', () => {
    renderAddDialogForm();

    const naturesInput = screen.getByTestId("e2e-dog-breed-nature-autocomplete")
        .firstChild.lastChild.firstChild;
    expect(naturesInput.value).toBe("");
    userEvent.type(naturesInput, "Intelligent");
    expect(naturesInput.value).toBe("Intelligent");

    const intelligentOption = screen.getByText("Intelligent");
    userEvent.click(intelligentOption);
    const intelligentNatureChip = screen.getByTestId(
        "e2e-nature-chip-Intelligent"
    );
    expect(intelligentNatureChip).toBeInTheDocument();

    const deleteChipIcon = screen.getByTestId('e2e-delete-nature-Intelligent');
    expect(deleteChipIcon).toBeInTheDocument();
    userEvent.click(deleteChipIcon);
    expect(intelligentNatureChip).not.toBeInTheDocument();

    const dogBreedNatureErrorText = screen.getByText('dogBreedNatures field is mandatory and should have at least one element');
    expect(dogBreedNatureErrorText).toBeInTheDocument();

    userEvent.type(naturesInput, "Intelligent");
    expect(naturesInput.value).toBe("Intelligent");

    const intelligentOption2 = screen.getByText("Intelligent");
    userEvent.click(intelligentOption2);
    expect(dogBreedNatureErrorText).not.toBeInTheDocument();
  })

  test('Should show error message when colors length is less than 1', () => {
    renderAddDialogForm();

    const colorsInput = screen.getByTestId("e2e-dog-breed-colors-autocomplete")
        .firstChild.lastChild.firstChild;
    expect(colorsInput.value).toBe("");
    userEvent.type(colorsInput, "Red");
    expect(colorsInput.value).toBe("Red");

    const redOption = screen.getByText("Red");
    userEvent.click(redOption);
    const redColorChip = screen.getByTestId(
        "e2e-color-chip-Red"
    );
    expect(redColorChip).toBeInTheDocument();

    const deleteChipIcon = screen.getByTestId('e2e-delete-color-Red');
    expect(deleteChipIcon).toBeInTheDocument();
    userEvent.click(deleteChipIcon);
    expect(redColorChip).not.toBeInTheDocument();

    const dogBreedColorsErrorText = screen.getByText('dogBreedColors field is mandatory and should have at least one element');
    expect(dogBreedColorsErrorText).toBeInTheDocument();

    userEvent.type(colorsInput, "Red");
    expect(colorsInput.value).toBe("Red");

    const redColorInput2 = screen.getByText("Red");
    userEvent.click(redColorInput2);
    expect(dogBreedColorsErrorText).not.toBeInTheDocument();
  })
});
