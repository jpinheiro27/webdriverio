describe("Test contact us logic", () => {
  beforeEach(function () {
    browser.setWindowSize(1800, 1200);
    browser.url("./");
  });

  it("Test the contact us page", () => {
    const contactUsButton = $("#contact-us");
    contactUsButton.click();

    browser.switchWindow("WebDriver | Contact Us");

    const firstNameTextField = $("[name='first_name']");
    firstNameTextField.waitForDisplayed();
    firstNameTextField.addValue('Add your text here');
    browser.pause(5000);
    firstNameTextField.clearValue();
    browser.pause(2000);
    firstNameTextField.setValue('Testtttttttttttttttttttt');
    browser.pause(2000);
  });
});
