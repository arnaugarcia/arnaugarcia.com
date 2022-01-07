import {useEffect, useRef} from "react";
import TypedT from 'typed.js';

export default function Typed() {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new TypedT(el.current, {
            strings: ["A creative web Developer... ", "Micro-services developer" , "Spring developer", "Angular developer", "JHipster enthusiast", "Coffee lover"],
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: true,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            {/* Element to display typing strings */}
            <span ref={el}/>
        </div>
    );

}
