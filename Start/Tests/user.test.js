const funcs = require("./user.functions");
const axios = require("axios");
let _user;
let user;

test("update specific user", async () => {
    const _user = await funcs.updateUser();
    expect(_user.data.data.name).toEqual("x");
  });
  module.exports = {
    testEnvironment: 'node'
  };