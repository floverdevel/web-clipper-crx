(function( $ ) {

    // Create some defaults, extending them with any options that were provided
    var settings;

    var methods = {

        // initialisation
        'init' : function(options) {

            var $this = $(this);
            settings = $.extend({
                'ellis' : 'rules the world',
                'app' : chrome.app.getDetails(),
                'localStorage' : {
                    'namespace' : 'crx_web_clipper.',
                },
                'ui' : {
                    'loading' : $('.loading'),
                },
                'tabs': {
                    'options': {
                        'getTab' : function() {
                            return localStorage.getItem(settings.localStorage.namespace + 'tabs.option');
                        }
                    },
                    'about' : {
                    }
                }
            }, options);

        },

        'clip' : function() {
            methods.log('clip invoked');

            // todo ...
        },

        'loadConfigFromLocalStorage' : function() {
            methods.log('loadConfigFromLocalStorage invoked');

        },

        'about' : function() {
            methods.console.log('clip invoked');

            $('h1').hide().html(settings.app.description).fadeIn(1500);
            $('h2').hide().html(settings.app.name).fadeIn(2000);
            $('h3').hide().html(settings.app.version).fadeIn(3000);

        },

        'console' : {
            'log' : function(msg) {
                settings.console.log(msg);
            }
        },

        'loading' : {
            'begin' : function () {
                settings.ui.loading.show();
            },

            'end' : function () {
                settings.ui.loading.end();
            }
        }

    };

    $.fn.crxwebclipper = function(method) {

        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  method + ' does not exist on jQuery.crxwebclipper');
        }
    };

})( jQuery );
