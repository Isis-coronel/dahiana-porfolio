import Section from '../components/Section';
import Signpost from '../components/Signpost';

export default function About() {
  return (
    <Section id="about">
      <Signpost to="projects" label="Projects" />
      <h1 className="text-4xl font-bold mt-4">Hi! I’m Dahiana 👋</h1>
      <p className="max-w-lg text-lg leading-relaxed mt-2 text-center lg:text-left lg:self-start lg:pl-[35vw]">
        Marketing & Tech specialist fluent in ES, EN, PT. <br />
        Passionate about hospitality, coding and creative growth.
      </p>
    </Section>
  );
}
