describe("Iframe Test", () => {
    beforeEach(function () {
      browser.setWindowSize(1800, 1200);
      browser.url("/IFrame/index.html");
    });
  
    it("Test the clicking of a given button housed within an IFrame", () => {
      const iframe = $("#frame");
      browser.switchToFrame(iframe);

      const findOutMore_Button = $("//*[text()='Our Products']");
      findOutMore_Button.waitForDisplayed();
      findOutMore_Button.click();
    });
  });
  