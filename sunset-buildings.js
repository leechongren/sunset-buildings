const sunsetBuildings = arrOfBuildings => {
  let numOfBuildings = arrOfBuildings.length;
  let positionOfBuilding = 1;
  const resultArray = [{ Able_to_view: true, Which_Floors: "All Floors" }];
  const moveToNext = () => {
    numOfBuildings--;
    positionOfBuilding++;
  };
  while (numOfBuildings > 1) {
    const isTaller =
      arrOfBuildings[positionOfBuilding] >
      arrOfBuildings[positionOfBuilding - 1];
    if (isTaller) {
      const tallerByMoreThan1 =
        arrOfBuildings[positionOfBuilding] -
          arrOfBuildings[positionOfBuilding - 1] >
        1;
      if (tallerByMoreThan1) {
        const heightThatCanViewBtm = arrOfBuildings[positionOfBuilding - 1] + 1;
        const heightThatCanViewTop = arrOfBuildings[positionOfBuilding];
        resultArray.push({
          Able_to_view: true,
          Which_Floors: `${heightThatCanViewBtm} to ${heightThatCanViewTop}`
        });
        moveToNext();
      } else {
        const heightThatCanView = arrOfBuildings[positionOfBuilding];
        resultArray.push({
          Able_to_view: true,
          Which_Floors: `${heightThatCanView}`
        });
        moveToNext();
      }
    } else {
      resultArray.push({ Able_to_view: false });
      moveToNext();
    }
  }

  return resultArray;
};

module.exports = sunsetBuildings;
