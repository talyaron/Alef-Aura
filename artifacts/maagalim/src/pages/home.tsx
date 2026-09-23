import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  Leaf,
  Menu,
  Play,
  Plus,
  Quote,
  X,
} from "lucide-react";

const navItems = [
  { label: "החזון", id: "vision" },
  { label: "מה זה מייצר", id: "creates" },
  { label: "איך זה עובד", id: "how" },
  { label: "מדיה", id: "media" },
  { label: "קהילה", id: "community" },
  { label: "אקדמיה", id: "academia" },
  { label: "הצוות", id: "teams" },
];

const AnimatedSection = ({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id: string;
}) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-90px" }}
    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.section>
);

const Logo = ({ light = false }: { light?: boolean }) => (
  <a
    href="#top"
    data-testid={light ? "link-footer-logo" : "link-header-logo"}
    className="group flex items-center gap-3"
    aria-label="1000 מעגלים — חזרה לראש העמוד"
  >
    <span className="relative flex h-10 w-10 items-center justify-center">
      <span className={`absolute inset-0 rounded-full border ${light ? "border-[#C8CEB9]/70" : "border-[#69735A]"}`} />
      <span className={`absolute inset-[5px] rounded-full border ${light ? "border-[#D99A70]" : "border-[#C76D45]"}`} />
      <span className={`absolute inset-[11px] rounded-full ${light ? "bg-[#D99A70]" : "bg-[#26382D]"} transition-transform duration-300 group-hover:scale-125`} />
    </span>
    <span className={`font-display text-[1.18rem] font-bold leading-none ${light ? "text-[#F7F3E9]" : "text-[#26382D]"}`}>
      1000 מעגלים
    </span>
  </a>
);

const OliveBranchArt = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 420 190"
    className={className}
    role="img"
    aria-label="ענף עץ זית"
  >
    <path
      d="M28 158C116 142 170 104 214 70C263 33 319 21 390 29"
      fill="none"
      stroke="#69735A"
      strokeWidth="6"
      strokeLinecap="round"
    />
    {[
      { x: 83, y: 139, r: -31 },
      { x: 116, y: 122, r: 26 },
      { x: 151, y: 101, r: -34 },
      { x: 185, y: 78, r: 28 },
      { x: 224, y: 58, r: -31 },
      { x: 262, y: 43, r: 30 },
      { x: 304, y: 32, r: -25 },
      { x: 345, y: 28, r: 25 },
    ].map((leaf, index) => (
      <g key={index} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`}>
        <path
          d="M0 0C12-25 40-31 57-16C45 10 20 15 0 0Z"
          fill={index % 2 === 0 ? "#69735A" : "#8E987D"}
        />
        <path d="M5-2C21-9 35-13 50-15" fill="none" stroke="#F7F3E9" strokeWidth="1.6" opacity=".55" />
      </g>
    ))}
    <g fill="#26382D">
      <ellipse cx="197" cy="92" rx="8" ry="12" transform="rotate(25 197 92)" />
      <ellipse cx="249" cy="58" rx="8" ry="12" transform="rotate(-18 249 58)" />
      <ellipse cx="326" cy="35" rx="8" ry="12" transform="rotate(19 326 35)" />
    </g>
  </svg>
);

const Nav = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-[#D8D1C1]/85 bg-[#F7F3E9]/95 backdrop-blur-md">
      <nav aria-label="ניווט ראשי" className="section-wrap flex min-h-[78px] items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-testid={`link-nav-${item.id}`}
              className="relative py-2 text-[0.9rem] font-semibold text-[#687067] transition-colors hover:text-[#26382D] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-[#C76D45] after:transition-transform hover:after:origin-left hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#join"
          data-testid="link-nav-fund"
          className="hidden rounded-full bg-[#C76D45] px-5 py-2.5 text-sm font-bold text-[#F7F3E9] shadow-[0_7px_18px_rgba(199,109,69,.18)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
        >
          סיוע במימון
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          data-testid="button-mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D1C1] text-[#26382D] lg:hidden"
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          <span className="sr-only">{open ? "סגירת תפריט" : "פתיחת תפריט"}</span>
        </button>
      </nav>
      {open && (
        <div id="mobile-navigation" className="border-t border-[#D8D1C1] bg-[#F7F3E9] px-4 pb-5 pt-3 lg:hidden">
          <div className="section-wrap flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-testid={`link-mobile-nav-${item.id}`}
                onClick={closeMenu}
                className="border-b border-[#D8D1C1]/70 py-3 text-base font-semibold text-[#26382D]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              data-testid="link-mobile-nav-fund"
              onClick={closeMenu}
              className="mt-3 inline-flex w-fit rounded-full bg-[#C76D45] px-5 py-2.5 text-sm font-bold text-[#F7F3E9]"
            >
              סיוע במימון
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="paper-grain relative overflow-hidden bg-[#F7F3E9]">
    <div className="relative mx-auto min-h-[760px] max-w-[1440px] overflow-hidden md:min-h-[690px]">
      <img
        src="/maagalim-circle-reference.jpeg"
        alt="מעגל שיח — אנשים מדברים יחד בשמחה"
        data-testid="img-hero-dialogue"
        className="absolute inset-0 h-full w-full object-cover object-[48%_center] md:object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,#F7F3E9_0%,rgba(247,243,233,0.9)_48%,rgba(247,243,233,0.3)_76%,transparent_100%)] md:bg-[linear-gradient(to_left,#F7F3E9_0%,rgba(247,243,233,0.96)_30%,rgba(247,243,233,0.72)_50%,rgba(247,243,233,0.18)_68%,transparent_82%)]"
        aria-hidden="true"
      />
      <OliveBranchArt className="pointer-events-none absolute -left-14 -top-8 w-[300px] -rotate-12 opacity-55 md:w-[420px]" />
      <OliveBranchArt className="pointer-events-none absolute -bottom-12 -right-16 w-[260px] -scale-x-100 opacity-25 md:-bottom-8 md:-right-10 md:w-[360px]" />
      <div className="relative z-10 flex min-h-[760px] items-end px-6 py-12 sm:px-10 md:min-h-[690px] md:items-center md:px-12 md:py-16 lg:px-20">
        <div className="w-full max-w-[560px] md:mr-0 md:ml-auto">
          <p className="font-display text-[clamp(1.45rem,2.5vw,2.2rem)] font-semibold leading-[1.25] text-[#29342E]">
            מיזם חברתי לשיח
          </p>
          <h1 className="font-display mt-1 text-[clamp(3.3rem,6.7vw,6.3rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#26382D]">
            מנהיגותי חדש
          </h1>
          <div className="mt-7 h-px w-24 bg-[#69735A]" aria-hidden="true" />
          <p className="mt-7 max-w-lg text-[1.15rem] font-medium leading-[1.8] text-[#29342E] md:text-[1.28rem]">
            חברה שדנה על דרכים לפתרון,<br />
            ולא על מי צודק.<br />
            שבה ההסכמה היא הישג —<br />
            ולא ויתור.
          </p>
          <p className="mt-6 max-w-lg text-base leading-[1.85] text-[#687067]">
            1000 מעגלי שיח. 12 נושאים בשנה. אמנות חברתיות שנוצרות יחד — ומעצבות את השיח הציבורי בישראל.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#join"
              data-testid="link-hero-join"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#26382D] px-7 py-3.5 text-base font-bold text-[#F7F3E9] transition-transform hover:-translate-y-1"
            >
              הצטרפו למעגל
              <ArrowLeft size={18} aria-hidden="true" />
            </a>
            <a
              href="#vision"
              data-testid="link-hero-vision"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#26382D] px-7 py-3.5 text-base font-bold text-[#26382D] transition-colors hover:bg-[#EDE7D8]"
            >
              גלו את החזון
              <ChevronLeft size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-9 flex items-center gap-3 text-sm text-[#687067]">
            <Leaf size={18} className="text-[#69735A]" aria-hidden="true" />
            <span>שיחה טובה היא תשתית אזרחית</span>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-[#D8D1C1] bg-[#EDE7D8]">
      <div className="section-wrap grid grid-cols-2 divide-x divide-x-reverse divide-[#D8D1C1] md:grid-cols-4">
        {[
          { number: "1000", text: "מעגלי שיח ברחבי הארץ" },
          { number: "12", text: "נושאים בשנה" },
          { number: "1", text: "אמנה חברתית משותפת" },
          { number: "∞", text: "הצבעה ישירה על הנושא הבא" },
        ].map((stat, index) => (
          <div key={stat.text} data-testid={`stat-hero-${index}`} className="px-3 py-5 text-center md:px-6 md:py-7">
            <span className="font-display block text-3xl font-bold text-[#26382D] md:text-4xl">{stat.number}</span>
            <span className="mt-1 block text-xs font-medium leading-snug text-[#687067] md:text-sm">{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Vision = () => (
  <AnimatedSection id="vision" className="relative overflow-hidden bg-[#FFFFFF] py-24 md:py-32">
    <div className="section-wrap grid items-center gap-14 md:grid-cols-[.85fr_1.15fr] md:gap-24">
      <div className="relative order-2 md:order-1">
        <div className="relative aspect-[6/5] overflow-hidden rounded-[2rem_6rem_2rem_6rem] bg-[#EDE7D8] shadow-[0_18px_40px_rgba(38,56,45,.12)]">
          <img
            src="/olive-landscape-reference.jpeg"
            alt="נוף ישראלי בין ענפי זית ובמרכזו מעגל שיח"
            data-testid="img-vision-landscape"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#F7F3E9]/92 px-5 py-4 backdrop-blur-sm">
            <p className="font-display text-xl font-semibold leading-[1.45] text-[#26382D] md:text-2xl">
              מקשיבים לקולות השונים.<br />
              מוצאים את הקרקע המשותפת.
            </p>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <span className="eyebrow">החזון</span>
        <h2 className="font-display mt-4 max-w-2xl text-[clamp(2.3rem,5vw,4.35rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#26382D]">
          בונים חברה<br /><span className="text-[#69735A]">מטפחת הסכמות</span>
        </h2>
        <blockquote className="relative mt-9 border-r-2 border-[#C76D45] pr-6 text-[1.35rem] font-semibold leading-[1.55] text-[#29342E] md:text-[1.6rem]">
          <Quote size={28} className="absolute -right-3 -top-5 bg-[#FFFFFF] text-[#C76D45]" aria-hidden="true" />
          חברה שדנה על דרכים לפתרון, ולא על מי צודק. שבה ההסכמה היא הישג — ולא ויתור.
        </blockquote>
        <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.9] text-[#687067]">
          <p data-testid="text-vision-purpose">
            אנו מבקשים לעורר תרבות שיח על ידי הנחלת שיח מכבד, פתוח ומפרה. דרך הקשבה אמיתית אנחנו מעוררים שותפות ורצון טוב — ומספקים יחד מוטיבציה ויצירתיות למצוא פתרונות משותפים, ליזום מתוך אכפתיות, ולפעול בשיתוף פעולה למען מטרה משותפת.
          </p>
        </div>
      </div>
    </div>
    <div className="section-wrap mt-16 md:mt-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#C8CEB9] bg-[#F7F3E9] px-7 py-11 text-center shadow-[0_18px_45px_rgba(38,56,45,.08)] md:px-16 md:py-14">
        <OliveBranchArt className="pointer-events-none absolute -left-12 -top-10 w-56 -rotate-12 opacity-25 md:w-72" />
        <span className="eyebrow relative">המטרה שלנו</span>
        <p className="font-display relative mx-auto mt-5 max-w-5xl text-[clamp(1.45rem,2.6vw,2.25rem)] font-semibold leading-[1.65] text-[#26382D]">
          להעמיק לכל אדם את הכלים וההשראה לדבר בגובה העיניים — ללא שמץ של ביטול או הקטנה. לטפח דיבור מכבד, להצית את המוטיבציה לתשובה משותפת, ולעודד יוזמה חיובית — ליזום למען, ליזום מתוך הקשבה, וליזום יחד.
        </p>
      </div>
    </div>
  </AnimatedSection>
);

const WhatItCreates = () => {
  const principles = [
    { num: "01", title: "חיבור בין קצוות", desc: "מעגלים שמפגישים אנשים מקצוות מנוגדים של המפה — סביב שאלה אחת משותפת, ולא סביב קיטוב פוליטי." },
    { num: "02", title: "פוליטיקה של פתרונות", desc: "המיקוד עובר משאלת 'מי צודק' לשאלת 'מה עושים' — ומייצר הסכמות ישימות במקום מלחמות זהות." },
    { num: "03", title: "תרבות שיח חדשה", desc: "הקשבה, סקרנות, אמפטיה והכרעה משותפת הופכים מערך מופשט לפרקטיקה שכל אחד יכול לתרגל." },
    { num: "04", title: "השפעה ציבורית", desc: "האמנה החברתית אינה נשארת בחדר — היא מתועדת, מפורסמת, ומניעה את השיח הציבורי בישראל." },
  ];

  return (
    <AnimatedSection id="creates" className="relative overflow-hidden bg-[#26382D] py-24 text-[#F7F3E9] md:py-32">
      <div className="olive-branch left-[-15px] top-16 opacity-40 md:left-16" aria-hidden="true" />
      <div className="section-wrap relative">
        <div className="grid items-end gap-8 border-b border-[#69735A]/60 pb-12 md:grid-cols-[.8fr_1.2fr] md:gap-20">
          <p className="max-w-sm text-base leading-[1.85] text-[#C8CEB9]">
            1000 מעגלים אינו עוד ערוץ דעות — זוהי תשתית לתרבות שיח חדשה, שבה ההסכמה היא הישג ולא ויתור.
          </p>
          <div>
            <span className="eyebrow text-[#D99A70]">מה זה מייצר</span>
            <h2 className="font-display mt-4 max-w-3xl text-[clamp(2.3rem,5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
              מפוליטיקה של זהויות —<br /><span className="text-[#D99A70]">לפוליטיקה של פתרונות</span>
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[#69735A]/70 bg-[#69735A]/50 md:grid-cols-2">
          {principles.map((principle) => (
            <article key={principle.num} data-testid={`card-principle-${principle.num}`} className="soft-lift bg-[#26382D] p-7 md:p-10">
              <span className="font-display text-4xl font-bold text-[#69735A]">{principle.num}</span>
              <h3 className="font-display mt-7 text-2xl font-bold text-[#F7F3E9]">{principle.title}</h3>
              <p className="mt-3 max-w-md text-base leading-[1.85] text-[#C8CEB9]">{principle.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "מעגל פתיחה מצולם", desc: "מעגל מצולם עם אנשי ציבור ומובילי דעה פותח את הנושא ומעלה אותו לסדר היום." },
    { title: "מעגלים ברחבי הארץ", desc: "1,000 מעגלים נפתחים בקהילות בכל הארץ, בליווי מנחים מיומנים." },
    { title: "פתרונות הופכים לאמנות", desc: "מתוך המעגלים עולים פתרונות שמתגבשים לכדי אמנות חברתיות." },
    { title: "דיון ציבורי ואמנה אחת", desc: "מתנהל דיון ציבורי על האמנות, ומתוכן מתגבשת אמנה חברתית אחת." },
    { title: "מנהיגי ציבור מגיבים", desc: "מנהיגי ציבור מוזמנים להתייחס לאמנה שנוצרה — במעמד מצולם המשודר לציבור." },
    { title: "בוחרים את הנושא הבא", desc: "הקהל והמשתתפים בוחרים את הנושא הבא שייכנס למעגלים, והמחזור מתחדש." },
  ];
  const desktopPositions = [
    "left-1/2 top-0 -translate-x-1/2",
    "right-0 top-[18%]",
    "right-[6%] bottom-[8%]",
    "left-1/2 bottom-0 -translate-x-1/2",
    "left-[6%] bottom-[8%]",
    "left-0 top-[18%]",
  ];

  return (
    <AnimatedSection id="how" className="relative overflow-hidden bg-[#EDE7D8] py-24 md:py-32">
      <div className="section-wrap">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="eyebrow">המתודולוגיה · איך נראה פורמט המעגל</span>
          <h2 className="font-display mt-4 text-[clamp(2.3rem,5vw,4.1rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#26382D]">
            בכל חודש נושא חדש —<br /><span className="text-[#69735A]">וכל הארץ מדברת עליו</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-[1.08rem] leading-[1.85] text-[#586259]">
            בכל חודש נבחר נושא משותף חדש. באותו זמן מתקיימים ברחבי הארץ 1,000 מעגלי שיח באותו פורמט — מקשיבים, מנסחים פתרונות ומחברים את הקולות המקומיים להשפעה ארצית.
          </p>
        </div>

        <div className="grid gap-4 md:hidden">
          {steps.map((step, index) => (
            <article key={step.title} data-testid={`card-step-${index + 1}`} className="flex gap-5 rounded-2xl border border-[#D8D1C1] bg-[#F7F3E9] p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#26382D] font-display text-lg font-bold text-[#F7F3E9]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#26382D]">{step.title}</h3>
                <p className="mt-1 text-[0.95rem] leading-[1.75] text-[#687067]">{step.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative mx-auto hidden h-[760px] max-w-[1120px] md:block">
          <div className="absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#69735A]/55" aria-hidden="true" />
          <div className="absolute left-1/2 top-1/2 flex h-60 w-60 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#26382D] px-7 text-center text-[#F7F3E9] shadow-[0_22px_50px_rgba(38,56,45,.2)]">
            <span className="font-display text-5xl font-bold">1,000</span>
            <span className="mt-2 text-lg font-bold">מעגלים</span>
            <span className="mt-3 border-t border-[#C8CEB9]/45 pt-3 text-sm leading-relaxed text-[#C8CEB9]">נושא חודשי אחד<br />שיח ארצי משותף</span>
          </div>
          {steps.map((step, index) => (
            <article key={step.title} data-testid={`card-step-desktop-${index + 1}`} className={`absolute w-[270px] rounded-[1.5rem] border border-[#D8D1C1] bg-[#F7F3E9] p-5 shadow-[0_12px_30px_rgba(38,56,45,.08)] ${desktopPositions[index]}`}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C76D45] font-display text-base font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-lg font-bold leading-tight text-[#26382D]">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-[1.65] text-[#687067]">{step.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex gap-4 rounded-2xl border border-[#C8CEB9] bg-[#F7F3E9] p-6">
          <Leaf className="mt-1 shrink-0 text-[#69735A]" size={22} aria-hidden="true" />
          <div>
            <p className="font-semibold text-[#26382D]">הקשבה, כבוד, ויצירתיות משותפת — אלו לא רק ערכים, אלא כלים שנלמדים ומתורגלים בכל מעגל.</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Media = () => {
  const [playing, setPlaying] = useState(false);
  const items = [
    { title: "פרק טלוויזיה מלא", desc: "תיעוד מעמיק של המעגל — מהמחלוקת ועד האמנה." },
    { title: "טיזרים", desc: "קטעים קצרים לרשת שמזמינים את הקהל פנימה." },
    { title: "תקציר הפרק", desc: "סיכום נגיש של הנושא, התהליך וההסכמות." },
    { title: "הד ציבורי", desc: "מחבר בין המעגל לשיח הלאומי ומציג את השפעתו על מקבלי ההחלטות." },
  ];

  return (
    <AnimatedSection id="media" className="bg-[#FFFFFF] py-24 md:py-32">
      <div className="section-wrap grid items-center gap-14 md:grid-cols-[1.05fr_.95fr] md:gap-20">
        <div>
          <span className="eyebrow">איך זה נראה במדיה</span>
          <h2 className="font-display mt-4 text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#26382D]">מהמעגל<br /><span className="text-[#C76D45]">אל המסך</span></h2>
          <div className="mt-10 divide-y divide-[#D8D1C1] border-y border-[#D8D1C1]">
            {items.map((item, index) => (
              <div key={item.title} data-testid={`media-item-${index}`} className="flex gap-4 py-5">
                <span className="font-display text-xl font-bold text-[#C76D45]">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#26382D]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-[1.7] text-[#687067]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#C8CEB9] md:-inset-6" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#26382D]">
            <img src="/maagalim-circle-reference.jpeg" alt="אנשים משתתפים במעגל שיח" data-testid="img-media-circle" className="h-full w-full object-cover object-center opacity-80" />
            <div className="absolute inset-0 bg-[#26382D]/45" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                type="button"
                data-testid="button-media-play"
                onClick={() => setPlaying((value) => !value)}
                aria-label={playing ? "השהיית הפרק" : "הפעלת הפרק"}
                className="flex h-20 w-20 items-center justify-center rounded-full border border-[#F7F3E9] bg-[#F7F3E9]/15 text-[#F7F3E9] backdrop-blur-sm transition-transform hover:scale-105"
              >
                {playing ? <span className="font-bold text-xl" aria-hidden="true">Ⅱ</span> : <Play size={29} fill="currentColor" className="mr-[-3px]" aria-hidden="true" />}
              </button>
              <span className="mt-6 rounded-full border border-[#F7F3E9]/50 px-3 py-1 text-xs font-bold text-[#F7F3E9]">הפיילוט הקרוב</span>
              <span className="mt-2 text-sm text-[#EDE7D8]">{playing ? "הפרק מתנגן · בקרוב" : "פרק מלא · בקרוב"}</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Community = () => (
  <AnimatedSection id="community" className="bg-[#C8CEB9] py-24 md:py-32">
    <div className="section-wrap">
      <div className="grid items-end gap-7 border-b border-[#69735A]/45 pb-10 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <span className="eyebrow">איך זה נראה בקהילה</span>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(2.3rem,5vw,4.1rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#26382D]">הכוח של המעגל —<br /><span className="text-[#69735A]">איכות המנחים</span></h2>
        </div>
        <p className="max-w-sm text-base leading-[1.85] text-[#4f5e51]">המעגל נשען על אנשים שיודעים להחזיק מורכבות, לשאול שאלה טובה, ולתת לקבוצה ליצור יחד.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          { title: "מנחים ואיכות", bullets: ["מנחים מיומנים שמובילים את המעגל", "סטנדרט אחיד לאיכות ההנחיה", "ליווי ומשוב לאורך התהליך"] },
          { title: "הכשרה ולמידה", bullets: ["מסלול הכשרה למנחים חדשים", "הכשרה מתפתחת — משתפרת מסבב לסבב", "למידת עמיתים בין מעגלים"] },
          { title: "הקהל", bullets: ["הכנה להנהגה מעגלית בקהילה", "הכנה לדמוקרטיה דיונית (דליברטיבית)", "הוספת מעגלים"] },
        ].map((card, index) => (
          <article key={card.title} data-testid={`card-community-${index}`} className="soft-lift rounded-[1.75rem] bg-[#F7F3E9] p-7 md:p-8">
            <div className="mb-7 flex items-center justify-between border-b border-[#D8D1C1] pb-5">
              <h3 className="font-display text-2xl font-bold text-[#26382D]">{card.title}</h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D99A70]/35 text-[#C76D45]"><Plus size={17} aria-hidden="true" /></span>
            </div>
            <ul className="space-y-4">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-[0.98rem] leading-[1.7] text-[#687067]">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C76D45]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const Academia = () => (
  <AnimatedSection id="academia" className="bg-[#F7F3E9] py-24 md:py-32">
    <div className="section-wrap">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="eyebrow">אקדמיה ושיתופי פעולה</span>
          <h2 className="font-display mt-4 max-w-3xl text-[clamp(2.3rem,5vw,4.1rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#26382D]">מבוסס מחקר —<br /><span className="text-[#69735A]">מחובר לשטח</span></h2>
        </div>
        <p className="max-w-xs text-base leading-[1.8] text-[#687067]">המעגלים הם מרחב חי לניסוי, למידה, מדידה ושיפור.</p>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-12">
        {[
          { title: "מחקר", desc: "מחקרים לשיפור הדמוקרטיה הדיונית ומדידת ההשפעה.", span: "md:col-span-5" },
          { title: "שיתופי פעולה", desc: "עבודה משותפת עם אקדמיה וארגוני חברה אזרחית.", span: "md:col-span-7" },
          { title: "שותפים בשטח", desc: "ארגונים ורשויות כקרקע פעילה.", span: "md:col-span-12" },
        ].map((item, index) => (
          <article key={item.title} data-testid={`card-academia-${index}`} className={`soft-lift ${item.span} rounded-[1.5rem] border border-[#D8D1C1] bg-[#FFFFFF] p-7 md:p-9`}>
            <span className="font-display text-5xl font-semibold text-[#D99A70]/70">0{index + 1}</span>
            <h3 className="font-display mt-7 text-2xl font-bold text-[#26382D]">{item.title}</h3>
            <p className="mt-2 max-w-lg text-base leading-[1.8] text-[#687067]">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const Team = () => {
  const teams = [
    { name: "צוות ההקמה", members: [{ name: "לירז סיאני לופז", role: "הקמה" }, { name: "עירן הלוי", role: "הקמה · הכשרת מנחים" }, { name: "טל ירון", role: "הקמה · מתודולוגיה" }, { name: "איילת יונס", role: "הקמה" }] },
    { name: "צוות הפיילוט", members: [{ name: "רחל עזריה", role: "" }, { name: "מיכאל מירו", role: "" }, { name: "קרן אשכנזי", role: "" }, { name: "נגה ארבל", role: "" }, { name: "יאיר אנסבכר", role: "" }] },
    { name: "צוות הצילום", members: [{ name: "לירז סיאני לופז", role: "צילום" }, { name: "ליאור פז", role: "צילום · כאן 11" }] },
  ];

  return (
    <AnimatedSection id="teams" className="relative overflow-hidden bg-[#26382D] py-24 text-[#F7F3E9] md:py-32">
      <div className="olive-branch right-[-20px] top-20 -scale-x-100 opacity-35 md:right-16" aria-hidden="true" />
      <div className="section-wrap">
        <div className="mb-14">
          <span className="eyebrow text-[#D99A70]">הצוות</span>
          <h2 className="font-display mt-4 text-[clamp(2.3rem,5vw,4.1rem)] font-semibold leading-[1.08] tracking-[-0.035em]">מי מאחורי<br /><span className="text-[#C8CEB9]">המעגלים</span></h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {teams.map((team, index) => (
            <div key={team.name} data-testid={`team-group-${index}`}>
              <h3 className="mb-5 border-b border-[#69735A] pb-4 font-display text-xl font-bold text-[#D99A70]">{team.name}</h3>
              <div className="space-y-3">
                {team.members.map((member, memberIndex) => (
                  <div key={`${team.name}-${member.name}`} data-testid={`team-member-${index}-${memberIndex}`} className="flex items-center gap-3 rounded-xl border border-[#69735A]/65 bg-[#314638] px-3 py-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D99A70] font-display font-bold text-[#26382D]">{member.name.charAt(0)}</div>
                    <div>
                      <span className="block text-sm font-bold">{member.name}</span>
                      {member.role && <span className="mt-0.5 block text-xs text-[#C8CEB9]">{member.role}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const CTA = () => (
  <section id="join" className="relative overflow-hidden bg-[#C76D45] py-24 text-[#F7F3E9] md:py-32">
    <div className="absolute -left-28 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-[#F7F3E9]/20 md:h-[520px] md:w-[520px]" aria-hidden="true" />
    <div className="absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-[#F7F3E9]/25 md:left-16 md:h-80 md:w-80" aria-hidden="true" />
    <div className="section-wrap relative">
      <div className="max-w-3xl">
        <span className="eyebrow text-[#F7F3E9]">הצטרפו אלינו</span>
        <h2 className="font-display mt-5 text-[clamp(2.5rem,6vw,5.2rem)] font-semibold leading-[1.05] tracking-[-0.04em]">כל שינוי גדול<br /><span className="text-[#26382D]">מתחיל במעגל אחד</span></h2>
        <p className="mt-7 max-w-2xl text-lg leading-[1.85] text-[#F7F3E9]/90">
          אנחנו יחד בונים תרבות שיח שמאפשרת לכולנו להקשיב, להתווכח על פתרונות, ולכתוב יחד את הכללים שלפיהם נבחר לחיות. הצעד הראשון — מעגל אחד.
        </p>
      </div>
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "הצטרפו למעגל", sub: "השתתפות בדיון קהילתי", href: "#community" },
          { label: "היו מנחה", sub: "הכשרה והובלת מעגלים", href: "#community" },
          { label: "הציעו נושא", sub: "עצבו את סדר היום", href: "mailto:hello@1000maagalim.org" },
          { label: "שיתוף פעולה", sub: "ארגונים ושותפים", href: "#academia" },
        ].map((action, index) => (
          <a key={action.label} href={action.href} data-testid={`link-join-action-${index}`} className="group rounded-2xl border border-[#F7F3E9]/45 bg-[#F7F3E9]/10 p-5 transition-colors hover:bg-[#F7F3E9]/20">
            <span className="block font-bold">{action.label}</span>
            <span className="mt-1 block text-sm text-[#F7F3E9]/75">{action.sub}</span>
            <ArrowLeft size={18} className="mt-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a href="mailto:hello@1000maagalim.org?subject=סיוע במימון" data-testid="link-cta-fund" className="inline-flex items-center justify-center rounded-full bg-[#26382D] px-8 py-3.5 font-bold text-[#F7F3E9] transition-transform hover:-translate-y-1">סיוע במימון</a>
        <a href="mailto:hello@1000maagalim.org" data-testid="link-cta-contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F7F3E9] px-8 py-3.5 font-bold text-[#F7F3E9] transition-colors hover:bg-[#F7F3E9]/10">דברו איתנו <ChevronLeft size={18} aria-hidden="true" /></a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#26382D] py-10 text-[#C8CEB9]">
    <div className="section-wrap flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <Logo light />
      <p data-testid="text-footer-tagline" className="text-sm">מיזם חברתי לשיח מנהיגותי חדש</p>
      <a href="#top" data-testid="link-footer-top" className="text-sm font-semibold text-[#D99A70] transition-colors hover:text-[#F7F3E9]">חזרה למעלה ↑</a>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div dir="rtl" className="min-h-[100dvh] bg-[#F7F3E9] font-body text-[#29342E]">
      <Nav />
      <main>
        <Hero />
        <Vision />
        <WhatItCreates />
        <HowItWorks />
        <Media />
        <Community />
        <Academia />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}