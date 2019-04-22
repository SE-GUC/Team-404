const funcs = require('./tasks.functions');
let tasks;
test('create new task', async () => {
    const response = await funcs.createTask();
    expect(response.data.data.description).toEqual('dummydata1');
});

test('get all tasks', async () => {
    const tasks = await funcs.getTask();
    expect(tasks).not.toBeNull();
});

test('get specific task', async () => {
    const _tasks = await funcs.getSpecificTask();
    expect(_tasks.data.data.description).toBe('ghg');
});


test('update specific task', async () => {
    const _tasks = await funcs.updateTask();
    expect(_tasks.data.data.description).toBe('ghg');
});

test('delete specific tasks', async () => {
    const message = await funcs.deleteTask();
    expect(message.data).toEqual(null);
});

test("view task lifecycle", async () => {
    const _event = await funcs.viewTaskStatus();
    expect(_event.lifeCycleStatus).toBe("denied");
  });