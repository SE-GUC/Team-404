
// temporary data created as if it was pulled out of the database ...
const notifications = [
    new Notification('5', 'Ismail Aboulela', 'Hagar Abdelnabi', '1:00', 'accept/reject', 'hello'),
    new Notification('6', 'Gomana El-Shimy', 'Hagar Abdelnabi', '1:01', 'normal', 'hi'),
    new Notification('8', 'Islam Sanad', 'Karim El-Mahdy', '1:02', 'normal', 'hey'),
    new Notification('9', 'Ismail Aboulela', 'Lobna El-Badrawy', '1:03', 'accept/reject', 'hola')
];

router.get('/', (req, res) => res.json({ data: notifications }))

module.exports = router
