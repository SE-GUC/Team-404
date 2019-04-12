const Request = require('../../Models/Request')
const requests = require('./api/requests');
let newRequest = new Request;


test('create a new request', async () => {
    const newRequest = await requests.post();
    expect(newRequest.location).toBe('location');
    newRequest = newRequest;
})


 test('get all requests', async () => {
    const rqu = await requests.get();
    expect(Array.isArray(rqu)).toBe(true);
});

test('get a specific newRequest', async (id) => {
    const id = newRequest.id
    const _request = await requests.get(id);
    expect(_request.id).toBe(newRequest.id);
});


test('delete a specific newRequest', async (id) => {
    const id = newRequest.id
    const message = await requests.delete(id);
    expect(message).toBe('Request was deleted successfully');
});