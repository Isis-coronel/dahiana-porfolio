import { Link } from 'react-scroll';

interface SignProps {
  to: string;
  label: string;
}

export default function Signpost({ to, label }: SignProps) {
  return (
    <Link
      to={to}
      smooth={true}
      offset={-100}
      duration={500}
      className="group cursor-pointer"
    >
      <div className="relative">
        {/* poste */}
        <span className="block w-1 h-24 bg-[#b48a5d] mx-auto"></span>
        {/* cartel */}
        <div
          className="absolute -top-8 left-1/2 -translate-x-1/2
                     bg-[#d5a679] text-white px-6 py-2 rounded-md
                     shadow-md group-hover:bg-[#c69464] transition">
          {label}
        </div>
      </div>
    </Link>
  );
}

