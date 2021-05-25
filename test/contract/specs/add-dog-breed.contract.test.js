import { Matchers } from "@pact-foundation/pact";
import { getProvider } from "./init-pact";
import dogsApi from "../../../src/client/DogsApi";
import { createDogBreedMock, dogBreedResponse } from "../helpers/mockData";

const provider = getProvider();

describe("Given a Dog breed service", () => {
  beforeAll(async () => {
    console.log("Setting up provider...");
    await provider.setup();
  });

  describe("When a request to create a new dog breed is made", () => {
    beforeAll(async () => {
      console.log("Setting up env for create dog breed test...");

      await provider.addInteraction({
        uponReceiving: "A request to create a new dog breed",
        state: "create new dog breed",
        withRequest: {
          method: "POST",
          path: "/api/v1.0/dogbreeds/",
          body: createDogBreedMock,
        },
        willRespondWith: {
          status: 201,
          body: Matchers.like(dogBreedResponse),
        },
      });
    });

    it("Then it should return the right data", async () => {
      const createDogBreedResponse = await dogsApi.postDogBreed(
        createDogBreedMock
      );
      expect(createDogBreedResponse.data).toMatchSnapshot();
      provider.verify();
    });
  });

  afterAll(async () => {
    await provider.finalize();
  });
});
