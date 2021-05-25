import { Matchers } from "@pact-foundation/pact";
import { getProvider } from "./init-pact";
import dogsApi from "../../../src/client/DogsApi";
import {createDogBreedMock, dogBreedResponse} from "../helpers/mockData";

const provider = getProvider();

describe("Given a Dog breed service", () => {
  beforeAll(async () => {
    console.log("Setting up provider...");
    await provider.setup();
  });

  describe("When a request to delete an existing dog breed is made", () => {
    beforeAll(async () => {
      console.log("Setting up env for delete dog breed test...");

      await provider.addInteraction({
        uponReceiving: "A request to delete a new dog breed",
        state: "delete existing dog breed",
        withRequest: {
          method: "DELETE",
          path: "/api/v1.0/dogbreeds/1",
        },
        willRespondWith: {
          status: 200,
          body: Matchers.like(dogBreedResponse),
        },
      });
    });

    it("Then it should return the right data", async () => {
      const deleteDogBreedResponse = await dogsApi.deleteDogBreed(1);
      expect(deleteDogBreedResponse.data).toMatchSnapshot();

      await provider.verify();
    });
  });

  afterAll(async () => {
    await provider.finalize();
  });
});
