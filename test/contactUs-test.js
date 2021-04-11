var config = require("../config/main-config");
var dataGenerators = require("../utils/dataGenerators");
import ContactUs_PO from "../page-objects/ContactUs_PO";

describe("Test contact us page", () => {
  beforeEach(function () {
    ContactUs_PO.open();
  });

  it("Submit all information via the contact us page", () => {
    ContactUs_PO.firstName.setValue(config.firstName);
    ContactUs_PO.lastName.setValue(config.lastName);
    ContactUs_PO.emailAddress.setValue(
      dataGenerators.generateRandomEmailAddress()
    );
    ContactUs_PO.comments.setValue(dataGenerators.generateRandomString());
    ContactUs_PO.submit();

    expect(ContactUs_PO.successfulContactHeader.getText()).to.contains(
      "Thank You for your Message!"
    );
  });
});