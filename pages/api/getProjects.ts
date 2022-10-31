// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Project } from './../../typings.d';

const query = groq`
   *[_type == "project"]{
  ...,
  technologies[]->
}
`

type Data = {
    projects: Project[]
}


export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
)
{
    // This is how we will fetch query by using groq and by using sanity client.
    const projects: Project[] = await sanityClient.fetch(query);

    res.status(200).json({ projects })
}
