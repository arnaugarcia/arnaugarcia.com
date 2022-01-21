export default function Milestone({title, place, date, image, description}) {
    return (
        <li>
            <div className="timeline-badge"/>
            <div className="timeline-panel">
                <div className="timeline-preview">
                    <picture>
                        <img src={image} alt={`{${title} - ${description}`}/>
                    </picture>
                </div>
                <div className="timeline-body">
                    <h5 className="timeline-title">{title}</h5>
                    <h6 className="timeline-description">{place} | {date}</h6>
                    <p>{description}</p>
                </div>
            </div>
        </li>
    )
}
