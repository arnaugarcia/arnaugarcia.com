import Image from 'next/image'

export default function Milestone({title, place, date, image, description}) {
    return (
        <li>
            <div className="timeline-badge"/>
            <div className="timeline-panel">
                <div className="timeline-preview">
                    <Image src={image} alt={description} height={500} width={600}/>
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
