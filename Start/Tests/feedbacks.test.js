const funcs = require('./feedbacks.functions');
let feedback;
test('create new feedback POST & creating new candidate beforehand', async () => {
    const feedback = await funcs.createFeedback();
    expect(feedback.name).toBe('dummydata');
    feedback = feedback;
})

test('get all feedbacks', async () => {
    const feedbacks = await funcs.getFeedbacks();
    expect(Array.isArray(feedbacks)).toBe(true);
});

test('get specific feedback', async () => {
    const _feedback = await funcs.getFeedbacks(feedback.id);
    expect(_feedback.id).toBe(feedback.id);
});


test('update specific feedback', async () => {
    const _feedback = await funcs.updateFeedback(feedback.id);
    expect(_feedback.event).toBe('dummydata');
});

test('delete specific feedback', async () => {
    const message = await funcs.deleteFeedback(feedback.id);
    expect(message).toBe('Feedback was deleted successfully');
});

// test('get specific feedback')