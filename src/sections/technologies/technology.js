import Image from 'next/image'

export default function Technology({image, description}) {
    return (
        <div className="client">
            <Image src={image} alt={description} height={100} width={300}/>
        </div>
    )
}
