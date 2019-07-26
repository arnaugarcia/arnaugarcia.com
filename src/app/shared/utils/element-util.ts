export class ElementUtil {

    static isScrolledIntoView(element): boolean {
        const rect = element.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        // Only completely visible elements return true:
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;

        return (elemTop >= 0) && (elemBottom <= window.innerHeight);
    }

}
