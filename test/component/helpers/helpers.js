import { render } from "@testing-library/react";
import AddDogDialog from "../../../src/components/Dogs/AddDogDialog";
import { fromJS } from "immutable";
import { countriesData, dogsData } from "./mockData";
import React from "react";
import DogCard from "../../../src/components/Dogs/DogCard";
import DogDetails from "../../../src/components/Dogs/DogDetails";

export function renderAddDialogForm(breed = null) {
  render(
    <AddDogDialog
      countriesData={fromJS(countriesData)}
      onClose={jest.fn()}
      open={true}
      dogsData={fromJS(dogsData)}
      createDogBreed={jest.fn()}
      breed={breed}
      editDogBreed={jest.fn()}
    />
  );
}

export function renderDogCardDetail(breed) {
  render(
    <DogDetails
      open={true}
      onClose={jest.fn()}
      dog={fromJS(breed)}
    />
  );
}
