import Milestone from "./milestone";

export default function Summary() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="m-title c-align">
                        <h2>SUMMARY</h2>
                        <h6>EDUCATION AND EXPERIENCE</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className="timeline">
                        <Milestone title={'ASSISTANT TEACHER AT LA SALLE'}
                                   place={'LA SALLE BARCELONA'}
                                   date={'2019 - NOW'}
                                   image={'https://arnaugarcia.com/assets/images/resume/teacher.png'}
                                   description={'Together with Alfredo Rueda we develop and present the backend used for developing the final project of the Android development subject.'}/>
                        <Milestone title={'ASSISTANT TEACHER AT LA SALLE'}
                                   place={'LA SALLE BARCELONA'}
                                   date={'2019 - NOW'}
                                   image={'https://arnaugarcia.com/assets/images/resume/teacher.png'}
                                   description={'Together with Alfredo Rueda we develop and present the backend used for developing the final project of the Android development subject.'}/>
                    </ul>
                    <div className="text-center">
                        <a className="btn btn-lg btn-gray" href="assets/resume/CV_ArnauGarcia_rev3.pdf">
                            <span>DOWNLOAD CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
