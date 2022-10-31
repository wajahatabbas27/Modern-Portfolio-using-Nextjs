import { Project } from "../typings"

export const fetchProjects = async () =>
{
    // fetching the api folder path here
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

    const data = await res.json();
    const projects: Project[] = data.projects;

    return projects;

}