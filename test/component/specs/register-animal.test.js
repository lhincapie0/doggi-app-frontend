import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import {renderAddDialogForm} from "../helpers/helpers";

test('When form is render title, buttons and required fields should be shown', () => {
  renderAddDialogForm();

  // Dialog title
  const dialogTitle = screen.getByTestId('e2e-create-update-dialog-title');
  expect(dialogTitle).toBeInTheDocument();
  expect(dialogTitle).toHaveTextContent('Add new dog');

  // DialogButton
  const dialogButton = screen.getByTestId('e2e-create-update-dialog-button');
  expect(dialogButton).toBeInTheDocument();
  expect(dialogButton).toHaveTextContent('Create dog');

  // Name field
  const nameInput = screen.getByTestId('e2e-breed-dog-name-input');
  expect(nameInput).toBeInTheDocument();

  // Height field
  const heightInput = screen.getByTestId('e2e-breed-dog-height-input');
  expect(heightInput).toBeInTheDocument();

  // Weight field
  const weightField = screen.getByTestId('e2e-breed-dog-weight-input');
  expect(weightField).toBeInTheDocument();

  const lifeExpectancyInput = screen.getByTestId('e2e-add-dialog-life-expectancy-field');
  expect(lifeExpectancyInput).toBeInTheDocument();

  const countrySelect = screen.getByTestId('e2e-dog-breed-country-select');
  expect(countrySelect).toBeInTheDocument();

  const colorsAutocomplete = screen.getByTestId('e2e-dog-breed-colors-autocomplete');
  expect(colorsAutocomplete).toBeInTheDocument();

  const natureAutocomplete = screen.getByTestId('e2e-dog-breed-nature-autocomplete');
  expect(natureAutocomplete).toBeInTheDocument();
});

