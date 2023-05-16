// Code your solution in this file!
const returnFirstTwoDrivers = names => names.slice(0, 2);

const returnLastTwoDrivers = names => names.slice(names.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => fare => fare * multiplier;

const fareDoubler = fare => createFareMultiplier(2)(fare);

const fareTripler = fare => createFareMultiplier(3)(fare);

const selectDifferentDrivers = (drivers, driversSelection) => driversSelection(drivers);