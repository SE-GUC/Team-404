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
test('get all partners', async () => {
    const partners = await funcs.getPartners()
    expect(partners).not.toBeNull()
    }
)    
test('get all candidates', async () => {
    const candidates = await funcs.getCandidates()
    expect(candidates).not.toBeNull()
    }
)
test('get all consultants', async () => {
    const consultants = await funcs.getConsultants()
    expect(consultants).not.toBeNull()
    }
)