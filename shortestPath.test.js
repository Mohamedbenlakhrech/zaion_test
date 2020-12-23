const { timeToMinutes, minutesToTime } = require("./shortestPathFinder");
const { getPath } = require("./Controller/apiCtrl");

describe("Run Indiana Jones Tests", () => {

    test("it should return the minimum arrival time from Paris to Berlin ", () => {
        expect(getPath()).toBe("18:40");
    });

    test("it should return the correct Time based on minutes", () => {
        expect(minutesToTime(150)).toBe("02:30");
        expect(minutesToTime(60 * 24)).toBe("00:00");
        expect(minutesToTime(60 * 2)).toBe("02:00");
        expect(minutesToTime(1120)).toBe("18:40");
    });

    test("it should convert time to minutes", () => {
        expect(timeToMinutes("23:30")).toBe(1410);
        expect(timeToMinutes("14:19")).toBe(859);
        expect(timeToMinutes("08:30")).toBe(510);
      });
});