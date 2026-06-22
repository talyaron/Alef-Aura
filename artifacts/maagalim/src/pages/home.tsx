import React from "react";
import { motion } from "framer-motion";
import { Play, ChevronLeft } from "lucide-react";
import { Link } from "wouter";

const AnimatedSection = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => {
  return (
    <motion.section
      id={id}
      className={`py-24 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

const Nav = () => (
  <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-primary/20">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Concentric rings logo glyph */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-primary/40"></div>
          <div className="absolute inset-1 rounded-full border border-accent/40"></div>
          <div className="absolute inset-2 rounded-full bg-primary"></div>
        </div>
        <span className="font-bold text-lg tracking-tight text-foreground">1000 מעגלים</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        {["החזון", "איך זה עובד", "מדיה", "קהילה", "אקדמיה", "הצוות"].map((item) => (
          <a key={item} href={`#${item === 'החזון' ? 'vision' : item === 'איך זה עובד' ? 'how' : item === 'מדיה' ? 'media' : item === 'קהילה' ? 'community' : item === 'אקדמיה' ? 'academia' : 'teams'}`} 
             className="hover:text-primary transition-colors relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(230,162,60,0.3)] hover:shadow-[0_0_20px_rgba(230,162,60,0.5)]">
        סיוע במימון
      </button>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden border-b border-primary/20">
      {/* Background Ripples */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        {[0, 1.6, 3.2, 4.8, 6.4].map((delay, i) => (
          <div 
            key={i}
            className={`absolute w-64 h-64 rounded-full border ${i % 2 === 0 ? 'border-primary' : 'border-accent'} ripple-ring`}
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl pt-12 pb-24">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-1 bg-accent"></div>
          <span className="text-accent font-bold tracking-widest text-sm uppercase">תנועה אזרחית לשיח מנהיגותי חדש</span>
          <div className="w-12 h-1 bg-accent"></div>
        </div>

        <h1 className="font-bold text-[clamp(3.4rem,11vw,7.6rem)] leading-none tracking-tighter mb-6 bg-gradient-to-b from-white to-accent/80 bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(230,162,60,0.2)]">
          1000 מעגלים
        </h1>
        
        <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
          1000 מעגלי שיח. 12 נושאים בשנה. אמנות חברתיות — שנכתבות על ידי כולנו.
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          אנחנו מחזירים את ההכרעה לידי האזרחים: מעגלי דיון בקהילה שמייצרים הסכמות אמיתיות, מתועדים במסך, והופכים לכוח שמעצב מחדש את השיח הציבורי בישראל.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3.5 rounded-full font-bold text-lg transition-all w-full sm:w-auto shadow-[0_0_15px_rgba(230,162,60,0.3)]">
            סיוע במימון
          </button>
          <button className="flex items-center justify-center gap-2 border border-primary/30 hover:border-primary text-primary px-8 py-3.5 rounded-full font-bold text-lg transition-all w-full sm:w-auto hover:bg-primary/5">
            <span>צפו בפיילוט</span>
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-primary/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            {[
              { num: "1000", text: "מעגלי שיח ברחבי הארץ" },
              { num: "12", text: "נושאים בשנה" },
              { num: "1", text: "אמנה חברתית משותפת" },
              { num: "∞", text: "הצבעה ישירה על הנושא הבא" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center border-l last:border-0 border-primary/10">
                <span className="font-mono font-black text-3xl md:text-4xl text-primary drop-shadow-[0_0_8px_rgba(0,229,195,0.4)] mb-1">{stat.num}</span>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Vision = () => (
  <AnimatedSection id="vision" className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-accent font-bold text-sm tracking-wider mb-2 block">החזון</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">איך תיראה החברה הישראלית אחרי שכל זה יקרה?</h2>
        
        <div className="space-y-6 text-muted-foreground text-lg">
          <p>
            תארו לעצמכם מדינה שבה החלטות גורליות לא מתקבלות רק בחדרים סגורים או באולפני טלוויזיה, אלא מתחילות בקהילות עצמן. אלפי אזרחים מתכנסים באופן קבוע לדון, לשמוע מומחים, להקשיב לעמדות מנוגדות, ולגבש הסכמות.
          </p>
          
          <blockquote className="border-r-4 border-accent pr-6 py-2 text-2xl text-foreground font-bold leading-snug my-8">
            "חברה שמתווכחת על דרכים לפתור, ולא על מי צודק. שבה ההסכמה היא הישג — ולא ויתור."
          </blockquote>
          
          <p>
            אנחנו בונים תשתית שתאפשר לחברה הישראלית לייצר אמנות חברתיות חדשות. לא דרך פוליטיקאים, אלא דרך הציבור עצמו שמכתיב את הכיוון מלמטה למעלה.
          </p>
        </div>
      </div>

      <div className="relative aspect-square max-w-md mx-auto w-full">
        {/* Dial Card */}
        <div className="absolute inset-0 bg-card/40 border border-primary/10 rounded-full backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.5)] flex items-center justify-center p-8">
          <div className="absolute inset-0 rounded-full border border-primary/5"></div>
          <div className="absolute inset-4 rounded-full border border-primary/10"></div>
          <div className="absolute inset-12 rounded-full border border-primary/20"></div>
          
          {/* Numbers 1-12 */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) - 90;
            const radius = 42; // percentage
            const x = 50 + radius * Math.cos(angle * Math.PI / 180);
            const y = 50 + radius * Math.sin(angle * Math.PI / 180);
            const isHighlighted = [1, 4, 7, 10].includes(i + 1);
            
            return (
              <div 
                key={i}
                className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all
                  ${isHighlighted ? 'bg-primary/20 text-primary border border-primary shadow-[0_0_10px_rgba(0,229,195,0.4)]' : 'bg-background/80 text-muted-foreground border border-border/50'}`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {i + 1}
              </div>
            );
          })}

          <div className="text-center z-10 bg-background/90 p-6 rounded-full border border-primary/20 shadow-xl max-w-[200px]">
            <h3 className="font-bold text-primary mb-1">מחזור שנתי של נושאים</h3>
            <p className="text-xs text-muted-foreground">נושא חדש בכל חודש — נבחר על ידי המשתתפים בהצבעה ישירה.</p>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const WhatItCreates = () => {
  const principles = [
    { num: "01", title: "חיבור בין קצוות", desc: "מעגלים שמפגישים אנשים מקצוות מנוגדים של המפה — סביב שאלה אחת משותפת, ולא סביב קיטוב פוליטי." },
    { num: "02", title: "פוליטיקה של פתרונות", desc: "המיקוד עובר משאלת 'מי צודק' לשאלת 'מה עושים' — ומייצר הסכמות ישימות במקום מלחמות זהות." },
    { num: "03", title: "תרבות שיח חדשה", desc: "הקשבה, סקרנות, אמפטיה והכרעה משותפת הופכים מערך מופשט לפרקטיקה שכל אחד יכול לתרגל." },
    { num: "04", title: "השפעה ציבורית", desc: "האמנה החברתית אינה נשארת בחדר — היא מתועדת, מפורסמת, ומניעה את השיח הציבורי בישראל." }
  ];

  return (
    <AnimatedSection id="creates" className="bg-[#030908] border-y border-primary/10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm tracking-wider mb-2 block">מה זה מייצר</span>
          <h2 className="text-3xl md:text-5xl font-bold">מפוליטיקה של זהויות — לפוליטיקה של פתרונות</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {principles.map((p, i) => (
            <div key={i} className="group bg-card/30 border border-primary/10 rounded-2xl p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,229,195,0.1)] hover:-translate-y-1">
              <div className="font-mono text-3xl font-black text-primary/30 group-hover:text-primary transition-colors mb-4">{p.num}</div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "מעגל פתיחה מצולם", desc: "מעגל מצולם עם אנשי ציבור ומובילי דעה פותח את הנושא ומעלה אותו לסדר היום." },
    { title: "מעגלים ברחבי הארץ", desc: "עשרות מעגלים נפתחים בקהילות בכל הארץ, בליווי מנחים מיומנים." },
    { title: "פתרונות הופכים לאמנות", desc: "מתוך המעגלים עולים פתרונות שמתגבשים לכדי אמנות חברתיות." },
    { title: "דיון ציבורי ואמנה אחת", desc: "מתנהל דיון ציבורי על האמנות, ומתוכן מתגבשת אמנה חברתית אחת." },
    { title: "מנהיגי ציבור מגיבים", desc: "מנהיגי ציבור מוזמנים להתייחס לאמנה שנוצרה — במעמד מצולם המשודר לציבור." },
    { title: "בוחרים את הנושא הבא", desc: "הקהל והמשתתפים בוחרים את הנושא הבא שייכנס למעגלים, והמחזור מתחדש." },
  ];

  return (
    <AnimatedSection id="how" className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-accent font-bold text-sm tracking-wider mb-2 block">איך נראה המעגל</span>
        <h2 className="text-3xl md:text-5xl font-bold">מהמעגל — לאמנה — להכרעה הבאה</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center font-mono text-xl font-bold text-primary mb-6 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,229,195,0.4)] transition-all bg-background z-10">
              {i + 1}
            </div>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center max-w-2xl mx-auto">
        <p className="text-primary font-medium text-sm">
          תהליך מעגלי — לא קו ישר. כל סבב מזין את הבא, וההכשרה משתפרת בכל פעם.
        </p>
      </div>
    </AnimatedSection>
  );
};

const Media = () => {
  const items = [
    { title: "פרק טלוויזיה מלא", desc: "תיעוד מעמיק של המעגל — מהמחלוקת ועד האמנה." },
    { title: "טיזרים", desc: "קטעים קצרים לרשת שמזמינים את הקהל פנימה." },
    { title: "תקציר הפרק", desc: "סיכום נגיש של הנושא, התהליך וההסכמות." },
    { title: "נוכחות במדיה", desc: "הד ציבורי שמחבר בין המעגל לשיח הלאומי." },
  ];

  return (
    <AnimatedSection id="media" className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-accent font-bold text-sm tracking-wider mb-2 block">איך זה נראה במדיה</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">מהמעגל אל המסך</h2>
          
          <div className="space-y-6">
            {items.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded bg-card border border-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-mono text-sm mt-1">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/20 bg-card group cursor-pointer shadow-2xl">
          {/* Faux Video Player */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020807] to-primary/10"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform group-hover:bg-accent/40 shadow-[0_0_30px_rgba(230,162,60,0.3)]">
              <Play className="w-8 h-8 text-accent ml-1" fill="currentColor" />
            </div>
            <div className="mt-6 flex flex-col items-center">
              <span className="bg-background/80 px-3 py-1 rounded-full text-xs font-bold border border-primary/30 text-primary mb-2">הפיילוט הקרוב</span>
              <span className="text-sm font-medium tracking-wide">פרק מלא · בקרוב</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Community = () => (
  <AnimatedSection id="community" className="bg-[#030908] border-y border-primary/10">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-accent font-bold text-sm tracking-wider mb-2 block">איך זה נראה בקהילה</span>
        <h2 className="text-3xl md:text-5xl font-bold">הכוח של המעגל — איכות המנחים</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "מנחים ואיכות",
            bullets: ["מנחים מיומנים שמובילים את המעגל", "סטנדרט אחיד לאיכות ההנחיה", "ליווי ומשוב לאורך התהליך"]
          },
          {
            title: "הכשרה ולמידה",
            bullets: ["מסלול הכשרה למנחים חדשים", "הכשרה מתפתחת — משתפרת מסבב לסבב", "למידת עמיתים בין מעגלים"]
          },
          {
            title: "הקהל",
            bullets: ["הכנה להנהגה מעגלית בקהילה", "הכנה לדמוקרטיה דיונית (דליברטיבית)", "הוספת מעגלים"]
          }
        ].map((card, i) => (
          <div key={i} className="bg-card/50 border border-primary/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 pb-4 border-b border-primary/10 text-primary">{card.title}</h3>
            <ul className="space-y-4">
              {card.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const Academia = () => (
  <AnimatedSection id="academia" className="container mx-auto px-4">
    <div className="text-center mb-16">
      <span className="text-accent font-bold text-sm tracking-wider mb-2 block">אקדמיה ושיתופי פעולה</span>
      <h2 className="text-3xl md:text-5xl font-bold">מבוסס מחקר — מחובר לשטח</h2>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "מחקר", desc: "מחקרים לשיפור הדמוקרטיה הדיונית ומדידת ההשפעה." },
        { title: "שיתופי פעולה", desc: "עבודה משותפת עם אקדמיה וארגוני חברה אזרחית." },
        { title: "קצב קבוע", desc: "מפגשים קבועים ותהליכים תקופתיים — מסגרת מתמשכת של למידה והפצה." },
        { title: "שותפים בשטח", desc: "ארגונים ורשויות כקרקע פעילה." }
      ].map((item, i) => (
        <div key={i} className="bg-card border border-primary/10 rounded-xl p-6 hover:-translate-y-1 transition-transform">
          <h3 className="font-bold text-lg mb-3 text-primary">{item.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </AnimatedSection>
);

const Team = () => {
  const teams = [
    {
      name: "צוות ההקמה",
      members: [
        { name: "ליריז סיאני לופז", role: "הקמה" },
        { name: "עירן הלוי", role: "הקמה" },
        { name: "טל ירון", role: "הקמה · מתודולוגיה" },
        { name: "איילת יונס", role: "הקמה" },
      ]
    },
    {
      name: "צוות הפיילוט",
      members: [
        { name: "רחל עזריה", role: "" },
        { name: "מיכאל מירו", role: "" },
        { name: "קרן אשכנזי", role: "" },
        { name: "נגה ארבל", role: "" },
        { name: "יאיר אנסבכר", role: "" },
        { name: "תומר", role: "" },
      ]
    },
    {
      name: "צוות הצילום",
      members: [
        { name: "ליריז סיאני לופז", role: "צילום" },
        { name: "ליאור פז", role: "צילום · כאן 11" },
      ]
    }
  ];

  return (
    <AnimatedSection id="teams" className="bg-[#030908] border-t border-primary/10 pb-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm tracking-wider mb-2 block">הצוות</span>
          <h2 className="text-3xl md:text-5xl font-bold">מי מאחורי המעגלים</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {teams.map((team, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold mb-6 border-b border-primary/20 pb-2 inline-block pr-4 pl-12 text-primary">{team.name}</h3>
              <div className="flex flex-wrap gap-4">
                {team.members.map((member, j) => (
                  <div key={j} className="flex items-center gap-3 bg-card border border-primary/10 rounded-full pr-1.5 pl-5 py-1.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-background text-sm">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold leading-none">{member.name}</span>
                      {member.role && <span className="text-xs text-muted-foreground mt-1 leading-none">{member.role}</span>}
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
  <section id="join" className="py-32 relative overflow-hidden bg-gradient-to-b from-[#030908] to-[#011a15] border-y border-primary/20">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiMwMGU1YzMiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-50"></div>
    
    <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
      <span className="text-accent font-bold text-sm tracking-wider mb-4 block">לאן אנחנו הולכים</span>
      <h2 className="text-4xl md:text-6xl font-bold mb-6">כל שינוי גדול מתחיל במעגל אחד</h2>
      <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
        1000 מעגלים הם הדרך שלנו ללמד חברה שלמה להקשיב, להתווכח על פתרונות, ולכתוב יחד את הכללים שלפיהם נבחר לחיות. זה מתחיל בפיילוט אחד — ובתמיכה שלך.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(230,162,60,0.4)]">
          סיוע במימון
        </button>
        <button className="flex items-center justify-center gap-2 border border-primary hover:bg-primary hover:text-primary-foreground text-primary px-10 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto">
          <span>דברו איתנו</span>
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#020504] py-12 border-t border-primary/10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-primary/40"></div>
          <div className="absolute inset-1 rounded-full bg-primary/80"></div>
        </div>
        <span className="font-bold text-lg text-foreground">1000 מעגלים</span>
      </div>
      <p className="text-sm text-muted-foreground">תנועה אזרחית לשיח מנהיגותי חדש</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
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
