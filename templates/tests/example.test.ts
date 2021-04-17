import got from "got";
import { strict as assert } from "assert";

describe("Pet", function () {
  it("receive pet by his id", async function () {
    const response = await got("http://localhost:8080/api/v3/pet/1");
    const body = JSON.parse(response.body);

    assert(body.id == 1, `Expected API to return pet with id 1, but got ${body.id}`)
  })
})