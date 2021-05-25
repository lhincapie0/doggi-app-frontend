import { Matchers } from "@pact-foundation/pact";
import { getProvider } from "./init-pact";
import dogsApi from "../../../src/client/DogsApi";

const provider = getProvider();

describe("Given a Dog breed service", () => {
  beforeAll(async () => {
    console.log("Setting up provider...");
    await provider.setup();
  });

  describe("When a request to list dog breeds is made", () => {
    beforeAll(async () => {
      console.log("Setting up env for list dog breeds test...");

      await provider.addInteraction({
        uponReceiving: "A request to list a new dog breed",
        state: "list dog breeds",
        withRequest: {
          method: "GET",
          path: "/api/v1.0/dogbreeds/",
        },
        willRespondWith: {
          status: 200,
          body: Matchers.eachLike(
            {
              name: Matchers.string("Siberian Husky"),
              lifeExpectancy: Matchers.like(10),
              weight: Matchers.like(20),
              height: Matchers.like(40),
              country: Matchers.string("United Kingdom"),
              dogBreedNatures: Matchers.eachLike(
                {
                  id: Matchers.like(1),
                  name: Matchers.string('Intelligent'),
                },
                {
                  min: 1,
                }
              ),
              dogBreedColors: Matchers.eachLike(
                  {
                    id: Matchers.like(1),
                    name: Matchers.string('Red'),
                  },
                  {
                    min: 1,
                  }
              ),
            },
            { min: 1 }
          ),
        },
      });
    });

    it("Then it should return the right data", async () => {
      const listDogBreedsResponse = await dogsApi.getDogBreeds();
      expect(listDogBreedsResponse.data).toMatchSnapshot();
      provider.verify();
    });
  });

  afterAll(async () => {
    await provider.finalize();
  });
});
