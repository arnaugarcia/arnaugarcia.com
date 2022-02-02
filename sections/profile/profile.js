import Image from 'next/image'
import Social from "./social";
import Skill from "./skill";

export default function Profile() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="m-title c-align">
                    <h2>ARNAU GARCÍA GALLEGO</h2>
                    <h6>WEB DEVELOPER | FULL-STACK DEVELOPER | CROSS-PLATFORM DEVELOPER</h6>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <p>
                    <Image src={"/assets/images/arnaugarcia.png"} height={380} width={350}/>
                </p>
            </div>
            <div className="col-md-4">
                <h5>ABOUT ME</h5>
                <p>I am a programmer with the goal to improve myself and provide new things to the world. My curiosity and passion about computing and programming began when I was very little and it's still increasing, day by day, without losing desire to learn more and improve myself.</p>
                <p>Currently I'm developing some personal projects, working as a full-stack developer, coursing a university degree and helping as a teacher in the university.</p>
                <h3 className="h4">WHERE CAN YOU FIND ME?</h3>
                <Social/>
            </div>
            <div className="col-md-4 skills">
                <h5>SKILLS</h5>
                <Skill label={'Java / Lambdas / Reactive Programming'} value={95}/>
                <Skill label={'Spring / Spring Cloud / Spring Security'} value={95}/>
                <Skill label={'TDD / Junit / Jest'} value={85}/>
                <Skill label={'Angular / Javascript / ES6 / Typescript'} value={90}/>
                <Skill label={'Java Microservices / Netflix OSS / SSO'} value={90}/>
            </div>
        </div>
    </div>);
}
