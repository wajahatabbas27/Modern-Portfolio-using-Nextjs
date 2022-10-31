import { Experiences } from "../typings"

export const fetchExperiences= async () =>
{
    // fetching the api folder path here
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

    const data = await res.json();
    const experiences: Experiences[] = data.experiences;

    return experiences;

}