import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Table, TableRow, TableCell, WidthType } from "docx";
import { writeFileSync } from "fs";

const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          textDirection: "rtl",
        },
      },
      children: [
        // Title
        new Paragraph({
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "1000 מעגלים", bold: true, size: 56, rightToLeft: true })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "מיזם חברתי לשיח מנהיגותי חדש", size: 28, color: "537D80", rightToLeft: true })],
        }),
        new Paragraph({ text: "" }),

        // Hero
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "חברה שדנה על דרכים לפתרון, ולא על מי צודק.", bold: true, size: 32, rightToLeft: true })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "שבה ההסכמה היא הישג — ולא ויתור.", bold: true, size: 32, rightToLeft: true })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "1000 מעגלי שיח. 12 נושאים בשנה. אמנות חברתיות שנוצרות יחד — ומעצבות את השיח הציבורי בישראל.", size: 24, rightToLeft: true })],
        }),
        new Paragraph({ text: "" }),

        // Stats
        new Paragraph({
          heading: HeadingLevel.HEADING_3,
          children: [new TextRun({ text: "נתונים מרכזיים", bold: true, rightToLeft: true })],
        }),
        ...[
          "1000 — מעגלי שיח ברחבי הארץ",
          "12 — נושאים בשנה",
          "1 — אמנה חברתית משותפת",
          "∞ — הצבעה ישירה על הנושא הבא",
        ].map(t => new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: t, size: 22, rightToLeft: true })] })),
        new Paragraph({ text: "" }),

        // Vision
        sectionHeading("החזון"),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "בונים חברה מבוססת הסכמות", bold: true, size: 36, rightToLeft: true })],
        }),
        quote("חברה שדנה על דרכים לפתרון, ולא על מי צודק. שבה ההסכמה היא הישג — ולא ויתור."),
        body("אנו מבקשים לעורר תרבות שיח על ידי הנחלת שיח מכבד, פתוח ומפרה. דרך הקשבה אמיתית אנחנו מעוררים שותפות ורצון טוב — ומספקים יחד מוטיבציה ויצירתיות למצוא פתרונות משותפים, ליזום מתוך אכפתיות, ולפעול בשיתוף פעולה למען מטרה משותפת."),
        body("המטרה שלנו היא להעמיק לכל אדם את הכלים וההשראה לדבר בגובה העיניים — ללא שמץ של ביטול או הקטנה. לטפח דיבור מכבד, להצית את המוטיבציה לתשובה משותפת, ולעודד יוזמה חיובית — ליזום למען, ליזום מתוך הקשבה, וליזום יחד."),
        new Paragraph({ text: "" }),

        // What It Creates
        sectionHeading("מה זה מייצר"),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "מפוליטיקה של זהויות — לפוליטיקה של פתרונות", bold: true, size: 36, rightToLeft: true })],
        }),
        body("1000 מעגלים אינו עוד ערוץ דעות — זוהי תשתית לתרבות שיח חדשה, שבה ההסכמה היא הישג ולא ויתור."),
        ...[
          { title: "01 — חיבור בין קצוות", desc: "מעגלים שמפגישים אנשים מקצוות מנוגדים של המפה — סביב שאלה אחת משותפת, ולא סביב קיטוב פוליטי." },
          { title: "02 — פוליטיקה של פתרונות", desc: "המיקוד עובר משאלת 'מי צודק' לשאלת 'מה עושים' — ומייצר הסכמות ישימות במקום מלחמות זהות." },
          { title: "03 — תרבות שיח חדשה", desc: "הקשבה, סקרנות, אמפטיה והכרעה משותפת הופכים מערך מופשט לפרקטיקה שכל אחד יכול לתרגל." },
          { title: "04 — השפעה ציבורית", desc: "האמנה החברתית אינה נשארת בחדר — היא מתועדת, מפורסמת, ומניעה את השיח הציבורי בישראל." },
        ].flatMap(p => [
          new Paragraph({ children: [new TextRun({ text: p.title, bold: true, size: 24, rightToLeft: true })] }),
          new Paragraph({ children: [new TextRun({ text: p.desc, size: 22, rightToLeft: true })] }),
          new Paragraph({ text: "" }),
        ]),

        // How It Works
        sectionHeading("איך נראה המעגל"),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "מהמעגל — לאמנה — להכרעה הבאה", bold: true, size: 36, rightToLeft: true })],
        }),
        ...[
          { n: "1", title: "מעגל פתיחה מצולם", desc: "מעגל מצולם עם אנשי ציבור ומובילי דעה פותח את הנושא ומעלה אותו לסדר היום." },
          { n: "2", title: "מעגלים ברחבי הארץ", desc: "עשרות מעגלים נפתחים בקהילות בכל הארץ, בליווי מנחים מיומנים." },
          { n: "3", title: "פתרונות הופכים לאמנות", desc: "מתוך המעגלים עולים פתרונות שמתגבשים לכדי אמנות חברתיות." },
          { n: "4", title: "דיון ציבורי ואמנה אחת", desc: "מתנהל דיון ציבורי על האמנות, ומתוכן מתגבשת אמנה חברתית אחת." },
          { n: "5", title: "מנהיגי ציבור מגיבים", desc: "מנהיגי ציבור מוזמנים להתייחס לאמנה שנוצרה — במעמד מצולם המשודר לציבור." },
          { n: "6", title: "בוחרים את הנושא הבא", desc: "הקהל והמשתתפים בוחרים את הנושא הבא שייכנס למעגלים, והמחזור מתחדש." },
        ].flatMap(s => [
          new Paragraph({ children: [new TextRun({ text: `${s.n}. ${s.title}`, bold: true, size: 24, rightToLeft: true })] }),
          new Paragraph({ children: [new TextRun({ text: s.desc, size: 22, rightToLeft: true })] }),
        ]),
        new Paragraph({ text: "" }),
        quote("תהליך מעגלי — לא קו ישר. האיכות של השיח בכל מעגל היא מה שמניע את ההשפעה כלפי חוץ."),
        body("הקשבה, כבוד, ויצירתיות משותפת — אלו לא רק ערכים, אלא כלים שנלמדים ומתורגלים בכל מעגל."),
        new Paragraph({ text: "" }),

        // Media
        sectionHeading("איך זה נראה במדיה"),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "מהמעגל אל המסך", bold: true, size: 36, rightToLeft: true })],
        }),
        ...[
          { title: "01 — פרק טלוויזיה מלא", desc: "תיעוד מעמיק של המעגל — מהמחלוקת ועד האמנה." },
          { title: "02 — טיזרים", desc: "קטעים קצרים לרשת שמזמינים את הקהל פנימה." },
          { title: "03 — תקציר הפרק", desc: "סיכום נגיש של הנושא, התהליך וההסכמות." },
          { title: "04 — נוכחות במדיה", desc: "הד ציבורי שמחבר בין המעגל לשיח הלאומי." },
        ].flatMap(m => [
          new Paragraph({ children: [new TextRun({ text: m.title, bold: true, size: 24, rightToLeft: true })] }),
          new Paragraph({ children: [new TextRun({ text: m.desc, size: 22, rightToLeft: true })] }),
        ]),
        new Paragraph({ text: "" }),

        // Community
        sectionHeading("איך זה נראה בקהילה"),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "הכוח של המעגל — איכות המנחים", bold: true, size: 36, rightToLeft: true })],
        }),
        ...["מנחים ואיכות", "הכשרה ולמידה", "הקהל"].map(t =>
          new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: t, bold: true, size: 26, rightToLeft: true })] })
        ),
        ...[
          "מנחים מיומנים שמובילים את המעגל",
          "סטנדרט אחיד לאיכות ההנחיה",
          "ליווי ומשוב לאורך התהליך",
          "מסלול הכשרה למנחים חדשים",
          "הכשרה מתפתחת — משתפרת מסבב לסבב",
          "למידת עמיתים בין מעגלים",
          "הכנה להנהגה מעגלית בקהילה",
          "הכנה לדמוקרטיה דיונית (דליברטיבית)",
          "הוספת מעגלים",
        ].map(b => new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: b, size: 22, rightToLeft: true })] })),
        new Paragraph({ text: "" }),

        // Academia
        sectionHeading("אקדמיה ושיתופי פעולה"),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "מבוסס מחקר — מחובר לשטח", bold: true, size: 36, rightToLeft: true })],
        }),
        ...[
          { title: "מחקר", desc: "מחקרים לשיפור הדמוקרטיה הדיונית ומדידת ההשפעה." },
          { title: "שיתופי פעולה", desc: "עבודה משותפת עם אקדמיה וארגוני חברה אזרחית." },
          { title: "קצב קבוע", desc: "מפגשים קבועים ותהליכים תקופתיים — מסגרת מתמשכת של למידה והפצה." },
          { title: "שותפים בשטח", desc: "ארגונים ורשויות כקרקע פעילה." },
        ].flatMap(a => [
          new Paragraph({ children: [new TextRun({ text: a.title, bold: true, size: 24, rightToLeft: true })] }),
          new Paragraph({ children: [new TextRun({ text: a.desc, size: 22, rightToLeft: true })] }),
        ]),
        new Paragraph({ text: "" }),

        // Team
        sectionHeading("הצוות"),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "מי מאחורי המעגלים", bold: true, size: 36, rightToLeft: true })],
        }),
        new Paragraph({
          heading: HeadingLevel.HEADING_3,
          children: [new TextRun({ text: "צוות ההקמה", bold: true, size: 26, rightToLeft: true })],
        }),
        ...["לירז סיאני לופז — הקמה", "עירן הלוי — הקמה · הכשרת מנחים", "טל ירון — הקמה · מתודולוגיה", "איילת יונס — הקמה"]
          .map(m => new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: m, size: 22, rightToLeft: true })] })),
        new Paragraph({
          heading: HeadingLevel.HEADING_3,
          children: [new TextRun({ text: "צוות הפיילוט", bold: true, size: 26, rightToLeft: true })],
        }),
        ...["רחל עזריה", "מיכאל מירו", "קרן אשכנזי", "נגה ארבל", "יאיר אנסבכר"]
          .map(m => new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: m, size: 22, rightToLeft: true })] })),
        new Paragraph({
          heading: HeadingLevel.HEADING_3,
          children: [new TextRun({ text: "צוות הצילום", bold: true, size: 26, rightToLeft: true })],
        }),
        ...["לירז סיאני לופז — צילום", "ליאור פז — צילום · כאן 11"]
          .map(m => new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: m, size: 22, rightToLeft: true })] })),
        new Paragraph({ text: "" }),

        // CTA
        sectionHeading("הצטרפו אלינו"),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "כל שינוי גדול מתחיל במעגל אחד", bold: true, size: 36, rightToLeft: true })],
        }),
        body("אנחנו יחד בונים תרבות שיח שמאפשרת לכולנו להקשיב, להתווכח על פתרונות, ולכתוב יחד את הכללים שלפיהם נבחר לחיות. הצעד הראשון — מעגל אחד."),
        ...[
          "הצטרפו למעגל — השתתפות בדיון קהילתי",
          "היו מנחה — הכשרה והובלת מעגלים",
          "הציעו נושא — עצבו את סדר היום",
          "שיתוף פעולה — ארגונים ושותפים",
        ].map(a => new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: a, size: 22, rightToLeft: true })] })),
      ],
    },
  ],
});

function sectionHeading(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 20, color: "537D80", rightToLeft: true })],
    spacing: { before: 400 },
  });
}

function body(text) {
  return new Paragraph({
    children: [new TextRun({ text, size: 22, rightToLeft: true })],
    spacing: { after: 120 },
  });
}

function quote(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 26, italics: true, rightToLeft: true })],
    border: {
      right: { style: BorderStyle.THICK, size: 6, color: "4A3F56" },
    },
    indent: { right: 360 },
    spacing: { before: 200, after: 200 },
  });
}

const buffer = await Packer.toBuffer(doc);
writeFileSync("1000-maagalim.docx", buffer);
console.log("✅ קובץ נוצר: 1000-maagalim.docx");
