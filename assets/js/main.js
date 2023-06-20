let maxHeight = document.querySelector(".answer");

document.querySelector(".accordion-link").addEventListener("click", function() {
    if (maxHeight.style.maxHeight === '20rem') {
        maxHeight.style.maxHeight = '0';
        document.querySelector('.fa-plus').style.display = 'block';
        document.querySelector('.fa-minus').style.display = 'none';
    } else {
        maxHeight.style.maxHeight = '20rem';
        document.querySelector('.fa-plus').style.display = 'none';
        document.querySelector('.fa-minus').style.display = 'block';
    }
});

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner')

	// Banner.
    var $banner = $('#banner');

    (function() {

        // Settings.
            var settings = {

                // Images (in the format of 'url': 'alignment').
                    images: {
                        'images/longhorn.jpg': 'center',
                        'images/bluebonnets.jpg': 'center',
                        'images/theatre.jpg': 'center right',
                        'images/cactus.jpg': 'center right'
                    },

                // Delay.
                    delay: 6000

            };

        // Vars.
            var	pos = 0, lastPos = 0,
                $wrapper, $bgs = [], $bg,
                k, v;

        // Create BG wrapper, BGs.
            $wrapper = $('<div class="bg" />')
                .appendTo($banner);

            for (k in settings.images) {

                // Create BG.
                    $bg = $('<div />');
                        $bg.css('background-image', 'url("' + k + '")');
                        $bg.css('background-position', settings.images[k]);
                        $bg.appendTo($wrapper);

                // Add it to array.
                    $bgs.push($bg);

            }

        // Main loop.
            $bgs[pos].addClass('visible');
            $bgs[pos].addClass('top');

            // Bail if we only have a single BG or the client doesn't support transitions.
                if ($bgs.length == 1)
                    return;

            setInterval(function() {

                lastPos = pos;
                pos++;

                // Wrap to beginning if necessary.
                    if (pos >= $bgs.length)
                        pos = 0;

                // Swap top images.
                    $bgs[lastPos].removeClass('top');
                    $bgs[pos].addClass('visible');
                    $bgs[pos].addClass('top');

                // Hide last image after a short delay.
                    setTimeout(function() {
                        $bgs[lastPos].removeClass('visible');
                    }, settings.delay / 2);

            }, settings.delay);

    })();

	

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'center',
			hideDelay: 400
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
			});

		}

	// Off-Canvas Navigation.

		// Navigation Panel Toggle.
			$('<a href="#navPanel" class="navPanelToggle"></a>')
				.appendTo($header);

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

    // Scrolly.
		$('.scrolly').scrolly();

    // Fade in.
		$('.fadeIn').scrollex({
			top:		'30vh',
			bottom:		'30vh',
			delay:		20,
			initialize:	function() {
				$(this).addClass('is-inactive');
			},
			terminate:	function() {
				$(this).removeClass('is-inactive');
			},
			enter:		function() {
				$(this).removeClass('is-inactive');
			}
		});
    // Fade in from left.
		$('.fadeInLeft').scrollex({
			top:		'30vh',
			bottom:		'30vh',
			delay:		20,
			initialize:	function() {
				$(this).addClass('is-inactive-left');
			},
			terminate:	function() {
				$(this).removeClass('is-inactive-left');
			},
			enter:		function() {
				$(this).removeClass('is-inactive-left');
			}
		});
    // Fade in from bottom.
		$('.fadeInBot').scrollex({
			top:		'20vh',
			bottom:		'20vh',
			delay:		25,
			initialize:	function() {
				$(this).addClass('is-inactive-bottom');
			},
			terminate:	function() {
				$(this).removeClass('is-inactive-bottom');
			},
			enter:		function() {
				$(this).removeClass('is-inactive-bottom');
			}
		});
    // Fade in without transform.
		$('.fadeInOnly').scrollex({
			top:		'15vh',
			bottom:		'15vh',
			delay:		40,
			initialize:	function() {
				$(this).addClass('is-inactive-passive');
			},
			terminate:	function() {
				$(this).removeClass('is-inactive-passive');
			},
			enter:		function() {
				$(this).removeClass('is-inactive-passive');
			}
		});

})(jQuery);