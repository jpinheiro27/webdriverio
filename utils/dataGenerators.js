module.exports = {
  generateRandomEmailAddress: function () {
    //Example: AutoFramework_057865454545656@webdriveruni.com
    let emailAddress =
      "AutoFramework_" +
      Math.random().toString().replace("0.", "") +
      "@webdriveruni.com";
    return emailAddress;
  },

  //Example: d7565466516654asda
  generateRandomString: function () {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  },
};
