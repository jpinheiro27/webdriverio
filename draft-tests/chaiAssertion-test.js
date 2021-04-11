describe("Chai assertions", () => {
    beforeEach(function () {
      browser.setWindowSize(1800, 1200);
      browser.url("./");
    });
  
    it("Test webdriveruni login portal", () => {
      const clickLoginPortal = $("#login-portal");
      clickLoginPortal.click();

      browser.switchWindow("WebDriver | Login Portal");

      const loginPageTitle = browser.getTitle();
      const loginPageURL = browser.getUrl();
    
      expect(loginPageTitle).to.contains('Login Portal');
      expect(loginPageURL).to.contains('Login-Portal');
    });
  });