/**
 * when the DOM is ready to be manipulated
 */
$(document).ready(function() {
    $().crxwebclipper();

    // Create a simple text notification:
    //var notification = webkitNotifications.createNotification(
    //    'ajax-loader.gif',  // icon url - can be relative
    //    'Hello!',  // notification title
    //    'Lorem ipsum...'  // notification body text
    //);
    // Or create an HTML notification:
    /*
    if ('undefined' == typeof notification) {
        notification = webkitNotifications.createHTMLNotification(
            'notification.html'  // html url - can be relative
        );
    }
    // Then show the notification.
    notification.show();
    */

    $('a.external').click(function() {

        console.log(this);
        console.log(this.href);

        chrome.tabs.query({
                'url' : this.href
            },
            function(tabCollection) {
                $().crxwebclipper('log', tabCollection);
            }
        );
        return false;

        if ('undefined' != typeof(settings.tabs.option)) {
            chrome.tabs.highlight({
                'id': settings.tabs.option.getTab().id,
                'windowId': settings.tabs.option.getTab().windowId
            });
        } else {
            chrome.tabs.create({
                'url': this.href,
                'pinned': false
            },
            function(tab) {
                settings.tabs.options = tab;

                localStorage.setItem('.tabs.option', tab);
                console.log(settings.tabs.options);
            });
        }

        return false;
    });
});

