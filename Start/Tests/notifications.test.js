const funcs = require('./notifications.functions');
let notification;

test('Create notification', async () => {
    const notification = await funcs.createFeedback();
    
    expect(notification.text).toBe('Testing Creation');
    expect(notification.recipient).toBe('Testing Creation');
    expect(notification.recipientType).toBe('Testing Creation');
    expect(notification.trigger).toBe('Testing Creation');
    notification = notification;
})

test('Get notifications', async () => {
    const notifications = await funcs.getNotifications();
    expect(Array.isArray(notifications)).toBe(true);
});

test('Get notification by id', async () => {
    const notification = await funcs.getNotifications(notification.id);
    expect(notification.id).toBe(notification.id);
});

test('Delete notification by id', async () => {
    const message = await funcs.deleteNotifications(notification.id);
    expect(message).toBe('Notification Deleted');
});

