type LogoProps = {
  size?: number;
  className?: string;
  variant?: "default" | "onDark";
};

export default function Logo({
  size = 32,
  className = "",
  variant = "default",
}: LogoProps) {
  const bg = variant === "onDark" ? "#FAFAF7" : "#0E6B55";
  const brackets = variant === "onDark" ? "#0A4A3B" : "#FAFAF7";
  const dot = "#D9622B";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill={bg} />
      <path
        d="M13.5 14.5L8 20l5.5 5.5"
        stroke={brackets}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.5 14.5L32 20l-5.5 5.5"
        stroke={brackets}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="2.6" fill={dot} />
    </svg>
  );
}
