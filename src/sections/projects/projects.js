import Project from "./project";
import {useTranslation} from "i18next-ssg";
import {useEffect, useState} from "react";
import {ProjectsService} from "./projects.service";

export default function Projects() {

    const {t} = useTranslation('common');
    const [projects, setProjects] = useState([]);

    const totalProjects = 3;

    useEffect(() => {
        setProjects(ProjectsService.projects());
    }, []);

    return (<div className="container">
        <div className={`row blog-grid`} style={{marginTop: '-200px'}}>
            {projects.map((project, index) =>
                <Project
                    key={index}
                    title={t(project.title)}
                    description={t(project.description)}
                    tags={project.categories.map((category) => t(category))}
                    link={project.link}
                    image={project.image}
                />)}
        </div>
        {(totalProjects > 3) ?
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <div className="spacer m-b-30"/>
                        <a className="btn btn-brand"><span>{t('PROJECTS.MORE-BUTTON')}</span></a>
                    </div>
                </div>
            </div> : ''
        }
    </div>);
}
