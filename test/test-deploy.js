const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect, assert } = require("chai");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  let simpleStorageFactory, simpleStorage;
  beforeEach(async () => {
    simpleStorageFactory =  await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();

  })

  it("It should start with a fav. num of 0 ", async () => {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("It should update when we call store ", async () => {
    const transactionResponse = await simpleStorage.store(7);
    await transactionResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    const expectedValue = "7";
    assert.equal(updatedValue.toString(), expectedValue);
  });

});
