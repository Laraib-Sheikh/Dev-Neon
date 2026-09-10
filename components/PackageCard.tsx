import Link from "next/link";

type Package = {
  name: string;
  price: string;
  description: string;
  items: string[];
  featured?: boolean;
};

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`card-interactive rounded-xl p-8 border flex flex-col h-full ${
        pkg.featured
          ? "border-green bg-green-soft shadow-lift"
          : "hairline bg-white hover:border-green"
      }`}
    >
      <h3 className="font-display text-lg font-semibold mb-1.5">{pkg.name}</h3>
      <p className="text-sm text-soft mb-5">{pkg.description}</p>
      <p className="font-display text-2xl font-semibold mb-6">{pkg.price}</p>
      <ul className="space-y-2.5 mb-8 flex-1">
        {pkg.items.map((item) => (
          <li key={item} className="text-sm text-ink/85 flex gap-2.5">
            <span className="text-green mt-0.5">＋</span>
            {item}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`text-center text-sm font-medium px-5 py-2.5 rounded-md transition-colors ${
          pkg.featured
            ? "bg-green text-paper hover:bg-green-deep"
            : "border hairline hover:border-green hover:text-green"
        }`}
      >
        Start with {pkg.name}
      </Link>
    </div>
  );
}
