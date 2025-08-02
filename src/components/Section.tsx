interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{ scrollSnapAlign: 'start' }}
    >
      {children}
    </section>
  );
}
