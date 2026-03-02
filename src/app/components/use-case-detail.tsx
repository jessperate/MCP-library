import { useParams, Link } from "react-router";
import { useCases } from "../data/use-cases";
import {
  Search,
  BarChart,
  FileText,
  File,
  Bug,
  Layout,
  Users,
  Database,
  Linkedin,
  Cloud,
  Send,
  GitBranch,
  Clipboard,
  Book,
  MessageSquare,
  Activity,
  Bell,
  Megaphone,
  Mail,
  PenTool,
  Share2,
  Headphones,
  MessageCircle,
  TrendingUp,
  PieChart,
  ArrowLeft,
  CheckCircle,
  Layers,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  search: <Search size={15} />,
  "bar-chart": <BarChart size={15} />,
  "file-text": <FileText size={15} />,
  file: <File size={15} />,
  bug: <Bug size={15} />,
  layout: <Layout size={15} />,
  users: <Users size={15} />,
  database: <Database size={15} />,
  linkedin: <Linkedin size={15} />,
  cloud: <Cloud size={15} />,
  send: <Send size={15} />,
  "git-branch": <GitBranch size={15} />,
  clipboard: <Clipboard size={15} />,
  book: <Book size={15} />,
  "message-square": <MessageSquare size={15} />,
  activity: <Activity size={15} />,
  bell: <Bell size={15} />,
  megaphone: <Megaphone size={15} />,
  mail: <Mail size={15} />,
  "pen-tool": <PenTool size={15} />,
  "share-2": <Share2 size={15} />,
  headphones: <Headphones size={15} />,
  "message-circle": <MessageCircle size={15} />,
  "trending-up": <TrendingUp size={15} />,
  "pie-chart": <PieChart size={15} />,
  layers: <Layers size={15} />,
  zap: <Zap size={15} />,
};

const categoryStyles: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  "SEO & Content": { bg: "#FEE7FD", text: "#852952", border: "#D48ED3" },
  "Sales & CRM": { bg: "#EEF9F3", text: "#002910", border: "#057A28" },
  Engineering: { bg: "#F0FF96", text: "#3D4700", border: "#8A9A00" },
  Marketing: { bg: "#FEE7FD", text: "#852952", border: "#D48ED3" },
  Support: { bg: "#CCFFE0", text: "#002910", border: "#057A28" },
  "Data & Analytics": { bg: "#EEF9F3", text: "#002910", border: "#057A28" },
};

export function UseCaseDetail() {
  const { id } = useParams();
  const useCase = useCases.find((uc) => uc.id === id);

  if (!useCase) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1
          className="mb-4 text-[#002910]"
          style={{
            fontFamily: "'Saans', 'DM Serif Display', serif",
            fontSize: "32px",
          }}
        >
          Use case not found
        </h1>
        <Link
          to="/"
          className="text-[#057A28] no-underline transition-colors hover:text-[#002910]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          ← Back to all use cases
        </Link>
      </div>
    );
  }

  const styles =
    categoryStyles[useCase.category] || categoryStyles["Engineering"];
  const relatedUseCases = useCases.filter((uc) =>
    useCase.relatedUseCaseIds.includes(uc.id)
  );

  return (
    <div className="px-6 pt-36 pb-32">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-[#002910]/50 no-underline transition-colors hover:text-[#002910]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          <ArrowLeft size={15} />
          All use cases
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span
            className="mb-4 inline-block rounded-[5px] px-3 py-1"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              backgroundColor: styles.bg,
              color: styles.text,
              border: `1px solid ${styles.border}`,
            }}
          >
            {useCase.category}
          </span>
          <h1
            className="mt-3 text-[#002910]"
            style={{
              fontFamily: "'Saans', 'DM Serif Display', serif",
              fontWeight: 400,
              fontSize: "clamp(30px, 4.5vw, 52px)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
            }}
          >
            {useCase.title}
          </h1>

          {/* Video module */}
          <div
            className="mt-8 w-full overflow-hidden rounded-2xl"
            style={{ border: "1.5px solid rgba(0,41,16,0.1)" }}
          >
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" /* 16:9 */ }}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title={`${useCase.title} — walkthrough`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          {/* ── Main content ───────────────────────────────── */}
          <div>
            {/* Detail description */}
            <p
              className="mb-10 text-[#002910]/75"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "17px",
                lineHeight: 1.85,
              }}
            >
              {useCase.detailDescription}
            </p>

            {/* Example prompts */}
            <section className="mb-10">
              <h2
                className="mb-5 text-[#002910]"
                style={{
                  fontFamily: "'Saans', 'DM Serif Display', serif",
                  fontWeight: 400,
                  fontSize: "22px",
                  letterSpacing: "-0.015em",
                }}
              >
                Example prompts
              </h2>
              <div className="flex flex-col gap-3">
                {useCase.examplePrompts.map((prompt, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 rounded-xl p-4 transition-all duration-200 hover:bg-[#F8FFFB]"
                    style={{
                      backgroundColor: "white",
                      border: "1.5px solid rgba(0,41,16,0.1)",
                    }}
                  >
                    <span
                      className="mt-0.5 shrink-0 rounded-md px-2 py-0.5 text-[#057A28]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        fontWeight: 600,
                        backgroundColor: "#CCFFE0",
                        letterSpacing: "0.04em",
                      }}
                    >
                      #{i + 1}
                    </span>
                    <p
                      className="text-[#002910]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "13px",
                        lineHeight: 1.65,
                      }}
                    >
                      &ldquo;{prompt}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key benefits */}
            <section className="mb-10">
              <h2
                className="mb-5 text-[#002910]"
                style={{
                  fontFamily: "'Saans', 'DM Serif Display', serif",
                  fontWeight: 400,
                  fontSize: "22px",
                  letterSpacing: "-0.015em",
                }}
              >
                Key benefits
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {useCase.keyBenefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl p-4"
                    style={{
                      backgroundColor: "white",
                      border: "1.5px solid rgba(0,41,16,0.08)",
                    }}
                  >
                    <CheckCircle
                      size={16}
                      className="mt-0.5 shrink-0"
                      style={{ color: "#057A28" }}
                    />
                    <p
                      className="text-[#002910]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        lineHeight: 1.55,
                      }}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ── Sidebar ─────────────────────────────────────── */}
          <div>
            <div className="sticky top-28 flex flex-col gap-5">
              {/* Connected tools */}
              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "white",
                  border: "1.5px solid rgba(0,41,16,0.1)",
                }}
              >
                <h3
                  className="mb-4 text-[#002910]"
                  style={{
                    fontFamily: "'Saans', 'DM Serif Display', serif",
                    fontWeight: 400,
                    fontSize: "17px",
                  }}
                >
                  Connected tools
                </h3>
                <div className="flex flex-col gap-2">
                  {useCase.connectedTools.map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5"
                      style={{
                        backgroundColor: "#F8FFFB",
                        border: "1px solid rgba(0,41,16,0.07)",
                      }}
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                        style={{ backgroundColor: "#CCFFE0", color: "#057A28" }}
                      >
                        {iconMap[tool.icon] || <FileText size={15} />}
                      </span>
                      <span
                        className="text-[#002910]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "13.5px",
                          fontWeight: 500,
                        }}
                      >
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-xl p-5"
                style={{ backgroundColor: "#002910" }}
              >
                <p
                  className="mb-1 text-[#CCFFE0]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Ready to build?
                </p>
                <p
                  className="mb-4 text-white"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.5,
                  }}
                >
                  Start this workflow in AirOps — no code required.
                </p>
                <a
                  href="https://www.airops.com"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00FF64] py-3 text-[#002910] no-underline transition-all hover:brightness-95"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  Try this use case
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      fill="#002910"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Related use cases ───────────────────────────── */}
        {relatedUseCases.length > 0 && (
          <div className="mt-20">
            <div
              className="mb-8 flex items-center gap-3"
              style={{ borderBottom: "1px solid rgba(0,41,16,0.1)", paddingBottom: "16px" }}
            >
              <h2
                className="text-[#002910]"
                style={{
                  fontFamily: "'Saans', 'DM Serif Display', serif",
                  fontWeight: 400,
                  fontSize: "26px",
                  letterSpacing: "-0.015em",
                }}
              >
                Related use cases
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {relatedUseCases.map((uc) => {
                const relStyles =
                  categoryStyles[uc.category] || categoryStyles["Engineering"];
                return (
                  <Link
                    key={uc.id}
                    to={`/use-case/${uc.id}`}
                    className="group flex flex-col overflow-hidden bg-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,41,16,0.08)]"
                    style={{
                      border: "1.5px solid rgba(0,41,16,0.12)",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="aspect-[16/7] w-full transition-all duration-300 group-hover:brightness-95"
                      style={{ backgroundColor: relStyles.bg }}
                    />
                    <div
                      className="p-4"
                      style={{ borderTop: "1.5px solid rgba(0,41,16,0.1)" }}
                    >
                      <span
                        className="mb-2 inline-block rounded-[4px] px-2.5 py-0.5"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 500,
                          fontSize: "10px",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          backgroundColor: relStyles.bg,
                          color: relStyles.text,
                          border: `1px solid ${relStyles.border}`,
                        }}
                      >
                        {uc.category}
                      </span>
                      <h3
                        className="text-[#002910] transition-colors duration-200 group-hover:text-[#057A28]"
                        style={{
                          fontFamily: "'Saans', 'DM Serif Display', serif",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: 1.3,
                        }}
                      >
                        {uc.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}