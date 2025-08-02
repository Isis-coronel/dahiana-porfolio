// Contact.tsx
import Section from '../components/Section';
import Signpost from '../components/Signpost';

export default function Contact() {
  return (
    <Section id="contact">
      <Signpost to="about" label="Contact Me" />
      <h1 className="text-4xl font-bold mt-4">Contact Me</h1>
      <div className="flex flex-col items-center gap-3 lg:pl-[35vw]">
        <a
          href="mailto:d.coronelnyc@gmail.com"
          className="text-xl underline"
        >
          d.coronelnyc@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/dahianacoronel/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl underline text-blue-600"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
