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

export function renderDogDialogDetail(breed) {
  render(<DogDetails open={true} onClose={jest.fn()} dog={fromJS(breed)} />);
}

export function renderDogCardDetails(breed) {
  render(
    <DogCard
      openDetails={jest.fn()}
      onDelete={jest.fn()}
      index={breed.id}
      dog={fromJS(breed)}
    />
  );
}
