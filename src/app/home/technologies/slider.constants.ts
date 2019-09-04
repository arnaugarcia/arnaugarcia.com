export class SliderConstants {
    public static sliderConfig = {
        container: '.my-slider',
        items: 3,
        slideBy: 'page',
        arrowKeys: true,
        mouseDrag: true,
        controls: false,
        nav: false,
        autoplayButtonOutput: false,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
            1500: {
                items: 3
            }
        }
    };
}
