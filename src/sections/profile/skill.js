import {useCallback, useState} from "react";

export default function Skill({label, value = 0, initialValue = 0, steps = 5}) {

    const [progress, setProgress] = useState(initialValue);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setProgress(value);
        } else {
            setProgress(0);
        }
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }

    const skill = useCallback((node) => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (node) observer.observe(node);

        return () => observer.unobserve(node);
    }, [])

    return (
        <div className="progress-item" ref={skill}>
            <div className="progress-title">{label}</div>
            <div className="progress">
                <div className="progress-bar progress-bar-brand" style={{width: `${progress}%`}}/>
            </div>
        </div>)
}
