const funcs = require('./feedbacks.functions');

test('get all feedbacks', async () => {
    const feedbacks = await funcs.getAllFeedbacks();
    expect(Array.isArray(feedbacks)).toBe(true);
});

// test('get specific feedback')