const hotlines = [
    {
        help: "Violence and Abuse",
        id: "1",
        notes: [],
        contacts: [
            {
                group: "Childhelp National Child Abuse Hotline",
                about_group:"",
                call: "Call: 800-4-A-CHILD",
                text: "",
                tty: "",
                visit: "Visit: www.CHILDHELP.org"
            },
            {
                group: "National Domestic Violence Hotline: Twenty-four-hour access from all fifty states. Translators available.",
                about_group:"",
                call: "Call: 1-800-799-SAFE (7223)",
                text: "Text: START to 88788",
                tty: "TTY: 1-800-787-3224",
                visit: ""
            },
            {
                group: "National Sexual Assault Online Hotline",
                about_group:"",
                call: "Call: 1-800-656-HOPE (4673)",
                text: "",
                tty: "",
                visit: ""
            }
        ],
    },
    {
        help: "Mental Help and Substance abuse",
        id: "2",
        notes: [
            `National Toll-Free Help Lines`,
            `The numbers listed below can be dialed toll-free from anywhere within the United States. These organizations provide mental health information and referrals and, in some cases, crisis counseling.`
        ],
        contacts: [
            {
                group: "Al-Anon and AlaTeen: Meeting information for teens and families	888-425-2666",
                about_group:"",
                call: "Call: 888-4AL-ANON",
                text: "",
                tty: "",
                visit: "Visit: www.AL-ANON.ALATEEN.org"
            },
            {
                group: "National Suicide Prevention Lifeline",
                about_group:"",
                call: "Call: 1-800-273-TALK (8255)",
                text: "",
                tty: "",
                visit: ""
            },
            {
                group: "Postpartum Support International",
                about_group:"",
                call: "Call: 800-994-4PPD (4773)",
                text: "",
                tty: "",
                visit: "Visit: www.POSTPARTUM.net"
            },
            {
                group: "PPD Moms",
                about_group:"",
                call: "Call: 800-PPD-MOMS (800-773-6667)",
                text: "",
                tty: "",
                visit: "Visit: www.1800PPDMOMS.org"
            },
            {
                group: "SAMHSA’s Center for Substance Abuse Treatment",
                about_group:"",
                call: "Call: 1-800-662-HELP (4357), for Spanish Call:1-877-767-8432",
                text: "",
                tty: "TTY: 1-800-487-4889",
                visit: ""
            }

        ],
    },
    {
        help: "Runaways/Youth assistance",
        id: "3",
        notes: [],
        contacts: [
            {
                group: "National Runaway Safeline",
                about_group: "Provides crisis intervention, information and referrals for runaways concerning shelter, counseling, food pantries, and transportation. Suicide and crisis counseling. Greyhound bus tickets available for qualifying kids.",
                call: "",
                text: "",
                tty: "",
                visit: ""
            },
        ]
    },
    {
        help: "Self-Help",
        id: "4",
        notes: "",
        contacts: [
            {
                group: "",
                about_group:"",
                call: "",
                text: "",
                tty: "",
                visit: ""
            },
        ]
    },
];

export function getHotlines() {
    return hotlines;
}

export function getHotline(hotlineId) {
    return hotlines.find(({ id }) => id === hotlineId);
}


export default hotlines;