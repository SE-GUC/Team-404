const funcs = require("./users.functions");
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

  test("create User", async () => {
    const response = await funcs.createUser();
    console.log(response);
    expect(response).toEqual(response);
  });
  test('get all users', async () => {
    const users = await funcs.getUsers()
    expect(users).not.toBeNull()
}
)
test("get specific user", async () => {
    const user = await funcs.getSpecificUser()
 expect(user.data.data.name).toBe("x")
}
)
test('delete a specific User', async () => {
  const _user = await funcs.deleteUser();
  expect(_user.data).toEqual("User was deleted successfully");
});
