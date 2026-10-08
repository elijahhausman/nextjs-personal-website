interface SeperatorProps {
  className?: string;
  x?: number;
  y?: number;
  color?: string;
}

export function Seperator({
  className = "",
  x = 40,
  y = 16,
  color = "%233f3f46",
}: SeperatorProps) {
  const svg = `%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${x} ${y}'%3E%3Cpath d='M0 ${y / 2} Q ${x / 4} 0, ${x / 2} ${y / 2} T ${x} ${y / 2}' fill='none' stroke='${color}' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E`;

  return (
    <div
      className={`w-full opacity-40 ${className}`}
      style={{
        height: `${y}px`,
        backgroundImage: `url("data:image/svg+xml,${svg}")`,
        backgroundRepeat: "repeat-x",
        backgroundSize: `${x / 1}px ${y / 1}px`,
      }}
    />
  );
}
