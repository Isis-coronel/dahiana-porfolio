// Experience.tsx
import Section from '../components/Section';
import Signpost from '../components/Signpost';

export default function Experience() {
  return (
    <Section id="experience">
      <Signpost to="contact" label="Experience" />
      <h1 className="text-4xl font-bold mt-4">Experience</h1>
      <div className="flex flex-col gap-8 lg:pl-[35vw]">
        <div>
          <h3 className="font-bold">
            Marketing Manager · Cambalache &amp; Comedy (2023–24)
          </h3>
          <p className="text-sm">
            +25 % engagement · Rebranding 75 % loyalty
          </p>
        </div>
        <div>
          <h3 className="font-bold">IT Specialist · PwC (2021–22)</h3>
          <p className="text-sm">
            Data insights en Risk & Compliance para banca
          </p>
        </div>
        <div>
          <h3 className="font-bold">Front-end Dev · Tictap (2022–23)</h3>
          <p className="text-sm">
            Migración Angular.js → Angular 14 · –60 % bugs
          </p>
        </div>
      </div>
    </Section>
  );
}
