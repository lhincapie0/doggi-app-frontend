import { Matchers } from "@pact-foundation/pact";
import { getProvider } from "./init-pact";
import dogsApi from "../../../src/client/DogsApi";

const provider = getProvider();

describe("Given a Dog breed service", () => {
  beforeAll(async () => {
    console.log("Setting up provider...");
    await provider.setup();
  });

  describe("When a request to list dog breed colors categories is made", () => {
    beforeAll(async () => {
      console.log("Setting up env for list dog breeds test...");

      await provider.addInteraction({
        uponReceiving: "A request to list dog breed colors",
        state: "list dog breed colors",
        withRequest: {
          method: "GET",
          path: "/api/v1.0/colors/",
        },
        willRespondWith: {
          status: 200,
          body: Matchers.eachLike(
            {
              id: Matchers.like(1),
              name: Matchers.string("Red"),
            },
            { min: 1 }
          ),
        },
      });
    });

    it("Then it should return the right data", async () => {
      const listDogBreedColorsResponse = await dogsApi.getDogColors();
      expect(listDogBreedColorsResponse.data).toMatchSnapshot();
      provider.verify();
    });
  });

  afterAll(async () => {
    await provider.finalize();
  });
});
