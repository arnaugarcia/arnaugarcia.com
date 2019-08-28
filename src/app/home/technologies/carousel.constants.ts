export class CarouselConstants {
    public static carouselConfig = {
        margin: 25,
        nav: false,
        dots: false,
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
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
