const hotlines = [
    {
        help: "Violence and Abuse",
        id: "violence-and-abuse",
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
        id: "mental-help-and-substance-abuse",
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
        help: "Runaways/Youth Assistance",
        id: "runaways-youth-assistance",
        notes: [],
        contacts: [
            {
                group: "National Runaway Safeline",
                about_group: "Provides crisis intervention, information and referrals for runaways concerning shelter, counseling, food pantries, and transportation. Suicide and crisis counseling. Greyhound bus tickets available for qualifying kids.",
                call: "Call: 1-800-RUNAWAY (1-800-786-2929)",
                text: "",
                tty: "",
                visit: "Visit/Chat: www.1800RUNAWAY.org/youth-teens/get-help"
            },
            {
                group: "National Youth Crisis Hotline",
                about_group:"Crisis hotline, information and referrals for runaways or youth (seventeen and younger) with other problems and their parents.",
                call: "CALL: 1-800-448-4663 (24-hour access)",
                text: "",
                tty: "",
                visit: ""
            },
        ]
    },
    {
        help: "Self-Help",
        id: "self-help",
        notes: [],
        contacts: [
            {
                group: "Action, Parent and Teen Support",
                about_group:"Provides referrals to all types of agencies and services for troubled teens and their parents.",
                call: "Call: 1-800-367-8336 (24-hour access)",
                text: "",
                tty: "",
                visit: ""
            },
            {
                group: "National Eating Disorders Association",
                about_group:"Information on eating disorders and referrals for treatment.",
                call: "Call: 1-800-931-2237 (24-hour access)",
                text: "",
                tty: "",
                visit: ""
            },
            {
                group: "Safe Sitter",
                about_group:"Trains adolescents ages eleven to thirteen on how to be effective baby sitters.",
                call: "Call: 1-800-255-4089",
                text: "",
                tty: "",
                visit: "Visit: www.SAFESITTER.org"
            },
            {
                group: "Girl’s and Boy’s Town National",
                about_group:"Provides crisis intervention, information and referrals for general population. Free, confidential. Short-term crisis intervention. Works with children and families.",
                call: "Call: 1-800-448-3000 (24-hour access)",
                text: "TTY: 1-800-448-1833",
                tty: "",
                visit: "Visit: www.boystown.org/hotline"
            },
            {
                group: "CDC National AIDS/Sexually Transmitted Disease Hotline: Information & referral",
                about_group:"",
                call: "Call: 800-342-2437",
                text: "",
                tty: "",
                visit: "Visit: www.CDC.gov/std/"
            },
            {
                group: "American Social Health Association STD Hotline",
                about_group:"",
                call: "Call: 800-227-8922",
                text: "",
                tty: "",
                visit: "Visit: www.ASHASEXUALHEALTH.org"
            },
            {
                group: "Teen Health Questions: Lucile Packard Children’s Hospital Teen Resource Line offers confidential health information",
                about_group:"",
                call: "Call: 888-711-TEEN",
                text: "",
                tty: "",
                visit: ""
            },
            {
                group: "National Center for Victims of Crime",
                about_group:"",
                call: "Call: 800-FYI-CALL (394-2255)",
                text: "",
                tty: "",
                visit: "Visit: www.VICTIMSOFCRIME.org"
            },
            {
                group: "National Eating Disorders Association Information and Referral Helpline: Support for people struggling with eating disorders and their family",
                about_group:"",
                call: "Call: 800-931-2237",
                text: "",
                tty: "",
                visit: "Visit: www.NATIONALEATINGDISORDERS.org"
            },
        ],
    },
];

export function getHotlines() {
    return hotlines;
}

export function getHotline(hotlineId) {
    return hotlines.find(({ id }) => id === hotlineId);
}


export default hotlines;