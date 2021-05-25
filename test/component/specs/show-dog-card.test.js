import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import React from "react";
import { renderDogCardDetails } from "../helpers/helpers";
import { dogMockData } from "../helpers/mockData";

describe("Success cases, Show Dog Card", () => {
  test("When form is avatar with name, edit - view details - delete button and main details", () => {
    renderDogCardDetails(dogMockData);

    const avatarCard = screen.getByTestId("e2e-dog-card-avatar-name-Beagle");
    expect(avatarCard).toBeInTheDocument();
    expect(avatarCard).toHaveTextContent("B"); // First letter in avatar

    const weightText = screen.getByTestId("e2e-dog-card-weight-Beagle");
    expect(weightText).toBeInTheDocument();
    expect(weightText).toHaveTextContent(dogMockData.weight);

    const heightText = screen.getByTestId("e2e-dog-card-height-Beagle");
    expect(heightText).toBeInTheDocument();
    expect(heightText).toHaveTextContent(dogMockData.height);

    const editButton = screen.getByTestId("e2e-dog-card-edit-button-Beagle");
    expect(editButton).toBeInTheDocument();
    expect(editButton).toBeEnabled();

    const deleteButton = screen.getByTestId(
      "e2e-dog-card-delete-button-Beagle"
    );
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toBeEnabled();

    const viewDetailsButton = screen.getByTestId(
      "e2e-dog-card-view-details-button-Beagle"
    );
    expect(viewDetailsButton).toBeInTheDocument();
    expect(viewDetailsButton).toBeEnabled();
  });
});

describe("Failure cases, Should shown fallback values when values are not defined", () => {
  test("Should shown fallback value when height is not defined", () => {
    const dogDataWithNoHeight = { ...dogMockData, ...{ height: null } };
    renderDogCardDetails(dogDataWithNoHeight);

    const heightText = screen.getByTestId("e2e-dog-card-height-Beagle");
    expect(heightText).toBeInTheDocument();
    expect(heightText).toHaveTextContent("Height: Not defined");
  });

  test("Should shown fallback value when life expectancy is not defined", () => {
    const dogDataWithNoLifeExpectancy = {
      ...dogMockData,
      ...{ lifeExpectancy: null },
    };
    renderDogCardDetails(dogDataWithNoLifeExpectancy);

    const lifeExpectancyText = screen.getByText("Life Expectancy: Not defined");
    expect(lifeExpectancyText).toBeInTheDocument();
  });

  test("Should shown fallback value when weight is not defined", () => {
    const dogDataWithNoHeight = { ...dogMockData, ...{ weight: null } };
    renderDogCardDetails(dogDataWithNoHeight);

    const weightText = screen.getByTestId("e2e-dog-card-weight-Beagle");
    expect(weightText).toBeInTheDocument();
    expect(weightText).toHaveTextContent("Weight: Not defined");
  });
});
