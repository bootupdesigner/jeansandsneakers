const websites = [
    {
        support: "Teen Health",
        id: "teen-health",
        website: [
            `GirlsHealth: www.girlshealth.gov`,
            `Stopping School Violence: www.stoppingschoolviolence.com`,
            `Stop Bullying Now: www.stopbullyingnow.com`
        ]
    },
    {
        support: "General Health",
        id: "general-health",
        website: [
            `American Diabetes Association: www.diabetes.org`,
            `American Heart Association: www.heart.org`,
            `Centers for Disease Control and Prevention: www.cdc.gov`,
            `HIV/AIDS Prevention: www.cdc.gov/hiv/default.html`,
            `Kaiser Permanente: www.kp.org`,
            `The Mayo Clinic: www.mayo.edu`,
            `National Sleep Foundation: www.sleepfoundation.org`,
            `Sexually Transmitted Disease Prevention: www.cdc.gov/std/`,
            `WebMD: www.webmd.com`
        ]
    },
    {
        support: "Mental Health",
        id: "mental-health",
        website: [
            `National Institute of Mental Health: www.nimh.nih.gov`,
            `National Mental Health Information Center: www.mentalhealth.gov`,
            `Substance Abuse and Mental Health Services Administration: www.samhsa.gov`
        ]
    },
    {
        support: "Violence and Abuse",
        id: "violence-and-abuse",
        website: [
            `National Domestic Violence Hotline: www.thehotline.org`,
            `National Sexual Violence Resource Center: www.nsvrc.org`
        ]
    }
];

export function getWebsites() {
    return websites;
}

export function getWebsite(websiteId) {
    return websites.find(({ id }) => id === websiteId);
}

export default websites;
