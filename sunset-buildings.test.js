const sunsetBuildings = require("./sunset-buildings");

describe("Sunset Buildings", () => {
  it("should return yes and the first building height", () => {
    expect(sunsetBuildings([4])).toStrictEqual([
      { Able_to_view: "yes", Height: 4 }
    ]);
  });
});
