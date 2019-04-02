const funcs = require('./tasks.functions');
let tasks;
test('create new task', async () => {
    const tasks = await funcs.createTask();
    expect(tasks.eta).toBe('dummydata2');
    tasks = tasks;
})

test('get all tasks', async () => {
    const tasks = await funcs.getTask();
    expect(Array.isArray(tasks)).toBe(true);
});

test('get specific task', async () => {
    const _tasks = await funcs.getTask(tasks.id);
    expect(_tasks.id).toBe(tasks.id);
});


test('update specific task', async () => {
    const _tasks = await funcs.updateTask(tasks.id);
    expect(_tasks.skills).toBe('dummydata6');
});

test('delete specific tasks', async () => {
    const message = await funcs.deleteTask(tasks.id);
    expect(message).toBe('Task was deleted successfully');
});