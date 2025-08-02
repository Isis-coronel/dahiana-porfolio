import Section from '../components/Section';
import Signpost from '../components/Signpost';

export default function Projects() {
  return (
    <Section id="projects">
      <Signpost to="experience" label="Projects" />
      <h1 className="text-4xl font-bold mt-4">Projects</h1>
      <ul className="space-y-6 lg:pl-[35vw]">
        <li>
          <h3 className="text-2xl font-semibold">Sexy Comedy Madrid</h3>
          <p className="text-base">
            Branding, Meta Ads y gestión de eventos stand-up en inglés.
          </p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold">Abuela Mía Coffee &amp; Sweets</h3>
          <p className="text-base">
            Identidad visual y campañas en Instagram + Google Business.
          </p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold">Scan-&amp;-Pay WebApp</h3>
          <p className="text-base">
            Dev Angular + UX para pagos en mesa (Paycui).
          </p>
        </li>
      </ul>
    </Section>
  );
}