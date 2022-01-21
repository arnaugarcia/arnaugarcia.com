import Project from "./project";

export default function Projects() {

    const totalProjects = 3;

    return (<div className="container">
        <div className={`row blog-grid`} style={{marginTop: '-200px'}}>
            <Project
                key={1}
                title={'CONNECTED CAR | IOT'}
                description={'Using Spring Flow, Web Flux and Angular I\'ve started a new project that have the aim to make almost any car a connected car using the OBD2 port. The project consist in a IOT platform developed using spring that generates an RESTAFUL API that can be used in any application like (Android, iOS, Web applications...).'}
                tags={['IOT', 'CONNECTED CAR', 'JAVA']}
                link={'#'}
                image={'https://arnaugarcia.com/assets/images/projects/iot_car.png'}
            />
            <Project
                key={2}
                title={'CONNECTED CAR | IOT'}
                description={'Using Spring Flow, Web Flux and Angular I\'ve started a new project that have the aim to make almost any car a connected car using the OBD2 port. The project consist in a IOT platform developed using spring that generates an RESTAFUL API that can be used in any application like (Android, iOS, Web applications...).'}
                tags={['IOT', 'CONNECTED CAR', 'JAVA']}
                link={'#'}
                image={'https://arnaugarcia.com/assets/images/projects/iot_car.png'}
            />
        </div>
        {(totalProjects > 3) ?
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <div className="spacer m-b-30"></div>
                        <a className="btn btn-brand"><span>Show more projects</span></a>
                    </div>
                </div>
            </div> : ''
        }
    </div>);
}
