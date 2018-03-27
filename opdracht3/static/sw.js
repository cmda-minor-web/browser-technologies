self.addEventListener('push', function(event) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
    }

    var data = {};
    if (event.data) {
        data = event.data.json();
    }
    var title = data.title;
    var message = data.message;
    var icon = "img/FM_logo_2013.png";

    self.clickTarget = data.clickTarget;

    event.waitUntil(self.registration.showNotification(title, {
        body: message,
        tag: 'push-demo',
        icon: icon,
        badge: icon
    }));
});
