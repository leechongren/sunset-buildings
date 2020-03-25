const sunsetBuildings = require("./sunset-buildings");

describe("Sunset Buildings", () => {
  it("should return true and all floors for which floors property", () => {
    expect(sunsetBuildings([1])).toStrictEqual([
      { Able_to_view: true, Which_Floors: "All Floors" }
    ]);
    expect(sunsetBuildings([2])).toStrictEqual([
      { Able_to_view: true, Which_Floors: "All Floors" }
    ]);
  });

  it("should return an object with able to view 'true' and the heights that one can view from if the second building is taller by 1", () => {
    expect(sunsetBuildings([1, 2])).toStrictEqual([
      { Able_to_view: true, Which_Floors: "All Floors" },
      { Able_to_view: true, Which_Floors: "2" }
    ]);
    expect(sunsetBuildings([2, 3])).toStrictEqual([
      { Able_to_view: true, Which_Floors: "All Floors" },
      { Able_to_view: true, Which_Floors: "3" }
    ]);
    expect(sunsetBuildings([6, 7])).toStrictEqual([
      { Able_to_view: true, Which_Floors: "All Floors" },
      { Able_to_view: true, Which_Floors: "7" }
    ]);
  });

  it("should return view 'true' and the range of heights to view from if second building is taller", () => {
    expect(sunsetBuildings([1, 5])).toStrictEqual([
      { Able_to_view: true, Which_Floors: "All Floors" },
      { Able_to_view: true, Which_Floors: "2 to 5" }
    ]);
  });
});
