import { Link } from "react-router";

// AirOps wordmark vector paths (from Figma)
const LOGO_PATHS = {
  // a
  a: "M14.2683 8.35377V11.2588C12.9587 9.16447 10.9253 7.88086 8.40935 7.88086C3.03288 7.88086 0 11.833 0 17.1364C0 22.4735 3.06735 26.5608 8.47828 26.5608C10.9942 26.5608 12.9931 25.2772 14.2683 23.1829V26.0879H18.473V8.35377H14.2683ZM9.30543 23.0478C6.23809 23.0478 4.48039 20.2441 4.48039 17.1364C4.48039 14.0963 6.20362 11.4277 9.37436 11.4277C11.9937 11.4277 14.2339 13.2856 14.2339 17.0688C14.2339 20.7846 12.0971 23.0478 9.30543 23.0478Z",
  // i bar
  iBar: "M22.0938 8.35547V26.0896H26.5741V8.35547H22.0938Z",
  // i dot
  iDot: "M24.4093 6.19288C22.5697 6.19288 21.25 4.89943 21.25 3.13563C21.25 1.37184 22.5697 0 24.4093 0C26.1688 0 27.5685 1.37184 27.5685 3.13563C27.5685 4.89943 26.1688 6.19288 24.4093 6.19288Z",
  // r
  r: "M34.832 12.7461V8.3548H30.3516V26.0889H34.832V15.9551C34.832 13.3541 36.6586 12.307 38.3818 12.307C39.3813 12.307 40.4152 12.5772 40.9666 12.7799V8.05078C38.0372 8.05078 35.6246 9.77353 34.832 12.7461Z",
  // O
  O: "M42.0625 13.7594C42.0625 19.2655 45.9225 23.1839 51.4713 23.1839C57.0546 23.1839 60.8804 19.2655 60.8804 13.7594C60.8804 8.35475 57.0546 4.50391 51.4713 4.50391C45.9225 4.50391 42.0625 8.35475 42.0625 13.7594ZM56.3998 13.7594C56.3998 17.2049 54.5042 19.6708 51.4713 19.6708C48.404 19.6708 46.5429 17.2049 46.5429 13.7594C46.5429 10.4491 48.404 8.05073 51.4713 8.05073C54.5042 8.05073 56.3998 10.4491 56.3998 13.7594Z",
  // p
  p: "M73.3738 7.88086C70.7545 7.88086 68.6177 9.40093 67.4804 11.833V8.35377H63V31.9993H67.4804V22.9127C68.7556 25.1083 71.1336 26.5608 73.6496 26.5608C78.5435 26.5608 81.9555 22.8113 81.9555 17.4404C81.9555 11.7993 78.4057 7.88086 73.3738 7.88086ZM72.5811 23.2505C69.5827 23.2505 67.4804 20.7846 67.4804 17.2715C67.4804 13.6571 69.5827 11.1237 72.5811 11.1237C75.4417 11.1237 77.4751 13.7247 77.4751 17.4066C77.4751 20.8521 75.4417 23.2505 72.5811 23.2505Z",
  // s
  s: "M83.3906 19.9401C83.3906 23.1491 86.2856 26.5608 92.0757 26.5608C97.9002 26.5608 100.003 23.2167 100.003 20.6157C100.003 16.6297 95.212 15.9203 92.0068 15.3123C89.8355 14.9407 88.4569 14.6367 88.4569 13.4207C88.4569 12.0357 90.0078 11.1575 91.6621 11.1575C93.9023 11.1575 94.7639 12.6775 94.8329 14.2989H99.3133C99.3133 11.6641 97.4177 7.88086 91.5587 7.88086C86.4924 7.88086 83.9765 10.6845 83.9765 13.6909C83.9765 17.9809 88.836 18.42 92.0412 19.028C93.9023 19.3658 95.5221 19.7712 95.5221 21.0886C95.5221 22.406 93.9368 23.2842 92.248 23.2842C90.6626 23.2842 87.871 22.406 87.871 19.9401H83.3906Z",
  // arrow →
  arrow: "M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z",
};

function AirOpsWordmark() {
  return (
    <svg
      width="101"
      height="32"
      viewBox="0 0 100.003 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="airOps"
    >
      <path d={LOGO_PATHS.a} fill="#0B0E16" />
      <path d={LOGO_PATHS.iBar} fill="#0B0E16" />
      <path d={LOGO_PATHS.iDot} fill="#0B0E16" />
      <path d={LOGO_PATHS.r} fill="#0B0E16" />
      <path d={LOGO_PATHS.O} fill="#0B0E16" />
      <path d={LOGO_PATHS.p} fill="#0B0E16" />
      <path d={LOGO_PATHS.s} fill="#0B0E16" />
    </svg>
  );
}

const navLinks = [
  { label: "Platform", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Pricing", href: "#" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-10 py-5">
      <div
        className="flex w-full items-center justify-between rounded-[100px] px-6 py-3"
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(0, 41, 16, 0.10)",
          boxShadow: "0 2px 20px rgba(0, 41, 16, 0.06)",
        }}
      >
        {/* ── Left: logo + nav links ── */}
        <div className="flex items-center gap-10">
          <Link to="/" className="no-underline">
            <AirOpsWordmark />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="shrink-0 text-[#0b0e16]/75 no-underline transition-colors hover:text-[#0b0e16]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* ── Right: action buttons ── */}
        <div className="flex items-center gap-2">
          {/* Log in — ghost */}
          <a
            href="#"
            className="flex items-center justify-center rounded-full px-4 py-2 text-[#0b0e16] no-underline transition-colors hover:bg-[#002910]/5"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            Log in
          </a>

          {/* Start Free Trial — mint pill */}
          <a
            href="#"
            className="flex items-center justify-center rounded-full px-4 py-2 no-underline transition-all hover:brightness-95"
            style={{
              backgroundColor: "#eef9f3",
              border: "1px solid rgba(0,41,16,0.12)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              color: "#002910",
            }}
          >
            Start Free Trial
          </a>

          {/* Book a Demo — neon green pill with arrow */}
          <a
            href="#"
            className="flex items-center justify-center gap-1.5 rounded-full px-4 py-2 no-underline transition-all hover:brightness-95"
            style={{
              backgroundColor: "#00ff64",
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: "#01200d",
            }}
          >
            Book a Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d={LOGO_PATHS.arrow} fill="#01200D" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
