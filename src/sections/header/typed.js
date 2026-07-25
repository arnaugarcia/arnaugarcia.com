import {useEffect, useRef} from "react";
import TypedT from 'typed.js';
import {useTranslation} from "i18next-ssg";
import {typedConstants} from "./typed.constants";

export default function Typed() {
    const {t, i18n, ready} = useTranslation('common');
    const element = useRef(null);

    useEffect(() => {
        if (!ready || !element.current) return;

        const subtitle = t('INTRO.SUBTITLE');
        const strings = (typeof subtitle === 'string' ? subtitle : '')
            .split('|')
            .map((s) => s.trim())
            .filter(Boolean);

        if (!strings.length) return;

        const typed = new TypedT(element.current, {
            strings,
            ...typedConstants
        });

        return () => {
            typed.destroy();
        };
    }, [ready, t, i18n.language]);

    return (<span ref={element}/>);
}
