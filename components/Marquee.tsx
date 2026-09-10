const regions = [
  "USA",
  "UAE",
  "UK",
  "Saudi Arabia",
  "Canada",
  "Australia",
  "Germany",
  "Netherlands",
  "Pakistan",
];

export default function Marquee() {
  const items = [...regions, ...regions];

  return (
    <div className="border-y hairline bg-panel/60 overflow-hidden">
      <div className="max-w-wrap mx-auto px-6 py-5 flex items-center gap-8">
        <span className="tag-label text-soft shrink-0 hidden sm:block">
          built for teams in
        </span>
        <div className="relative flex-1 overflow-hidden mask-fade-x">
          <div className="flex w-max gap-10 animate-marquee">
            {items.map((r, i) => (
              <span
                key={`${r}-${i}`}
                className="text-sm text-soft whitespace-nowrap"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
