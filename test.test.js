const fs = require("fs");
const path = require("path");

describe("File existence tests", () => {
  test("should contain a file named file.png", () => {
    const filePath = path.join(__dirname, "./file.png");
    const fileExists = fs.existsSync(filePath);
    expect(fileExists).toBe(true);
  });
});
