export default function Service({title, subtitle, icon}) {
    return (
        <div className="col-md-4">
            <div className="icon-box">
                <div className="icon-box-icon">
                    <span className={`${icon}`}/>
                </div>
                <div className="icon-box-title">
                    <h5>{title}</h5>
                </div>
                <div className="icon-box-content">
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    );
}
