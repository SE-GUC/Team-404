const funcs = require("./users.functions");

test("create User", async () => {
  const response = await funcs.createUser();
  console.log(response);
  expect(response).toEqual(response);
});

