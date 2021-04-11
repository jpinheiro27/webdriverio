describe("Switch Windows Test", () => {
  beforeEach(function () {
    browser.setWindowSize(1800, 1200);
    browser.url("./");
  });

  it("Switch to the contact us page", () => {
    const clickById = $("#contact-us");
    clickById.click();

    console.log("Homepage Header " + browser.getTitle());
    browser.pause(2000);

    browser.switchWindow("WebDriver | Contact Us");
    console.log("Contact Us Header " + browser.getTitle());
  });
});
