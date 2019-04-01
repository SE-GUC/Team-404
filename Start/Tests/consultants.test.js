const jest = require("jest")
const consultant = require("../Routes/api/consultants")
const funcs = require('../Tests/consultants.func');
let consultant;

test('create new consultant POST', async () => {
    const consultant = await funcs.createConsultant();
    expect(consultant.name).toBe('test');
    consultant = consultant;
})

test('get all consultants', async () => {
    const consultants = await funcs.getConsultants();
    expect(Array.isArray(consultants)).toBe(true);
});

test('get specific consultant', async () => {
    const _consultant = await funcs.getConsultantsByID(id);
    expect(_consultant.id).toBe(consultant.id);
});

test('update specific consultant', async () => {
    const _consultant = await funcs.updateConsultant(consultant.id);
    expect(_consultant.event).toBe('ay haga');
});

test('delete specific consultant', async () => {
    const message = await funcs.deleteConsultant(consultant.id);
    expect(message).toBe('consultant was deleted successfully');
});


