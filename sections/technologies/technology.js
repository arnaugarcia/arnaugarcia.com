export default function Technology({image, description}) {
    return (
        <div className="client">
            <img src={image} alt={description}/>
        </div>
    )
}
