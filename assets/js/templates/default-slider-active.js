(function ($) {
    'use strict';
    
    $('#slidea').slidea({
        autoplay: true,
        layout: "fluid",
        layoutSettings: {
            anchor: 'center',
            size: 'fullscreen'
        },
        contentScaling: {
            enabled: true, // Default: false
            mode: 'responsive', // Modes: responsive, native
            factor: {
                xs: 1,
                sm: 1,
                md: 1,
                lg: 1,
                xlg: 1
            }
        },
        overlap: 0,
        progress: {
            enabled: false
        },
        controls: {
            enabled: true,
            thumbnail: false
        },
        duration: 7000,
        canvas_parallax: true,
        content_parallax: true,
        content_scaling: true,
        slide: {
            '#default_slidea_slide_one': {              
                object: {
                    '#title-one': {
                        start: 1000,
                        initial: "y 30%, opacity 0, duration 500",
                        out: "y 30%, opacity 0, duration 500"
                    },
                    '#description-one': {
                        start: 2000,
                        initial: "y -30%, opacity 0, duration 500",
                        out: "y -30%, opacity 0, duration 500"
                    },
                    '#btn-one': {
                        start: 3000,
                        initial: "y 30%, opacity 0, duration 500",
                        out: "y 30%, opacity 0, duration 500"
                    }
                }
            },
            '#default_slidea_slide_two': {
                object: {
                    '#title-two': {
                        start: 1000,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 500"
                    },
                    '#description-two': {
                        start: 2000,
                        initial: 'opacity 0, y 100%',
                        out: 'opacity 0, y 100%'
                    },
                    '#btn-two': {
                        start: 3000,
                        initial: 'opacity 0, x -50',
                        out: 'opacity 0, x -50'
                    }
                }
            }
        }
    });

})(jQuery);