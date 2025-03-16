// Lens and Cataract 2017 questions
const lens2017Questions = [
    {
        id: "lens-2017-1",
        question: "משמעות golden ring בניתוח קטרקט?",
        options: [
            "הפרדה בין הקורטקס לגרעין",
            "הפרדה בין הקורטקס לקפסולית",
            "הפרדה בין גרעין וקורטקס",
            "סימן שהייתה פריצה של הקפסולה האחורית"
        ],
        correctAnswer: 2,
        explanation: "In less brunescent cataracts, a fluid wave can be seen to separate the endonucleus from the epinucleus and produce the 'golden ring' sign. Its written between endonucleus and epinucleus. Page 127."
    },
    {
        id: "lens-2017-2",
        question: "מה לא מוזכר עם OIL DROPLET?",
        options: [
            "היפוקלצמיה",
            "גלאוקומה",
            "גלאוקומלוזיס",
            "גלאוקומטוציקליטיס"
        ],
        correctAnswer: 0,
        explanation: "Oil droplet is not typically associated with hypocalcemia. These are punctate opacities."
    },
    {
        id: "lens-2017-3",
        question: "מה נכון לגבי סוג הקטרקט?",
        options: [
            "סכרת SNOWFLAKE-",
            "מיוטוניק דיסטרופיה ANTERIOR CAPSULAR-",
            "ווילסון-מסיס למתכות",
            "היפוקלצמיה OIL DROPLET"
        ],
        correctAnswer: 0,
        explanation: "Diabetic cataract, or 'snowflake' cataract, consists of gray-white subcapsular opacities. This is mentioned on Page 70 of the reference material."
    },
    {
        id: "lens-2017-4",
        question: "מה נכון לגבי מטבוליזם בעדשה:",
        options: [
            "גלוקוז נכנס לעדשה על ידי משאבה על גבי האפיתל",
            "הקסוקינז מחבר פוספט לגלוקוז שנכנס לעדשה",
            "מסלול פוליאול הוא כ 30% מהמסלול המרכזי בעדשה",
            "כ 30%-מהגלוקוז מופק במסלול אירובי"
        ],
        correctAnswer: 1,
        explanation: "Glucose enters the lens from the aqueous both by simple diffusion and by a mediated transfer process called facilitated diffusion. Most of the glucose transported into the lens is phosphorylated to glucose-6-phosphate (G6P) by the enzyme hexokinase."
    },
    {
        id: "lens-2017-5",
        question: "מה נכון?",
        options: [
            "חיבור בין הקופסית לקפסית Capsular block",
            "נגטיבי דיספוטופיה -חצי סהר כהה בשדה טמפורלי עליון",
            "הוא בגלל חיכוך אופטיק לקופסית UGH.3",
            "פופילארי בלוק זה בגלל חומר ויסקואלסטי שנשאר בקפסית לאחר השתלת עדשה"
        ],
        correctAnswer: 3,
        explanation: "Option 4 describes capsular block, which happens due to viscoelastic material retained in the capsule after surgery. For option 1, it describes polar block; for option 3, the friction is between uveal tissue and haptic lens."
    },
    {
        id: "lens-2017-6",
        question: "איזה מהמשאבות הבאות הוא משאבת VENTURI?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: 0,
        explanation: "Venturi is the vacuum pump represented by pump 1 in the graph. The question notes that you simply need to know the graph."
    },
    {
        id: "lens-2017-7",
        question: "במידה ורוצים להמנע מ IFIS במהלך ניתוח מה יש לעשות:",
        options: [
            "להזריק alpha agonist לעלשכה הקדמית",
            "לעבוד ב low-flow setting במכשיר פאקו",
            "הכנסת חומר דיספרסיבי",
            "השמשת CTR בזמן הניתוח להרחבת האישון"
        ],
        correctAnswer: 0,
        explanation: "The following interventions have been proposed to reduce the intraoperative effects of IFIS: preoperative atropine; intracameral injection of α-agonists such as preservative-free phenylephrine or epinephrine; careful attention to incision location and construction to reduce wound leak; and others. This is on page 161."
    },
    {
        id: "lens-2017-8",
        question: "מטופל לאחר ניתוח קטרקט. מגיע עם ירידה בראיה. בהדמיה:",
        options: [
            "מעקב בלבד. מכיוון ש 80% מהמקרים יחלפו באופן עצמוני לאחר 6חודשים",
            "סטרואידים",
            "הזרקות Anti-VEGF",
            "לאחר מיצוי טיפול שמרני, ניתן לשקול ויטרקטומיה"
        ],
        correctAnswer: 0,
        explanation: "The peak incidence of both angiographic and clinical CME occurs 6 to 10 weeks after surgery. Spontaneous resolution occurs in approximately 95% of uncomplicated cases, usually within 3-12 months. This is mentioned on page 210."
    },
    {
        id: "lens-2017-9",
        question: "ילוד מולד ח\"צ היינו כך\"ב:",
        options: [
            "רובלה",
            "Lowe",
            "פאברי",
            "ציסטית נוסף"
        ],
        correctAnswer: 1,
        explanation: "Lowe syndrome is associated with bilateral congenital cataracts. Page 41 has a table saying bilateral congenital cataracts can be seen in LOWE syndrome and Fabry disease, among other conditions."
    },
    {
        id: "lens-2017-10",
        question: "Which of the following correctly summarizes the pathophysiology of diabetic cataract?",
        options: [
            "Increased aldose reductase activity leading to accumulation of sorbitol",
            "Glycation of lens proteins resulting in opacification",
            "Osmotic stress from increased polyol pathway activity",
            "All of the above mechanisms contribute to diabetic cataract formation"
        ],
        correctAnswer: 3,
        explanation: "Diabetic cataract formation involves multiple mechanisms including increased aldose reductase activity leading to sorbitol accumulation, glycation of lens proteins, and osmotic stress from the polyol pathway."
    }
];

// Export the questions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lens2017Questions;
} else {
    // For browser environment
    if (!window.quizData) {
        window.quizData = {};
    }
    window.quizData.lens2017 = lens2017Questions;
}
