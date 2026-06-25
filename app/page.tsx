import AboutMe from './projects/_components/AboutMe';
import Banner from './projects/_components/Banner';
import Experiences from './projects/_components/Experiences';
import Skills from './projects/_components/Skills';
import ProjectList from './projects/_components/ProjectList';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <ProjectList />
        </div>
    );
}
