import {useEffect, useRef} from "react";
import TypedT from 'typed.js';
import {useTranslation} from "i18next-ssg";
import {typedConstants} from "./typed.constants";

export default function Typed() {

    const {t, i18n} = useTranslation('common');

    const element = useRef(null);

    useEffect(() => {
        const typed = new TypedT(element.current, {
            strings: t('INTRO.SUBTITLE').split('|'),
            ...typedConstants
        });

        return () => {
            typed.destroy();
        };
    }, [i18n.language]);

    return (<span ref={element}/>);

}
