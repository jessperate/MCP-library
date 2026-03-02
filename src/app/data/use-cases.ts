export interface UseCase {
  id: string;
  title: string;
  description: string;
  category: string;
  detailDescription: string;
  examplePrompts: string[];
  keyBenefits: string[];
  connectedTools: { name: string; icon: string }[];
  relatedUseCaseIds: string[];
}

export const categories = [
  "All",
  "SEO & Content",
  "Sales & CRM",
  "Engineering",
  "Marketing",
  "Support",
  "Data & Analytics",
  "Analytics & Reporting",
  "Content Optimization",
  "Competitive Intelligence",
  "Content Creation",
  "Brand Monitoring",
  "Workflow Automation",
];

export const useCases: UseCase[] = [
  {
    id: "programmatic-seo",
    title: "Generate programmatic SEO pages at scale",
    description:
      "Build thousands of data-driven landing pages — by location, keyword, or product attribute — that rank and convert.",
    category: "SEO & Content",
    detailDescription:
      "AirOps MCP is purpose-built for programmatic SEO. Connect your structured data sources — product catalogs, location databases, keyword lists — and AirOps generates unique, high-quality page content for each variation at scale. Workflows pull live data from Ahrefs and Google Search Console, enrich it with SERP analysis, and output CMS-ready content through a single MCP server call. Teams have published 50,000+ pages in hours, not months.",
    examplePrompts: [
      "Generate landing pages for all 500 cities in our target markets using our product data and local search volumes",
      "Create category pages for every product vertical in our catalog, optimized for head terms and long-tail variations",
      "Build comparison pages for our top 20 competitors using live SERP data from Ahrefs",
    ],
    keyBenefits: [
      "Publish 10,000+ pages from a single workflow run",
      "Unique, high-quality content — not spun templates",
      "Live data integration with Ahrefs and Search Console",
      "CMS-ready output for WordPress, Webflow, or any headless CMS",
    ],
    connectedTools: [
      { name: "Ahrefs", icon: "search" },
      { name: "Google Search Console", icon: "bar-chart" },
      { name: "BigQuery", icon: "database" },
      { name: "Webflow", icon: "layout" },
      { name: "WordPress", icon: "file-text" },
    ],
    relatedUseCaseIds: [
      "seo-content-briefs",
      "seo-meta-optimization",
      "content-repurposing",
    ],
  },
  {
    id: "seo-content-briefs",
    title: "Research and write AI-powered content briefs",
    description:
      "Pull live SERP data, surface content gaps, and deliver structured briefs your writers can act on immediately.",
    category: "SEO & Content",
    detailDescription:
      "AirOps MCP connects your SEO stack to an AI workflow that automates the research-to-brief pipeline. The workflow queries Ahrefs for keyword difficulty and search volume, scrapes and summarizes top-ranking pages for each target keyword, identifies semantic gaps your content should fill, and outputs a structured brief — complete with suggested H2s, internal links, and word count targets — directly into Notion or Google Docs.",
    examplePrompts: [
      "Create a full content brief for 'best AI writing tools 2026' — include keyword clusters, top SERP analysis, and a suggested outline",
      "Identify content gaps between our existing blog and the top 5 competitors for our core keyword set",
      "Generate 10 SEO briefs from this list of target keywords, each with SERP intent analysis and suggested CTAs",
    ],
    keyBenefits: [
      "80% reduction in brief research time",
      "SERP-grounded outlines with real competitor data",
      "Consistent brief structure across every writer",
      "Automatic keyword clustering and intent classification",
    ],
    connectedTools: [
      { name: "Ahrefs", icon: "search" },
      { name: "SEMrush", icon: "trending-up" },
      { name: "Google Search Console", icon: "bar-chart" },
      { name: "Notion", icon: "file-text" },
      { name: "Google Docs", icon: "file" },
    ],
    relatedUseCaseIds: [
      "programmatic-seo",
      "seo-meta-optimization",
      "marketing-campaign-copy",
    ],
  },
  {
    id: "seo-meta-optimization",
    title: "Bulk-optimize meta tags and on-page SEO",
    description:
      "Audit hundreds of pages, rewrite title tags and meta descriptions, and push updates directly to your CMS.",
    category: "SEO & Content",
    detailDescription:
      "AirOps MCP connects Screaming Frog or Search Console exports to an AI optimization workflow. For each page, it compares your current meta tags against the top-ranking competitors, scores the existing copy, and generates a set of CTR-optimized alternatives ranked by predicted click-through rate. Approved changes can be pushed directly to WordPress or Webflow via the same workflow — no developer needed.",
    examplePrompts: [
      "Audit all 300 blog pages in our CMS — score each title tag and flag the bottom 50 for rewriting",
      "Generate 3 alternative meta descriptions for every page with a CTR below our site average",
      "Rewrite the title tags for our pricing and feature pages to better match current search intent",
    ],
    keyBenefits: [
      "Automated page-level SEO scoring at scale",
      "CTR-optimized meta copy with competitor benchmarking",
      "Bulk updates pushed directly to CMS",
      "Schema markup generation for product and review pages",
    ],
    connectedTools: [
      { name: "Screaming Frog", icon: "bug" },
      { name: "Google Search Console", icon: "bar-chart" },
      { name: "WordPress", icon: "layout" },
      { name: "Webflow", icon: "file-text" },
    ],
    relatedUseCaseIds: [
      "programmatic-seo",
      "seo-content-briefs",
      "content-repurposing",
    ],
  },
  {
    id: "sales-lead-enrichment",
    title: "Enrich and score inbound leads in real time",
    description:
      "The moment a lead enters your CRM, AirOps enriches it with firmographics, tech stack, and buying intent — automatically.",
    category: "Sales & CRM",
    detailDescription:
      "AirOps MCP triggers on new CRM records and immediately enriches each lead with data pulled from multiple sources: company size and funding stage from Clearbit, tech stack from BuiltWith, LinkedIn profile data, and recent company news. A scoring model weighs ICP fit against intent signals, assigns a priority tier, and routes the lead to the right rep — all before the first human touches it. AEs receive a full dossier, not just a name and email.",
    examplePrompts: [
      "Enrich all new HubSpot contacts from the last 24 hours with Clearbit firmographics and LinkedIn data",
      "Score our entire open pipeline by ICP fit and G2 intent signals, then update the Priority field in Salesforce",
      "Generate a one-page account brief for each of my 10 upcoming sales calls",
    ],
    keyBenefits: [
      "Zero-touch enrichment the moment a lead enters your CRM",
      "Multi-source data fusion from 10+ providers",
      "ICP-fit scoring that updates as data refreshes",
      "Rep-ready dossiers that cut call prep time by 70%",
    ],
    connectedTools: [
      { name: "HubSpot", icon: "users" },
      { name: "Salesforce", icon: "cloud" },
      { name: "Clearbit", icon: "database" },
      { name: "LinkedIn", icon: "linkedin" },
      { name: "Clay", icon: "layers" },
    ],
    relatedUseCaseIds: [
      "sales-outreach-personalization",
      "data-reporting",
      "support-ticket-routing",
    ],
  },
  {
    id: "sales-outreach-personalization",
    title: "Personalize outbound sequences at scale",
    description:
      "Craft hyper-relevant emails and LinkedIn touches that reference each prospect's specific context — automatically.",
    category: "Sales & CRM",
    detailDescription:
      "AirOps MCP pulls prospect context from across your stack — CRM history, LinkedIn activity, recent company news, job postings, and G2 reviews — and generates personalized, multi-touch sequences in your brand voice. Each message references a specific pain point, milestone, or trigger event relevant to that prospect. The workflow writes the copy, stages it in your sequencer, and flags any messages that need a human review before sending.",
    examplePrompts: [
      "Write a 4-step outbound sequence for the Head of Content at each company in my target account list, referencing their recent content output and gaps",
      "Draft personalized follow-up emails for every prospect who opened our last campaign but didn't reply — use their job title and industry as context",
      "Generate LinkedIn InMails for 50 prospects using their most recent post as a conversation opener",
    ],
    keyBenefits: [
      "3–5× higher reply rates vs. templated sequences",
      "Personalization that references live, prospect-specific signals",
      "Sequences staged directly in Outreach or Salesloft",
      "Brand voice guardrails applied to every message",
    ],
    connectedTools: [
      { name: "Outreach", icon: "send" },
      { name: "Salesloft", icon: "mail" },
      { name: "HubSpot", icon: "users" },
      { name: "LinkedIn", icon: "linkedin" },
      { name: "Clay", icon: "layers" },
    ],
    relatedUseCaseIds: [
      "sales-lead-enrichment",
      "marketing-campaign-copy",
      "content-repurposing",
    ],
  },
  {
    id: "engineering-code-review",
    title: "Automate PR reviews and technical documentation",
    description:
      "Get AI-powered code review comments, auto-generated PR summaries, and documentation that stays in sync with your codebase.",
    category: "Engineering",
    detailDescription:
      "AirOps MCP connects to GitHub or GitLab and runs on every pull request. It reviews code for security vulnerabilities, logic errors, and style violations, posts inline comments with fix suggestions, and writes a plain-English PR summary that your team can read in 30 seconds. After merge, the same workflow updates your Confluence or Notion documentation to reflect any API or interface changes — keeping docs in sync with code automatically.",
    examplePrompts: [
      "Review the open PRs on our payments service — flag any security issues, missing tests, or breaking API changes",
      "Auto-generate API docs for every new endpoint added in this sprint and post them to Confluence",
      "Write the release notes for v2.4 by summarizing the last 23 merged PRs into user-facing language",
    ],
    keyBenefits: [
      "Inline security and logic review on every PR",
      "Auto-generated PR descriptions and changelogs",
      "Docs that update automatically when code changes",
      "50% reduction in time-to-merge for non-critical PRs",
    ],
    connectedTools: [
      { name: "GitHub", icon: "git-branch" },
      { name: "GitLab", icon: "git-branch" },
      { name: "Linear", icon: "clipboard" },
      { name: "Confluence", icon: "book" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: [
      "engineering-incident-response",
      "data-reporting",
      "support-knowledge-base",
    ],
  },
  {
    id: "engineering-incident-response",
    title: "Accelerate incident response and post-mortems",
    description:
      "Aggregate logs, metrics, and runbooks instantly to diagnose production incidents and draft post-mortems automatically.",
    category: "Engineering",
    detailDescription:
      "When PagerDuty fires, AirOps MCP immediately aggregates context: correlated Datadog alerts, recent deployments from GitHub, relevant runbooks from Confluence, and the last 24 hours of Slack conversation in the affected service channel. Within 60 seconds, on-call engineers receive a ranked list of probable root causes with supporting evidence. After resolution, the workflow assembles a post-mortem draft — timeline, contributing factors, and action items — ready for review.",
    examplePrompts: [
      "Correlate the Datadog alerts from the last 2 hours with recent deploys and surface the top 3 probable root causes for our API latency spike",
      "Draft an incident report for INC-2047 using the Slack thread, Datadog dashboards, and our standard post-mortem template",
      "Identify the last 5 incidents that touched the checkout service and summarize their common contributing factors",
    ],
    keyBenefits: [
      "60% faster mean time to resolution (MTTR)",
      "Automated context aggregation across 5+ tools",
      "Root-cause hypotheses ranked by supporting evidence",
      "Post-mortem drafts generated in minutes, not hours",
    ],
    connectedTools: [
      { name: "Datadog", icon: "activity" },
      { name: "PagerDuty", icon: "bell" },
      { name: "GitHub", icon: "git-branch" },
      { name: "Slack", icon: "message-square" },
      { name: "Confluence", icon: "book" },
    ],
    relatedUseCaseIds: [
      "engineering-code-review",
      "support-ticket-routing",
      "data-anomaly-detection",
    ],
  },
  {
    id: "marketing-campaign-copy",
    title: "Generate on-brand campaign copy across every channel",
    description:
      "From a single campaign brief, generate coordinated copy for ads, emails, social, and landing pages — all in your brand voice.",
    category: "Marketing",
    detailDescription:
      "AirOps MCP takes your campaign brief and generates a full creative package in minutes. It pulls your brand guidelines, top-performing past campaigns, and current audience segments from your marketing stack, then produces channel-specific copy for Google and Meta ads, email subject lines and bodies, LinkedIn and X posts, and landing page hero text. A/B variants are generated automatically. All copy respects tone, vocabulary, and messaging hierarchy from your brand guide.",
    examplePrompts: [
      "Generate a complete creative package for our Q2 product launch — Google ads, 3 email variants, LinkedIn post, and landing page hero",
      "Create 5 A/B test variants for our top-of-funnel Google Ads targeting 'AI workflow automation' with different value propositions",
      "Rewrite our trial conversion email sequence to align with our new positioning document uploaded to Notion",
    ],
    keyBenefits: [
      "Full creative package from one brief in under 10 minutes",
      "Brand voice guardrails applied across every asset",
      "A/B variants generated automatically for every format",
      "Consistent messaging hierarchy across all channels",
    ],
    connectedTools: [
      { name: "Google Ads", icon: "megaphone" },
      { name: "Meta Ads", icon: "megaphone" },
      { name: "Mailchimp", icon: "mail" },
      { name: "HubSpot", icon: "users" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: [
      "seo-content-briefs",
      "content-repurposing",
      "sales-outreach-personalization",
    ],
  },
  {
    id: "content-repurposing",
    title: "Repurpose content across formats and channels",
    description:
      "Transform a blog post, webinar, or report into a full library of channel-ready assets — automatically.",
    category: "Marketing",
    detailDescription:
      "AirOps MCP connects to your content library and applies format-aware transformation workflows. A single long-form piece becomes a LinkedIn post, a Twitter/X thread, a newsletter section, a short-form video script, and a slide deck outline — each adapted to the platform's native format, character limits, and audience expectations. Finished assets are pushed directly to your content calendar in Notion or your social scheduler in Buffer.",
    examplePrompts: [
      "Turn our latest State of AI report into a 7-part LinkedIn series, a Twitter thread, and a newsletter summary",
      "Repurpose the recording transcript from last week's webinar into a blog post, 10 social clips, and a 5-email nurture sequence",
      "Create 20 'stat cards' from our annual benchmark report — each formatted for LinkedIn with a visual prompt for design",
    ],
    keyBenefits: [
      "10× content output from a single source asset",
      "Platform-native formatting for every channel",
      "Published directly to your scheduler or CMS",
      "Consistent key messages across all derivative formats",
    ],
    connectedTools: [
      { name: "Notion", icon: "file-text" },
      { name: "WordPress", icon: "layout" },
      { name: "Buffer", icon: "share-2" },
      { name: "Transistor", icon: "activity" },
    ],
    relatedUseCaseIds: [
      "marketing-campaign-copy",
      "seo-content-briefs",
      "support-knowledge-base",
    ],
  },
  {
    id: "support-ticket-routing",
    title: "Automate support ticket triage and response drafts",
    description:
      "Classify, prioritize, and draft responses for incoming tickets using your knowledge base and CRM data — before an agent touches them.",
    category: "Support",
    detailDescription:
      "AirOps MCP sits between your inbox and your support queue. Every new ticket is automatically classified by topic, urgency, and customer tier — with Zendesk, Intercom, or Freshdesk updated instantly. For Tier 1 issues, the workflow searches your knowledge base and drafts a response the agent can send with one click. High-urgency tickets from enterprise customers are escalated immediately with a full context summary attached.",
    examplePrompts: [
      "Triage and classify all overnight Zendesk tickets — tag each by issue type, set urgency, and assign to the right team queue",
      "Draft knowledge-base-backed responses for every open ticket tagged 'billing question' in the last 48 hours",
      "Identify the top 10 recurring support issues this month and draft new help center articles for the ones not yet covered",
    ],
    keyBenefits: [
      "Tickets classified and routed before agents start their day",
      "50% reduction in first response time",
      "Agent-ready response drafts for 60% of Tier 1 tickets",
      "Enterprise escalations flagged instantly with full context",
    ],
    connectedTools: [
      { name: "Zendesk", icon: "headphones" },
      { name: "Intercom", icon: "message-circle" },
      { name: "Freshdesk", icon: "headphones" },
      { name: "HubSpot", icon: "users" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: [
      "support-knowledge-base",
      "sales-lead-enrichment",
      "data-reporting",
    ],
  },
  {
    id: "support-knowledge-base",
    title: "Keep your help center automatically up to date",
    description:
      "Detect product changes from release notes and tickets, then draft updated help articles before customers notice the gap.",
    category: "Support",
    detailDescription:
      "AirOps MCP monitors your product changelog, GitHub release notes, and Jira tickets to surface knowledge base articles that are stale or missing. For each gap, it drafts an updated article in your documentation style — complete with step-by-step instructions, screenshots prompts, and a suggested URL. Teams report eliminating the 'knowledge base debt' backlog that used to take a dedicated writer weeks to clear after every product release.",
    examplePrompts: [
      "Compare our last 3 product releases against our Zendesk help center and list every article that needs updating",
      "Draft a new help article for the Slack integration we shipped last week, matching the style and format of our existing docs",
      "Generate an FAQ section for our pricing page based on the 20 most common billing questions submitted this quarter",
    ],
    keyBenefits: [
      "Zero knowledge base debt after product releases",
      "Articles drafted automatically in your doc style",
      "Proactive gap detection before customers hit a dead end",
      "30% reduction in repeat support tickets within 60 days",
    ],
    connectedTools: [
      { name: "Notion", icon: "file-text" },
      { name: "Zendesk Guide", icon: "headphones" },
      { name: "GitHub", icon: "git-branch" },
      { name: "Jira", icon: "clipboard" },
    ],
    relatedUseCaseIds: [
      "support-ticket-routing",
      "engineering-code-review",
      "content-repurposing",
    ],
  },
  {
    id: "data-reporting",
    title: "Build automated, narrative-rich analytics reports",
    description:
      "Pull data from multiple sources and generate executive-ready reports with charts, trends, and plain-language insights.",
    category: "Data & Analytics",
    detailDescription:
      "AirOps MCP connects to your data warehouse, analytics platforms, and business tools to assemble comprehensive reports on demand or on schedule. It doesn't just surface numbers — it interprets them, identifies week-over-week trends, flags anomalies, and wraps everything in a readable narrative. Reports land in Slack, email, or Notion automatically. Teams replace hours of manual Google Sheets work with a workflow that runs in under 3 minutes.",
    examplePrompts: [
      "Generate our weekly marketing performance report from Google Analytics and HubSpot — include channel breakdown, funnel performance, and top 3 insights",
      "Build a monthly executive summary that compares our core KPIs against last month and against targets",
      "Create a pipeline health report for the sales team showing stage conversion rates, average deal velocity, and stalled opportunities",
    ],
    keyBenefits: [
      "Reports delivered to Slack or email on any schedule",
      "Multi-source aggregation from data warehouse + SaaS tools",
      "Narrative insights, not just raw tables",
      "Anomaly callouts and trend analysis included automatically",
    ],
    connectedTools: [
      { name: "BigQuery", icon: "database" },
      { name: "Snowflake", icon: "cloud" },
      { name: "Google Analytics", icon: "trending-up" },
      { name: "Looker", icon: "pie-chart" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: [
      "data-anomaly-detection",
      "sales-lead-enrichment",
      "engineering-incident-response",
    ],
  },
  {
    id: "data-anomaly-detection",
    title: "Detect metric anomalies and alert teams in context",
    description:
      "Monitor your most important KPIs continuously and get intelligent, contextualized alerts the moment something looks off.",
    category: "Data & Analytics",
    detailDescription:
      "AirOps MCP continuously monitors your key business metrics across connected data sources. When it detects an anomaly — an unexpected spike, a sudden drop, or a deviation from the established baseline — it doesn't just fire a raw alert. It aggregates context: recent deploys from GitHub, campaign changes from your ad platform, and correlated metrics from adjacent systems. The alert that hits Slack explains what happened, why it probably happened, and what to check first.",
    examplePrompts: [
      "Monitor our trial-to-paid conversion rate daily and alert the growth team in Slack if it deviates more than 10% from the 30-day baseline",
      "Analyze our ad spend and pipeline data for the last 90 days — surface any anomalies and correlate them with known campaign or product changes",
      "Set up a revenue anomaly monitor that pages our on-call engineer and drafts a context summary whenever MRR growth deviates significantly",
    ],
    keyBenefits: [
      "Continuous monitoring with no dashboard-watching required",
      "Alerts include correlated context, not just raw numbers",
      "Pattern deviation detection across any KPI or metric",
      "Escalation workflows that page the right team automatically",
    ],
    connectedTools: [
      { name: "BigQuery", icon: "database" },
      { name: "Snowflake", icon: "cloud" },
      { name: "Datadog", icon: "activity" },
      { name: "Slack", icon: "message-square" },
      { name: "PagerDuty", icon: "bell" },
    ],
    relatedUseCaseIds: [
      "data-reporting",
      "engineering-incident-response",
      "support-ticket-routing",
    ],
  },
  // ─── Analytics & Reporting ───────────────────────────────────────────────────
  {
    id: "analytics-revenue-attribution",
    title: "Attribute revenue to every marketing touchpoint automatically",
    description:
      "Map every deal back to the campaigns, content, and channels that influenced it — with multi-touch attribution models built in.",
    category: "Analytics & Reporting",
    detailDescription:
      "AirOps MCP connects your CRM, ad platforms, and analytics stack to build a unified attribution model. It joins ad spend data from Google and Meta, email engagement from HubSpot, and closed-won data from Salesforce to compute first-touch, last-touch, and linear attribution for every deal. Reports are generated on demand and delivered to Slack or Notion — no data team required.",
    examplePrompts: [
      "Show me which campaigns drove the most pipeline last quarter using multi-touch attribution across Google Ads, LinkedIn, and email",
      "Calculate our blended CAC by channel for Q1 and compare against target",
      "Build a weekly revenue attribution report and post it to the #growth Slack channel every Monday morning",
    ],
    keyBenefits: [
      "Multi-touch attribution across every channel in one view",
      "Automated weekly and monthly attribution reports",
      "CAC and ROI calculated per channel automatically",
      "No data team or SQL required",
    ],
    connectedTools: [
      { name: "Salesforce", icon: "cloud" },
      { name: "HubSpot", icon: "users" },
      { name: "Google Ads", icon: "megaphone" },
      { name: "BigQuery", icon: "database" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: ["data-reporting", "marketing-campaign-copy", "data-anomaly-detection"],
  },
  {
    id: "analytics-cohort-analysis",
    title: "Run automated cohort and retention analyses",
    description:
      "Understand exactly when and why users churn — with cohort breakdowns delivered to your team on a recurring schedule.",
    category: "Analytics & Reporting",
    detailDescription:
      "AirOps MCP queries your data warehouse to build cohort retention tables, calculates week-over-week and month-over-month retention curves, and surfaces the product events most correlated with long-term retention. Outputs are formatted as readable summaries for leadership and detailed breakdowns for product teams — all delivered automatically.",
    examplePrompts: [
      "Show me 90-day retention cohorts for every signup month in the last year, broken down by acquisition channel",
      "Identify which onboarding actions in week 1 are most correlated with 60-day retention",
      "Build a weekly churn risk report and flag accounts that show early disengagement patterns",
    ],
    keyBenefits: [
      "Cohort tables built automatically from raw warehouse data",
      "Retention curve analysis with trend narratives",
      "Early churn signals surfaced before customers cancel",
      "Scheduled delivery to Slack, Notion, or email",
    ],
    connectedTools: [
      { name: "Snowflake", icon: "cloud" },
      { name: "BigQuery", icon: "database" },
      { name: "Amplitude", icon: "activity" },
      { name: "Mixpanel", icon: "trending-up" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: ["data-reporting", "data-anomaly-detection", "support-ticket-routing"],
  },
  // ─── Content Optimization ────────────────────────────────────────────────────
  {
    id: "content-optimization-ctr",
    title: "Optimize existing content for CTR and dwell time",
    description:
      "Audit your live content library, find underperformers, and rewrite them to recover rankings and engagement.",
    category: "Content Optimization",
    detailDescription:
      "AirOps MCP connects Search Console, Ahrefs, and your CMS to identify content that's lost rankings or has high impressions but low CTR. It diagnoses the root cause — stale data, weak headlines, thin content, poor E-E-A-T signals — and generates a prioritized rewrite plan with specific recommendations for each page. Approved rewrites can be pushed directly to your CMS.",
    examplePrompts: [
      "Find all posts that have dropped 5+ positions in the last 60 days and draft a rewrite plan for the top 20",
      "Identify our highest-impression, lowest-CTR pages and generate 5 alternative title tag options for each",
      "Audit our top 50 blog posts against current SERP results and flag which need a full refresh vs. minor updates",
    ],
    keyBenefits: [
      "Systematic identification of underperforming content",
      "Root-cause diagnosis — not just rank tracking",
      "Prioritized rewrite queue with effort estimates",
      "Direct CMS publishing for approved changes",
    ],
    connectedTools: [
      { name: "Google Search Console", icon: "bar-chart" },
      { name: "Ahrefs", icon: "search" },
      { name: "WordPress", icon: "layout" },
      { name: "Webflow", icon: "file-text" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: ["seo-meta-optimization", "seo-content-briefs", "programmatic-seo"],
  },
  {
    id: "content-optimization-conversion",
    title: "A/B test landing page copy with AI-generated variants",
    description:
      "Generate dozens of landing page copy variants grounded in your best performers, then run structured tests at scale.",
    category: "Content Optimization",
    detailDescription:
      "AirOps MCP analyzes your top-converting landing pages and extracts the patterns — headline structures, value proposition framing, CTA language — that drive conversions. It then generates a full set of test variants for any page, tagged by hypothesis, and stages them in your testing platform. Post-test, it summarizes winners and updates your copy guidelines automatically.",
    examplePrompts: [
      "Generate 10 hero headline variants for our trials page based on our top 3 converting pages and current ICP pain points",
      "Create a full A/B test plan for our pricing page — copy variants, hypothesis for each, and success metrics",
      "Analyze the results of our last 5 landing page tests and extract the copywriting patterns that consistently win",
    ],
    keyBenefits: [
      "Variants generated from proven conversion patterns",
      "Structured test hypotheses for every variant",
      "Pattern extraction from winning test results",
      "Continuous improvement loop baked into the workflow",
    ],
    connectedTools: [
      { name: "Optimizely", icon: "sliders" },
      { name: "VWO", icon: "bar-chart" },
      { name: "HubSpot", icon: "users" },
      { name: "Webflow", icon: "file-text" },
    ],
    relatedUseCaseIds: ["marketing-campaign-copy", "seo-meta-optimization", "content-optimization-ctr"],
  },
  // ─── Competitive Intelligence ────────────────────────────────────────────────
  {
    id: "competitive-intel-monitoring",
    title: "Monitor competitors and surface strategic signals weekly",
    description:
      "Track product changes, pricing moves, job postings, and content strategies across your top competitors — automatically.",
    category: "Competitive Intelligence",
    detailDescription:
      "AirOps MCP scrapes and synthesizes competitive data across multiple signals: product changelog pages, G2 and Capterra review trends, LinkedIn job postings, ad library changes, and new content published. Every week, a structured intelligence brief lands in Slack or Notion — categorized by signal type and sorted by strategic relevance. Your team gets the insight without the manual monitoring.",
    examplePrompts: [
      "Monitor our top 5 competitors for any pricing page changes, new feature announcements, or significant G2 review shifts this week",
      "Summarize every new piece of content published by Competitor X in the last 30 days and identify their content strategy pivots",
      "Track job postings from our 3 main competitors and infer which product areas they're investing in",
    ],
    keyBenefits: [
      "Weekly competitive brief delivered to Slack automatically",
      "Multi-signal monitoring across product, content, and hiring",
      "Strategic inference — not just raw data aggregation",
      "Configurable competitor list and signal types",
    ],
    connectedTools: [
      { name: "G2", icon: "star" },
      { name: "LinkedIn", icon: "linkedin" },
      { name: "Ahrefs", icon: "search" },
      { name: "Slack", icon: "message-square" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: ["seo-content-briefs", "marketing-campaign-copy", "analytics-revenue-attribution"],
  },
  {
    id: "competitive-intel-battlecards",
    title: "Generate and keep sales battlecards up to date",
    description:
      "Automatically refresh battlecards when competitors ship new features, change pricing, or shift messaging.",
    category: "Competitive Intelligence",
    detailDescription:
      "AirOps MCP monitors competitor product pages, changelogs, and review sites continuously. When a meaningful change is detected — a new integration, a pricing tier added, a common customer complaint emerging in reviews — the relevant section of your battlecard is flagged and a draft update is generated. Sales reps always have current, accurate competitive talking points without your PMM team manually maintaining a spreadsheet.",
    examplePrompts: [
      "Update the battlecard for Competitor Y based on their product release last week and the new G2 reviews mentioning their new API",
      "Generate a new battlecard for a competitor we haven't tracked before using their website, G2 profile, and LinkedIn",
      "Flag every battlecard that hasn't been reviewed in 90 days and draft updates for any with outdated competitive claims",
    ],
    keyBenefits: [
      "Battlecards that update automatically when competitors change",
      "Sourced updates with evidence for every claim",
      "Outdated section detection with draft replacements",
      "Delivered directly to your sales enablement platform",
    ],
    connectedTools: [
      { name: "Highspot", icon: "layers" },
      { name: "Seismic", icon: "book" },
      { name: "G2", icon: "star" },
      { name: "Notion", icon: "file-text" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: ["competitive-intel-monitoring", "sales-outreach-personalization", "marketing-campaign-copy"],
  },
  // ─── Content Creation ────────────────────────────────────────────────────────
  {
    id: "content-creation-longform",
    title: "Write research-backed long-form content at scale",
    description:
      "Produce thorough, well-researched blog posts, guides, and reports that are grounded in real sources and written in your voice.",
    category: "Content Creation",
    detailDescription:
      "AirOps MCP combines live web research, your brand guidelines, and a content brief to produce long-form content that reads like it came from your best writer. The workflow queries Ahrefs for keyword context, Perplexity for research synthesis, and your internal knowledge base for company-specific claims. Output goes through a brand-voice pass before landing in your CMS or Google Docs draft — ready for a human editor rather than a ground-up rewrite.",
    examplePrompts: [
      "Write a 2,500-word guide to AI workflow automation for B2B SaaS teams, grounded in current best practices and optimized for 'AI workflow tools'",
      "Produce a thought-leadership piece on the future of MCP from our CEO's perspective, drawing on the talking points in this Notion doc",
      "Create a comparison guide for the top 7 alternatives to [Competitor] — include a feature matrix and honest pros/cons for each",
    ],
    keyBenefits: [
      "Research-grounded content, not hallucinated claims",
      "Brand voice applied consistently at scale",
      "SEO-optimized structure built into the output",
      "CMS or Google Docs ready — minimal editing required",
    ],
    connectedTools: [
      { name: "Ahrefs", icon: "search" },
      { name: "Perplexity", icon: "globe" },
      { name: "Notion", icon: "file-text" },
      { name: "Google Docs", icon: "file" },
      { name: "WordPress", icon: "layout" },
    ],
    relatedUseCaseIds: ["seo-content-briefs", "content-repurposing", "content-optimization-ctr"],
  },
  {
    id: "content-creation-social",
    title: "Build a month of social content in an afternoon",
    description:
      "Generate a full content calendar — posts, captions, hooks, and hashtag sets — across LinkedIn, X, and Instagram from a single brief.",
    category: "Content Creation",
    detailDescription:
      "AirOps MCP takes your monthly content themes and generates a complete social calendar. For each post it writes platform-native copy (character limits, tone, and format matched to the platform), a hook variant for testing, a visual content brief for your design team, and the best hashtag clusters. The full calendar is delivered to Notion or your social scheduler — ready to review and schedule in one session.",
    examplePrompts: [
      "Build a 30-day LinkedIn content calendar for our brand page based on our Q2 themes and top-performing past posts",
      "Generate 20 founder-voice posts for our CEO's LinkedIn, based on these talking points and their existing post style",
      "Create a week of X threads and Instagram carousels promoting our new product feature launch",
    ],
    keyBenefits: [
      "Full month of content generated in under 30 minutes",
      "Platform-native format, tone, and length for every post",
      "Hook variants generated for A/B testing",
      "Delivered directly to Buffer, Hootsuite, or Notion",
    ],
    connectedTools: [
      { name: "Buffer", icon: "share-2" },
      { name: "Hootsuite", icon: "rss" },
      { name: "Notion", icon: "file-text" },
      { name: "Canva", icon: "image" },
    ],
    relatedUseCaseIds: ["content-repurposing", "marketing-campaign-copy", "content-creation-longform"],
  },
  // ─── Brand Monitoring ────────────────────────────────────────────────────────
  {
    id: "brand-monitoring-mentions",
    title: "Monitor brand mentions and sentiment across the web",
    description:
      "Get a daily digest of every place your brand is mentioned — with sentiment scores, source ranking, and suggested responses.",
    category: "Brand Monitoring",
    detailDescription:
      "AirOps MCP aggregates brand mentions from review sites, Reddit, X, LinkedIn, news publications, and industry forums. Each mention is scored for sentiment, reach, and urgency. A daily digest lands in Slack — sorted by priority — with draft responses for negative reviews and high-visibility mentions. Crisis signals trigger an immediate alert before they have time to compound.",
    examplePrompts: [
      "Summarize all brand mentions from the last 24 hours across Reddit, G2, and Twitter — flag anything negative with high engagement",
      "Monitor Product Hunt for any mentions of our brand or category and draft a response to any comments that need addressing",
      "Build a weekly brand sentiment report showing mention volume, sentiment trend, and top themes across all channels",
    ],
    keyBenefits: [
      "Real-time monitoring across 10+ channels",
      "Sentiment scoring with urgency prioritization",
      "Draft responses generated for high-priority mentions",
      "Crisis signal detection before issues escalate",
    ],
    connectedTools: [
      { name: "Slack", icon: "message-square" },
      { name: "G2", icon: "star" },
      { name: "Twitter/X", icon: "twitter" },
      { name: "Reddit", icon: "globe" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: ["competitive-intel-monitoring", "support-ticket-routing", "analytics-revenue-attribution"],
  },
  {
    id: "brand-monitoring-reviews",
    title: "Respond to reviews at scale without losing the human touch",
    description:
      "Draft personalized, on-brand responses to every G2, Capterra, and App Store review — in minutes, not hours.",
    category: "Brand Monitoring",
    detailDescription:
      "AirOps MCP monitors your review profiles and generates a tailored response for every new review. Positive reviews get a warm, specific acknowledgment. Negative reviews get a professional, empathetic response that addresses the specific complaint — with a suggested resolution pulled from your playbook. All drafts go to a review queue where your team approves with one click, maintaining human oversight while eliminating the manual writing work.",
    examplePrompts: [
      "Draft responses to all unanswered G2 reviews from the last month — match the sentiment and specifics of each review",
      "Generate responses for the 15 App Store reviews we haven't replied to, flagging the 3 that mention critical bugs for immediate escalation",
      "Create a review response playbook from our best-performing responses and use it to train our next batch of replies",
    ],
    keyBenefits: [
      "100% review response rate without increasing headcount",
      "Personalized responses that reference the reviewer's specific points",
      "Consistent brand voice across every platform",
      "Negative review escalation with resolution suggestions",
    ],
    connectedTools: [
      { name: "G2", icon: "star" },
      { name: "Capterra", icon: "clipboard" },
      { name: "App Store Connect", icon: "smartphone" },
      { name: "Trustpilot", icon: "star" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: ["brand-monitoring-mentions", "support-ticket-routing", "support-knowledge-base"],
  },
  // ─── Workflow Automation ─────────────────────────────────────────────────────
  {
    id: "workflow-automation-onboarding",
    title: "Automate personalized customer onboarding sequences",
    description:
      "Trigger the right onboarding steps for each customer based on their role, use case, and product activity — without manual intervention.",
    category: "Workflow Automation",
    detailDescription:
      "AirOps MCP monitors product events and CRM data to build a dynamic onboarding journey. When a user signs up, the workflow enriches their profile, identifies their most likely use case, and triggers a personalized sequence — in-app messages via Intercom, onboarding emails via HubSpot, and a Slack alert to their CSM. As users complete key milestones, the sequence adapts. Stalled users trigger automated check-ins. No rule-based logic to maintain.",
    examplePrompts: [
      "Build a personalized onboarding sequence for each new trial user based on their job title and the use case they selected at signup",
      "Flag all trial users who haven't completed the key activation event in 3 days and trigger a re-engagement workflow",
      "Generate a weekly health report for our CSM team showing every account's onboarding progress and next recommended action",
    ],
    keyBenefits: [
      "Onboarding personalized to role and use case from day one",
      "Adaptive sequences that respond to real product behavior",
      "CSM alerts for accounts that need human intervention",
      "40% improvement in trial-to-paid conversion reported by customers",
    ],
    connectedTools: [
      { name: "Intercom", icon: "message-circle" },
      { name: "HubSpot", icon: "users" },
      { name: "Segment", icon: "layers" },
      { name: "Salesforce", icon: "cloud" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: ["analytics-cohort-analysis", "sales-lead-enrichment", "support-ticket-routing"],
  },
  {
    id: "workflow-automation-ops",
    title: "Connect your entire ops stack with AI-powered automation",
    description:
      "Replace manual handoffs and copy-paste workflows across your tools with intelligent automations that understand context.",
    category: "Workflow Automation",
    detailDescription:
      "AirOps MCP acts as an intelligent middleware layer between your tools. Instead of rigid if-then Zapier rules, you define workflows in plain language and the MCP server handles routing, enrichment, summarization, and action across your entire stack. Common automations include: meeting notes → CRM update → follow-up email drafted; support ticket → Jira bug filed → customer notified; deal closed → onboarding triggered → CSM assigned.",
    examplePrompts: [
      "After every sales call recorded in Gong, extract action items, update the Salesforce opportunity, and draft a follow-up email for the rep to review",
      "When a Jira bug is marked Critical, create a Slack thread with context, assign the on-call engineer, and draft a customer communication if any accounts are affected",
      "Sync our weekly all-hands meeting notes to Notion, extract decisions and action items, and assign them to the right people in Linear",
    ],
    keyBenefits: [
      "Context-aware automation — not brittle if/then rules",
      "Connects any tool in your stack via MCP",
      "Natural language workflow definition — no code needed",
      "Handles edge cases that rule-based tools break on",
    ],
    connectedTools: [
      { name: "Salesforce", icon: "cloud" },
      { name: "Jira", icon: "clipboard" },
      { name: "Slack", icon: "message-square" },
      { name: "Linear", icon: "clipboard" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: ["engineering-incident-response", "support-ticket-routing", "workflow-automation-onboarding"],
  },
];