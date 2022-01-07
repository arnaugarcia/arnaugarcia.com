import styles from './header.module.css'

export default function Header() {
    return (
        <>
            <div id="particles-js"/>
            <div className={styles.text}>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="h1 m-b-15">Arnau Garcia</h1>
                        <h1 className="h5">
                            {/*<app-typed></app-typed>*/}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="mouse-icon">
                <div className="wheel"/>
            </div>
        </>
    )
}
