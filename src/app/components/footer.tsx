import { AirOpsLogo } from "./airops-logo";

export function Footer() {
  return (
    <footer
      className="border-t px-6 py-12"
      style={{
        borderColor: "rgba(0, 41, 16, 0.1)",
        backgroundColor: "#F8FFFB",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2 text-[#002910]">
          <AirOpsLogo className="h-5 w-auto" />
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: "Product", href: "https://www.airops.com" },
            { label: "Docs", href: "https://docs.airops.com" },
            { label: "Blog", href: "https://www.airops.com/blog" },
            { label: "Pricing", href: "https://www.airops.com/pricing" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#002910]/55 no-underline transition-colors hover:text-[#002910]"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <p
          className="text-[#002910]/35"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
        >
          &copy; 2026 AirOps, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}