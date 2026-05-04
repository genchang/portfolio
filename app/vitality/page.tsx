import Link from "next/link";
import CaseStudyIndex from "../CaseStudyIndex";
import SaFlagIcon from "../SaFlagIcon";

const INDEX_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "building-the-spine", label: "Building the spine" },
  { id: "teaching", label: "Teaching, not explaining" },
  { id: "adaptation", label: "Designing for adaptation" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
];

export default function VitalityCaseStudy() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-8">
        {/* Sticky left index — hidden on mobile */}
        <aside className="hidden md:block px-6 pt-10">
          <div className="sticky top-10">
            <CaseStudyIndex items={INDEX_ITEMS} backHref="/" backLabel="Back" />
          </div>
        </aside>

        {/* Mobile back link */}
        <div className="md:hidden px-4 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.5px]"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 500,
              color: "#32404f",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M9 3L4 7l5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
        </div>

        <main className="min-w-0">
          {/* Hero / title block */}
          <section
            id="overview"
            className="px-4 md:px-6 pt-6 md:pt-10 pb-16 max-w-[900px] w-full scroll-mt-10"
          >
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-8">
            {["Product Designer", "2.5 years", "Figma", "Android", "iOS"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[13px] uppercase leading-[20px] px-3 py-1"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                    border: "1px solid rgba(50,64,79,0.1)",
                    borderRadius: "999px",
                  }}
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          <h1
            className="text-[44px] leading-[52px] md:text-[64px] md:leading-[72px] tracking-[-0.5px] text-[#32404f] mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
          >
            Vitality
          </h1>

          <p
            className="text-[18px] leading-[28px] md:text-[22px] md:leading-[32px] text-[#32404f] max-w-[720px]"
            style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
          >
            Redesigning a global rewards experience used across multiple
            markets —{" "}
            <em style={{ fontWeight: 400 }}>
              while balancing consistency, localisation, and usability at
              scale.
            </em>
          </p>
        </section>

        {/* Hero video — reuse vitality hover video as the opening artefact */}
        <section className="px-4 md:px-6 pb-16 md:pb-24">
          <div className="max-w-[900px] w-full">
            <div
              className="w-full bg-[#f4f7f9] overflow-hidden"
              style={{
                aspectRatio: "16 / 9",
                border: "1px solid rgba(50,64,79,0.1)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Vitailty/hero.png"
                alt="Vitality app overview"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </section>

        {/* Body sections */}
        <div className="max-w-[900px] w-full px-4 md:px-6 flex flex-col gap-16 md:gap-24 pb-16 md:pb-24">
          <section id="context" className="scroll-mt-10">
            <div
              className="text-[13px] uppercase leading-[20px] mb-4"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: "#e65f2e",
                letterSpacing: "0.5px",
              }}
            >
              01 — Context
            </div>
            <h2
              className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
            >
              What I walked into
            </h2>
            <div
              className="flex flex-col gap-5"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                color: "#32404f",
                fontSize: "17px",
                lineHeight: "28px",
              }}
            >
              <p>
                Vitality runs across more than ten markets. The rewards
                experience had grown fast over the years, but the product
                experience hadn&apos;t really kept up.
              </p>
              <p>
                Different markets handled things differently. Components
                behaved inconsistently between regions, some flows were
                difficult to maintain, and users often struggled to
                understand how their rewards status worked, how points
                accumulated year-to-year, or what actions would actually help
                them progress.
              </p>
              <p>
                At the same time, new features kept getting added — partner
                rewards, streaks, activity goals, status systems — but there
                wasn&apos;t always a shared structure behind them.
              </p>
              <p>The challenge quickly became bigger than visual polish.</p>
            </div>

            <Pullquote>
              How do we create consistency across markets without removing
              the flexibility each region needs?
            </Pullquote>

            <div
              className="flex flex-col gap-5 mt-6"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                color: "#32404f",
                fontSize: "17px",
                lineHeight: "28px",
              }}
            >
              <p>
                By the time I joined, the team had already started migrating
                from Sketch to Figma. The bigger goal was much more
                ambitious: create a global design system, overhaul the UX,
                and support a single codebase that every market could
                localise — from language and brand colours to feature
                configuration and bespoke modules for regional needs.
              </p>
              <p>Essentially, a high-fidelity white-label app.</p>
              <p>Built once, shipped everywhere, owned locally.</p>
            </div>
          </section>

          <section id="building-the-spine" className="scroll-mt-10">
            <div
              className="text-[13px] uppercase leading-[20px] mb-4"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: "#e65f2e",
                letterSpacing: "0.5px",
              }}
            >
              02 — Building the spine
            </div>
            <h2
              className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
            >
              Building structure that could scale
            </h2>
            <div
              className="flex flex-col gap-5"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                color: "#32404f",
                fontSize: "17px",
                lineHeight: "28px",
              }}
            >
              <p>
                At the start, we leaned heavily on the existing components so
                we could ship quickly. That stopped working pretty fast.
              </p>
              <p>
                Usability testing kept surfacing the same friction points.
                Users were missing info icons, fixed tabs caused issues
                across different flows, and some of the older patterns
                simply couldn&apos;t support the new features being added.
              </p>
              <p>So we started replacing them.</p>
              <p>
                One small change that ended up having a surprisingly big
                impact was replacing tooltip-style info icons with in-place
                bottom sheets. They were easier to discover, worked better
                for longer translated content, and gave users more context
                without pushing them into another screen.
              </p>
              <p>
                That pattern eventually became reusable across the app
                anywhere we needed to surface supporting information.
              </p>
              <p>
                At the same time, I was helping build the spine of the
                design system underneath it all.
              </p>
              <p>
                I set up Figma variables so each market could plug in its
                own colour palette, then rebuilt components to consume those
                variables. It meant a designer could swap a screen from
                Mexico to Japan to Portugal almost instantly without
                rebuilding layouts from scratch.
              </p>
              <p>
                A lot of my work focused on making the system more scalable
                for both designers and developers:
              </p>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  defining auto-layout structures and component properties
                </li>
                <li>
                  improving accessibility and readability for translated
                  content
                </li>
                <li>
                  reducing inconsistencies in spacing, hierarchy, and
                  interaction patterns between markets
                </li>
                <li>
                  organising documentation so components were easier to find
                  and use
                </li>
                <li>
                  creating handoff conventions developers could reliably
                  work from
                </li>
              </ul>
              <p>
                We even introduced a lightweight versioning system directly
                inside Figma using emoji statuses and semantic versioning —
                things like 🔵 Built, 🟡 In Review, or ⚫ Concept paired
                with suffixes like <code>_V1.0.0</code> and linked to the
                dev backlog.
              </p>
            </div>

            <figure className="flex flex-col gap-3 mt-10">
              <div
                className="w-full overflow-hidden bg-[#f4f7f9]"
                style={{ border: "1px solid rgba(50,64,79,0.1)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Vitailty/section2_designsystem1.png"
                  alt="Components, props, expected behaviour, and documentation"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <figcaption
                className="text-[14px] leading-[22px]"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  color: "rgba(50,64,79,0.58)",
                  fontStyle: "italic",
                }}
              >
                Examples of components, its props, expected behaviour and
                documentation within the design system.
              </figcaption>
            </figure>

            <figure className="flex flex-col gap-3 mt-10">
              <div
                className="w-full overflow-hidden bg-[#f4f7f9]"
                style={{ border: "1px solid rgba(50,64,79,0.1)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Vitailty/section2_designsystem2.png"
                  alt="Documentation showing localisation and accessibility"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <figcaption
                className="text-[14px] leading-[22px]"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  color: "rgba(50,64,79,0.58)",
                  fontStyle: "italic",
                }}
              >
                Examples of documentation that highlights localisation and
                accessibility of a component.
              </figcaption>
            </figure>
          </section>

          <section id="teaching" className="scroll-mt-10">
            <div
              className="text-[13px] uppercase leading-[20px] mb-4"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: "#e65f2e",
                letterSpacing: "0.5px",
              }}
            >
              03 — Teaching, not explaining
            </div>
            <h2
              className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
            >
              Making complicated information easier to understand
            </h2>
            <div
              className="flex flex-col gap-5"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                color: "#32404f",
                fontSize: "17px",
                lineHeight: "28px",
              }}
            >
              <p>
                Vitality&apos;s reward logic could get complicated fast. A
                user&apos;s current rewards and status often depended on
                last year&apos;s points, whether they maintained activity
                levels, and how this year compared historically.
              </p>
              <p>
                Previously, most of that logic was explained through walls
                of text spread across multiple screens.
              </p>
              <p>
                The app relied heavily on points, streaks, activity goals,
                and status systems, but a lot of the information felt
                abstract or disconnected. Users often didn&apos;t
                understand:
              </p>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{ listStyleType: "disc" }}
              >
                <li>why their status changed</li>
                <li>how many points they still needed</li>
                <li>what counted toward progression</li>
                <li>or how different reward systems connected together</li>
              </ul>
              <p>
                The challenge became less about &ldquo;explaining&rdquo; the
                system, and more about teaching it visually.
              </p>
              <p>
                I explored ways to make complex information feel clearer
                and more motivating through:
              </p>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{ listStyleType: "disc" }}
              >
                <li>simplified reward breakdowns</li>
                <li>clearer hierarchy and progress states</li>
                <li>data visualisation concepts for trends and achievements</li>
                <li>
                  restructuring how information was grouped and surfaced
                </li>
              </ul>
              <p>
                One example was reworking the yearly rewards progression
                flow.
              </p>
              <p>
                Instead of relying on long-form explanatory copy, we
                replaced it with a swipeable carousel that visually showed:
              </p>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{ listStyleType: "disc" }}
              >
                <li>rewards unlocked at each level</li>
                <li>how progression carried over year-to-year</li>
                <li>and what users needed to maintain their status</li>
              </ul>
              <p>
                The solution reduced the amount of translated copy
                significantly, while making the experience easier to scan
                and understand across markets.
              </p>
              <p>
                The balance was tricky — the UI needed to feel visual
                enough for quick comprehension, but still generic enough to
                support localisation and avoid endless content variations
                between regions.
              </p>
              <p>
                A lot of the improvements were subtle, but together they
                removed a surprising amount of friction. Usability sessions
                that previously ended in confusion started ending with
                users explaining the reward system back to us in their own
                words.
              </p>
            </div>

            <figure className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8 mt-10">
              <div
                className="bg-[#f4f7f9] overflow-hidden shrink-0"
                style={{
                  width: "260px",
                  aspectRatio: "9 / 16",
                  border: "1px solid rgba(50,64,79,0.1)",
                  borderRadius: "12px",
                }}
              >
                <video
                  src="/Vitailty/vitality_carousel.mp4"
                  aria-label="Interactive rewards carousel"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <figcaption
                className="text-[15px] leading-[24px] flex-1"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  color: "rgba(50,64,79,0.78)",
                }}
              >
                The interactive rewards carousel enables users to
                effortlessly swipe through statuses, revealing the rewards
                associated with each level. This enhancement not only
                clarifies information but also minimises screen clutter,
                preventing users from needing to navigate away or sift
                through dense text.
              </figcaption>
            </figure>
          </section>

          <section id="adaptation" className="scroll-mt-10">
            <div
              className="text-[13px] uppercase leading-[20px] mb-4"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: "#e65f2e",
                letterSpacing: "0.5px",
              }}
            >
              04 — Designing for adaptation
            </div>
            <h2
              className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
            >
              Making AI-driven goals feel understandable
            </h2>
            <div
              className="flex flex-col gap-5"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                color: "#32404f",
                fontSize: "17px",
                lineHeight: "28px",
              }}
            >
              <p>
                One of the more complex problems I worked on was an
                AI-personalised activity feature designed to help members
                re-engage with physical activity.
              </p>
              <p>
                The feature originally started as a &ldquo;points
                booster&rdquo; — earn more points for fewer steps. The
                intention was to reward consistency, but Vitality&apos;s
                points system was already complicated, and &ldquo;more
                points for less activity&rdquo; confused almost everyone we
                tested it with.
              </p>
              <p>
                We explored multiple ways to frame it. None of them
                survived review.
              </p>
              <p>
                As the US and UK teams joined the rollout, the feature
                evolved alongside input from the clinical and data science
                teams. Instead of boosting points, the AI would lower a
                member&apos;s activity target when disengagement was
                detected.
              </p>
              <p>For example:</p>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{ listStyleType: "disc" }}
              >
                <li>the standard target might drop from 7,500 steps to 2,500</li>
                <li>points goals adjusted alongside it</li>
                <li>
                  and the target would gradually increase again as
                  engagement improved
                </li>
              </ul>
              <p>The idea became much easier to explain:</p>
            </div>

            <Pullquote>
              Make the goal achievable first, then gradually build the
              habit back up.
            </Pullquote>

            <div
              className="flex flex-col gap-5 mt-6"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                color: "#32404f",
                fontSize: "17px",
                lineHeight: "28px",
              }}
            >
              <p>That solved the product problem.</p>
              <p>The design problem that replaced it was:</p>
            </div>

            <Pullquote>
              How do users notice, trust, and understand that their goal
              just changed?
            </Pullquote>

            <div
              className="flex flex-col gap-5 mt-6"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                color: "#32404f",
                fontSize: "17px",
                lineHeight: "28px",
              }}
            >
              <p>
                The AI needed to feel intentional, not like a bug or random
                system behaviour.
              </p>
              <p>
                At the same time, marketing wanted the feature to feel
                visually distinct from the standard program rather than
                hidden as quiet personalisation.
              </p>
              <p>
                I designed interaction patterns and microanimations to
                reinforce the transition:
              </p>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  the activity ring shifted into a gradient state when AI
                  activated
                </li>
                <li>shimmer effects appeared across AI-driven surfaces</li>
                <li>goal values animated down from 7,500 to 2,500</li>
                <li>the ring colour transitioned as the programme adapted</li>
              </ul>
              <p>
                The motion wasn&apos;t there for decoration. It was what
                made the change legible.
              </p>
              <p>
                By the time the feature shipped, it had already been
                reframed multiple times across product, clinical, data
                science, and marketing requirements.
              </p>
              <p>
                A large part of the design challenge became holding the
                experience together through all of those shifts — while
                making sure users still understood what was happening to
                their goals, and why.
              </p>
            </div>

            <figure className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8 mt-10">
              <div
                className="bg-[#f4f7f9] overflow-hidden shrink-0"
                style={{
                  width: "260px",
                  aspectRatio: "9 / 16",
                  border: "1px solid rgba(50,64,79,0.1)",
                  borderRadius: "12px",
                }}
              >
                <video
                  src="/Vitailty/section4_physicalActivity.mp4"
                  aria-label="Physical activity goal animation"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <figcaption
                className="text-[15px] leading-[24px] flex-1"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  color: "rgba(50,64,79,0.78)",
                }}
              >
                Following activation of a new steps program, I animated the
                physical activity ring and adjusted the points target to
                distinguish it from the standard screen design, emphasising
                the personalisation of the program.
              </figcaption>
            </figure>

            <figure className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8 mt-10">
              <div
                className="bg-[#f4f7f9] overflow-hidden shrink-0"
                style={{
                  width: "260px",
                  aspectRatio: "9 / 16",
                  border: "1px solid rgba(50,64,79,0.1)",
                  borderRadius: "12px",
                }}
              >
                <video
                  src="/Vitailty/section4_priorityCard.mp4"
                  aria-label="Priority card border animation"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <figcaption
                className="text-[15px] leading-[24px] flex-1"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  color: "rgba(50,64,79,0.78)",
                }}
              >
                An animated border was implemented to accentuate the card on
                the home screen in order to draw attention to the priority
                card, while also introducing the new AI-based technology
                through branding colours.
              </figcaption>
            </figure>
          </section>

          {/* 05 — Impact */}
          <section id="impact" className="scroll-mt-10">
            <div
              className="text-[13px] uppercase leading-[20px] mb-4"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: "#e65f2e",
                letterSpacing: "0.5px",
              }}
            >
              05 — Impact
            </div>
            <h2
              className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
            >
              Designing for scale across markets
            </h2>
            <div
              className="flex flex-col gap-5"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                color: "#32404f",
                fontSize: "17px",
                lineHeight: "28px",
              }}
            >
              <p>
                The work contributed to a more scalable and maintainable
                product experience across multiple markets, while improving
                usability across key parts of the rewards journey.
              </p>
            </div>

            <h3
              className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
            >
              Outcomes
            </h3>
            <ul
              className="flex flex-col gap-2 pl-5"
              style={{
                listStyleType: "disc",
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                color: "#32404f",
                fontSize: "17px",
                lineHeight: "28px",
              }}
            >
              <li>Reduced inconsistencies across shared experiences</li>
              <li>Improved clarity around rewards and status systems</li>
              <li>Increased efficiency when building and maintaining components</li>
              <li>Reduced design and QA overhead across teams</li>
              <li>Created stronger alignment between design and development</li>
            </ul>

            <h3
              className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-6"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
            >
              Measurable impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-8 border-y border-[rgba(50,64,79,0.1)]">
              <Stat
                value="41%"
                label="Reduction in usability issues across heuristic evaluations"
              />
              <Stat
                value="67%"
                label="Reduction in design-QA time on major journeys (16 → 5 days)"
              />
              <Stat
                value="124"
                label="Design hours saved on a single project — ~279 dev-hours"
              />
              <Stat
                value="10+"
                label="Markets running on a single component library"
              />
              <Stat
                value="2 yrs"
                label="Before the US and UK design teams aligned to the system"
              />
            </div>
          </section>

          {/* 06 — Reflection */}
          <section id="reflection" className="scroll-mt-10">
            <div
              className="text-[13px] uppercase leading-[20px] mb-4"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: "#e65f2e",
                letterSpacing: "0.5px",
              }}
            >
              06 — Reflection
            </div>
            <h2
              className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
            >
              Designing for systems, not just screens
            </h2>
            <div
              className="flex flex-col gap-5"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                color: "#32404f",
                fontSize: "17px",
                lineHeight: "28px",
              }}
            >
              <p>
                This project taught me a lot about designing beyond
                individual screens and thinking about the wider ecosystem
                around a product.
              </p>
              <p>The end-user wasn&apos;t the only audience. I also had to think about:</p>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{ listStyleType: "disc" }}
              >
                <li>the regional teams inheriting and localising the product</li>
                <li>the designers and developers consuming the system</li>
                <li>
                  and the realities of multiple teams building in parallel
                  under different constraints
                </li>
              </ul>
              <p>
                I learned pretty quickly that good system design isn&apos;t
                about making everything identical.
              </p>
              <p>
                It&apos;s about creating enough structure for teams to move
                efficiently, while still leaving room for flexibility where
                it matters.
              </p>
              <p>
                At enterprise scale, design system maturity becomes less
                about creating shiny new components and more about
                governance, reuse, documentation, and knowing when existing
                patterns are no longer enough.
              </p>
              <p>Because eventually, new constraints arrive.</p>
              <p>
                AI features get introduced. Markets diverge. Multiple dev
                teams start building simultaneously. What once felt scalable
                suddenly starts showing cracks.
              </p>
              <p>That&apos;s when systems need to evolve.</p>
              <p>
                The hardest design problems usually aren&apos;t visual.
                They&apos;re structural.
              </p>
              <p>
                And at this scale, design systems stop being about
                consistency alone.
              </p>
            </div>

            <Pullquote>
              They become about making variation survivable.
            </Pullquote>

            <div
              className="flex flex-col gap-5 mt-6"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                color: "#32404f",
                fontSize: "17px",
                lineHeight: "28px",
              }}
            >
              <p>
                Honestly, those are the kinds of problems I enjoy solving
                most.
              </p>
            </div>
          </section>
        </div>

        {/* Next / back link */}
        <section className="px-6 pb-24 max-w-[900px] w-full">
          <Link
            href="/"
            className="flex items-center gap-2 text-[15px] uppercase leading-[22.5px]"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 500,
              color: "#32404f",
            }}
          >
            <BackArrow />
            Back to all work
          </Link>
        </section>
        </main>
      </div>

      {/* Footer — matches home */}
      <footer
        className="flex items-center justify-between px-6 py-[20px]"
        style={{ borderTop: "1px solid rgba(50,64,79,0.1)" }}
      >
        <div className="flex items-center gap-1">
          <span
            className="text-[15px] uppercase leading-[22.5px]"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 400,
              color: "rgba(50,64,79,0.58)",
            }}
          >
            Designed with
          </span>
          <HeartIcon />
          <span
            className="text-[15px] uppercase leading-[22.5px]"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 400,
              color: "rgba(50,64,79,0.58)",
            }}
          >
            by Gen • Cape Town
          </span>
          <SaFlagIcon />
        </div>
      </footer>
    </div>
  );
}

/* ----- section primitives ----- */

function Section({
  eyebrow,
  title,
  paragraphs,
}: {
  eyebrow?: string;
  title?: string;
  paragraphs: string[];
}) {
  return (
    <section>
      {eyebrow && (
        <div
          className="text-[13px] uppercase leading-[20px] mb-4"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 500,
            color: "#e65f2e",
            letterSpacing: "0.5px",
          }}
        >
          {eyebrow}
        </div>
      )}
      {title && (
        <h2
          className="text-[36px] leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
          style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
        >
          {title}
        </h2>
      )}
      <div
        className="flex flex-col gap-5"
        style={{
          fontFamily: "var(--font-geist-sans)",
          fontWeight: 400,
          color: "#32404f",
          fontSize: "17px",
          lineHeight: "28px",
        }}
      >
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function Aside({ children }: { children: React.ReactNode }) {
  return (
    <aside
      className="px-6 py-6"
      style={{
        background: "rgba(50,64,79,0.04)",
        borderLeft: "2px solid rgba(50,64,79,0.2)",
        fontFamily: "var(--font-geist-sans)",
        fontSize: "16px",
        lineHeight: "26px",
        color: "rgba(50,64,79,0.85)",
      }}
    >
      {children}
    </aside>
  );
}

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="py-4 mt-10"
      style={{
        fontFamily: "var(--font-tiempos)",
        fontWeight: 300,
        fontStyle: "italic",
        fontSize: "26px",
        lineHeight: "36px",
        color: "#32404f",
        borderLeft: "2px solid #e65f2e",
        paddingLeft: "24px",
      }}
    >
      {children}
    </blockquote>
  );
}

function Placeholder({
  caption,
  ratio,
}: {
  caption: string;
  ratio: string;
}) {
  return (
    <figure className="flex flex-col gap-3">
      <div
        className="w-full bg-[#f4f7f9] flex items-center justify-center"
        style={{
          aspectRatio: ratio,
          border: "1px solid rgba(50,64,79,0.1)",
        }}
      >
        <span
          className="text-[13px] uppercase"
          style={{
            fontFamily: "var(--font-geist-mono)",
            color: "rgba(50,64,79,0.4)",
            letterSpacing: "0.5px",
          }}
        >
          Visual placeholder
        </span>
      </div>
      <figcaption
        className="text-[14px] leading-[22px]"
        style={{
          fontFamily: "var(--font-geist-sans)",
          color: "rgba(50,64,79,0.58)",
          fontStyle: "italic",
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="text-[40px] leading-[44px] text-[#32404f]"
        style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
      >
        {value}
      </div>
      <div
        className="text-[13px] uppercase leading-[20px]"
        style={{
          fontFamily: "var(--font-geist-mono)",
          color: "rgba(50,64,79,0.58)",
          letterSpacing: "0.3px",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function BackArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 3L5 8l5 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-1"
      aria-hidden="true"
    >
      <path
        d="M7.5 13C7.5 13 1.5 9.2 1.5 5a3 3 0 0 1 6-0.4A3 3 0 0 1 13.5 5c0 4.2-6 8-6 8Z"
        stroke="rgba(50,64,79,0.58)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
