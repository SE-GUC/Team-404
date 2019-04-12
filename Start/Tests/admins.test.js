const Admin = require('../../Models/Admin')
const admins = require('./api/admins');
let newAdmin;


test('create a new admin', async () => {
    const newAdmin = await admins.post();
    expect(newAdmin.name).toBe('name');
    newAdmin = newAdmin;
})


 test('get all admins', async () => {
    const adm = await admins.get();
    expect(Array.isArray(adm)).toBe(true);
});

test('get a specific admin', async (id) => {
    const id = newAdmin.id
    const _admin = await admins.get(id);
    expect(_admin.id).toBe(newAdmin.id);
});


test('update a specific admin', async (id) => {
    const id = newAdmin.id
    const _admin = await admins.put(id);
    expect(_admin.name).toBe('updated name');
});

test('delete a specific admin', async (id) => {
    const id = newAdmin.id
    const message = await admins.delete(id);
    expect(message).toBe('Admin was deleted successfully');
});