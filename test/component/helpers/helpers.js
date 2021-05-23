import { render } from "@testing-library/react";
import AddDogDialog from "../../../src/components/Dogs/AddDogDialog";
import { fromJS } from "immutable";
import { countriesData, dogsData } from "./mockData";
import React from "react";

export function renderAddDialogForm() {
  render(
    <AddDogDialog
      countriesData={fromJS(countriesData)}
      onClose={jest.fn()}
      open={true}
      dogsData={fromJS(dogsData)}
      createDogBreed={jest.fn()}
      breed={null}
      editDogBreed={jest.fn()}
    />
  );
}
