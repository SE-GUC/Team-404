const funcs = require("./users.functions");

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
