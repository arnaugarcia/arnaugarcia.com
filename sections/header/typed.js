import {useEffect, useRef} from "react";
import TypedT from 'typed.js';
import {useTranslation} from "next-i18next";

export default function Typed() {

    const {t, i18n} = useTranslation('common');

    const element = useRef(null);

    useEffect(() => {
        const typed = new TypedT(element.current, {
            strings: t('INTRO.SUBTITLE').split('|'),
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: true,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, [i18n.language]);

    return (<span ref={element}/>);

}
