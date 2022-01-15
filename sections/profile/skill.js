import {useEffect, useRef, useState} from "react";

export default function Skill({label, value = 0, initialValue = 0, steps = 5}) {

    const [progress, setProgress] = useState(initialValue)
    const containerRef = useRef(null);

    const callbackFunction = () => {
        if (progress < value) {
            setProgress(progress + steps );
        }
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            observer.unobserve(containerRef.current);
        }
    }, [containerRef, options])

    return (
        <div className="progress-item" ref={containerRef}>
            <div className="progress-title">{label}</div>
            <div className="progress">
                <div className="progress-bar progress-bar-brand" style={{width: progress + '%'}}/>
            </div>
        </div>)
}
