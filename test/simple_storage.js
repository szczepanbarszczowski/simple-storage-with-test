const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", function (accounts) {
  describe("Initial deployment", async () => {
    it("should assert true", async function () {
      await SimpleStorage.deployed();
      return assert.isTrue(true);
    });

    it("was deployed and it's initial value is 0", async () => {
      // get subject
      const ssInstance = await SimpleStorage.deployed();
      // verify if starts with zero;
      const storedData = await ssInstance.getStoredData.call();
      assert.equal(storedData, 0, 'Initial state should be 0');
    })
  })

  describe("Functionality", () => {
    it("should store the value 42", async () => {
      // get subject
      const ssInstance = await SimpleStorage.deployed();

      // change the subject
      await ssInstance.setStoredData(42, { from: accounts[0] });

      // verify we changed the subject
      const storedData = await ssInstance.getStoredData.call();
      assert.equal(storedData, 42, `${storedData} was not stored!`);
    })
  })
});
