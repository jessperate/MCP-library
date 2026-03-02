export function AirOpsLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AirOps"
    >
      <text
        x="0"
        y="21"
        fill="currentColor"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "22px",
          letterSpacing: "-0.02em",
        }}
      >
        AirOps
      </text>
    </svg>
  );
}
