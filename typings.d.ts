// common Types in the whole context 
// the benefit of creating the common types here is that we will going to extend these types rather typing these again and again
interface SanityBody
{
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedA: string;
}

// For Images we created a proper image type 
// We can use the images types here so as we are using it

interface Image
{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface PageInfo extends SanityBody
{
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody
{
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody
{
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Experiences extends SanityBody
{
    _type: "experience";
    company: string;
    companyImage: Image;
    dateEnded: date;
    dateStarted: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[]
}

export interface Project extends SanityBody
{
    _type: "project";
    title: string;
    summary: string;
    linkToBuild: string;
    image: Image;
    technologies: Technology[]
}

export interface Social extends SanityBody
{
    _type: "social";
    title: string;
    url: string;
}

