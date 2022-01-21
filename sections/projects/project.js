export default function Project({title, description, image, link, tags = []}) {

    function setSeparatorIfNotTheLast(index) {
        return <> {index + 1 < tags.length ? '| ' : ''}</>;
    }

    return (<div className="col-md-4 post-item">
        <article className="post">
            <div className="post-preview">
                <a href={link}>
                    <img src={image} alt={description}/>
                </a>
                <div className="post-category">
                    {tags.map((tag, index) => <a href={link} key={index}>{tag} {setSeparatorIfNotTheLast(index)}</a>)}
                </div>
            </div>
            <div className="post-wrapper">
                <div className="post-header">
                    <h2 className="post-title">
                        <a href={link}>{title}</a>
                    </h2>
                </div>
                <div className="post-content">
                    <p>{description}</p>
                </div>
            </div>
        </article>
    </div>)
}
