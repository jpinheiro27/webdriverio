const { expect } = require("chai");

describe("isExisting, isSelected and isDisplayed", () => {
  beforeEach(function () {
    browser.setWindowSize(1800, 1200);
    browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
  });

  it("Validate state of checkbox", () => {
    const checkbox = $("//input[@value='option-1']");
    expect(checkbox.isExisting()).to.be.true;
    expect(checkbox.isSelected()).to.be.false;
    expect(checkbox.isDisplayed()).to.be.true;

    console.log("Is existing: " + checkbox.isExisting());
    console.log("Is selected: " + checkbox.isSelected());
    console.log("Is displayed: " + checkbox.isDisplayed());
  });
});
