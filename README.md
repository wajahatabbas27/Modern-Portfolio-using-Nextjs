# Modern Portfolio using Nextjs, Sanity.IO, Tailwind, Framer Motion & Typescript!

- created the project by using - npx create-next-app@latest --ts project_name

- Start nextjs Development Server : yarn run dev

- React-Social-Icons, HeroIcons, FramerMotion , TypeWriter , react-hook-form , scrollbar-library , backgroundCircles , Background-screw

## Tailwindcss setup in nextjs

- 1-npm install -D tailwindcss postcss autoprefixer
- 2-npx tailwindcss init -p
- 3-inside context -- in tailwind.config.js file
  "./pages/**/\*.{js,ts,jsx,tsx}",
  "./components/**/\*.{js,ts,jsx,tsx}"
- 4- inside golbals.css file add
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

## React-Social-Icons

- yarn add react-social-icons -- installation
- we can use the url inside to get the icon from its website
- There is a component name social icons with different attributes with itself which we can use according to our need!

- import { SocialIcon } from "react-social-icons";
- <SocialIcon  url='https://www.facebook.com/wajahat.abbas.7982' network='instagram' fgColor='gray' bgColor='transparent' />
- we can use network and write the icon we needed or the direct url where we need ourself to be redirected all the way.
- we have bgColor - that is basically the background color, we set it above to transparent!
- we have fgColor - that is the color of the icon as above we use gray so instagram icon will show with the gray color.

## Framer Motion https://www.framer.com/motion/

- Installation -- yarn add framer-motion
- import {motion} from "framer-motion"
- It is the animation library for the react
- The div we want to animate will be : motion.div
- initial,animate,transition are the properties over here in the framer motion.
- <motion.div
  initial={{ x: -500, opacity: 0, scale: 0.5 }} -- initial the values from where the animation starts
  animate={{ x: 0, opacity: 1, scale: 1 }} -- final values where the animation ends
  transition={{ duration: 1.5 }} -- the time duration for the animation to come from initial values to the final value
  >
- whileInView={{x:0}} -- this attribute starts the animation when we start to see it or we go to that particular component. -- If we are using the whileInView we donot need to use the animate attribute than we will going to use the properties inside it.
- viewport={{once:true}} -- this will going to animate for the first time.

## TypeWriter Library (react-simple-typewriter) https://www.npmjs.com/package/react-simple-typewriter

- Installation -- yarn add react-simple-typewriter
- It is the library for the TypeWriter typing effect in the react.
- We are using it as a hook overhere! useTypewriter here and it will have the properties in it as shown below!
- import { Cursor, useTypewriter } from "react-simple-typewriter";
- const [text, cursor] = useTypewriter({
  words: [
  "Hi, The Name's S.Wajahat Abbas Z.",
  "Guy-who-loves-Coffee.tsx",
  "<ButLovesToCodeHere/>",
  "Modern FullStack/Serverless Developer",
  ],
  loop: true,
  delaySpeed: 2000, It is in milliseconds!
  }); -- these are the parameters to use it here
- In the code we will going to use the text by destructuring it just like -->> {text}.
- We can also use the Cursor component underneath the text, this will create the typewriter effect here!
-         <Cursor cursorColor='yellow' />

## Background Circles

- It is a component.
- Circles bnadie hain hmne 5 different sizes ke tailwindcss use krte we.
- uske ilawa hmne animation effects bhi apply kre hain in circles mein jese animate-ping/animate-pulse ke.
- animate={{
      scale: [1, 2, 2, 3, 1],
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
    }}
- opacity deskte hain hm array mein bhi animation mein to phr animation is trhn se chlegi!
- scale mein bhi array derhe hain hm to ustrhn se scale krega yh.

## Image optimization in nextjs

- <Image
        src={mypic}
        width={128}
        height={128}
        alt='Wajahat Abbas'
        className='object-cover rounded-full relative mx-auto'
      />

### Making Horizontal Scrolling Cards

- snap center agr child ko krrhe hain hm to hmein parent ko btana prega phle snap-x hai snap-mandatory hai.
- w-full flex snap-x snap-mandatory space-x-5 overflow-x-scroll
- overflow-x-scroll isse krta hai scroll x axis pe.
- relative flex snap-x snap-mandatory overflow-y-hidden overflow-x-scroll z-20 -- for the horizontal scroll!

### Creating Grid :

- grid grid-cols-4 gap-5 -- css required!
- grid ke andar 4 coloumns bnado.

### Hero Icons -- https://heroicons.com/

- Using heroIcons -- npm install @heroicons/react
- import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

### React Hooks Form -- https://react-hook-form.com/

- Installation --- yarn add react-hook-form
- This is the library which we will be using for the form

### Implementing the form getform.io https://app.getform.io/forms/48250

- To connect we require this url when we create a project on getform.
- We just need to integrate it inside of our form.

- https://getform.io/f/1146fe34-ad2a-4a5f-9159-9b5c1b5a3f4a
- We just need to add the attribute of Action and paste above url there in form as well we also require the method that is "POST". We need to tell this as well.
- The benefit of using this is that I get email as well on gmail or the account that is created!

### Scroll Bar Library ko implement krrhe hain -- Tailwind scroll bar

- yarn add -D tailwind-scrollbar
- Iske ilawa tailwind.config.js mein bhi hm add kreinge -- require('tailwind-scrollbar'), -- isko
- Custom Scroller of yellow color, we are going to implement that in our application in 2 places one in experirence and projects , other the main y scroller of the application .
- Iske bad hm use krskte hn classes ko jhn hm chahein
- scrollbar -- isse scrollbar aega css mein
- scrollbar-track-gray-400/20 -- isse pora jo track hoga uska color chnage hojaega
- scrollbar-thumb-[#F7AB0A]/80 -- isse jo thumb hoga khali jo nazar aega chota sa uska color change hojaega hmare pass
- scrollbar-track-gray-400 scrollbar-thumb-yellow-400

## Sanity-CMS

- We are using Sanity Content management system to get the data from there by calling through the api, It will help us not to update things by ourself inside the code rather we will be updating the cms from console, codebase will be updated all the way!
- Now we will be looking how to start using sanity!
- The best part of using the sanity is for the non developers who will get look at this and will change the items on the console and the codebase or the webste will be updated all the way.

- npm install -g @sanity/cli -- install sanity cli in your pc.
- sanity init --coupon sonny2022 -- this command to create the sanity from your terminal all the way

- After running the above command we have to do some checks put yes at all
- Then the endpoint name
- Then the schema type to be created so as we put in blog over here in our case all the way.
- It will going to generate the schema and the things according to the blog and what we will be doing is to modify it.

- After running the above commands what we have now is the sanity folder that has different files inside it.

- As now, we have the sanity folder with us so what we will do is change the schema according to our requirement and need

- We created the schema of our requirement pageInfo here!
- Created the different schema here for us according to our requirement.

- cd sanity --- going to the sanity folder
- sanity start -- running the command inside the sanity folder so it will start with the schema and run it on the local server for us over here!

- It is a fully connected database sanity here for us, which helps us to work in a proper manner all the way.

- sanity deploy -- to deploy the sanity database schema that is created! on the console so as any body can add information in it all the way!

- After deploying it we will be having a link that we will be going to use anytime by anyone to update the things inside of it and get the link to open it.

- https://my-portfolio-az.sanity.studio/desk/pageInfo;953aa75b-419d-4b0b-b5ca-e5e408a26943 -- This is the desk link to update the sanity here all the way!

## Groq to Fetch the data

- import { groq } from 'next-sanity'
- import { sanityClient } from '../../sanity' -- from the folder of the sanityClient!
- To use the groq in the api folder for us we will be using the groq and importing it all the way!
- It is the language similar to the graphql which is used to fetch the data!
- First of all, we will be going to check the query on the vision provided to us by sanity and after that we will fetch it out.
- we will get the query from the vision in the sanity studio, else we will be running the query by using the sanity client that we created using the configs.
-     const socials: Social[] = await sanityClient.fetch(query);             --   This is how we will fetch the query.
- To get the reference fields we will be getting the data by using (->) like in projects we call technologies[]-> - This is the technique by which we call the reference fields over here.

## TypeScript - type definations

- Here we are calling the queries in the api folder but here what we are actually doing is having the type definations for the data that is coming from the query so we have to define the types for that.
- type Data = {
  socials:Socials[]
  }
- type Socials ={}

- This is how we will be defining the types for the data that is actually coming all the way!
- typings.d.ts -- Creating this type definitions file like this
- interface se type bnarhe hain take extend bhi hojae

## Nextjs Api -- pages running on the backend

- http://localhost:3000/api/hello -- api chalti hai idhr is page pe.
- It is bydefault the api running on the backend in the nextjs here for us all the way.
- Here we will be creating different requests over here for us that will going to bring the data for us on the server side rendering!

- We will be fetching different apis as well so first to fetch the data we will be having getSocials.ts file in the api folder to fetch the socials.

## Utility Functions for the Api handling on Frontend:

- The benefit of using these functions is that, we are basically here changing the data here for us in the json() format as well as we are getting the actual data what is required and what we actually wanted here for us all the way.
- These functions help to handle the fetching of data on frontend and how to utilize them as well according to our requirement.
- Created a folder utils at the root.
- In the folder we have created the file e.g fetchSkill.ts to fetch the skills all the way .
- In these files we will be making the requests for the apis that we just created in the folders so we will be going to call them using the path localhost:3000/api/getSkills -> for example using this path.
- Is mein jo kaam hm krte hain wo yh hai ke hm ismein json mein change krte hain response ko jo ata hai hmare pass aur uske ilawa hn return krrhe hain jo main data chahiye hai hmein usko bs take usko directly call krlein hm apne pass function call krne ke bad apne pass.

## next-sanity - https://github.com/sanity-io/next-sanity

- yarn add next-sanity @portabletext/react @sanity/image-url -- to install!
- A library here that will going to help us to connect the sanity with our nextjs application!
- After installing we will be creating sanity.ts file -- sanity.ts
- In sanity.ts we will configure all the stuff in the sanity all the way!
- After we will set all the environment variables inside the .env.example file that we will going to use here for us all the way. -- .env.example,.env.local

## Incremental Static Regeneration

- Here we will see how to apply this technique of incremental Static Regeneration into the site in nextjs.
- We do this by using getStaticProps all the way overhere!
- we need to return the props as well from here so we can use all those things in the pages we require.
- revalidate:10 -- This will going to revalidate the data after every 10s, This is the benefit of using the Static Regeneration here in the Nextjs.
- export const getStaticProps: GetStaticProps<Props> = async () => {
  // Fetching the utility functions here that we have created
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experiences[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  // return the props is necessary this will be passed in the page that we needed and we require all the way!
  return {
  props: {
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
  },
  // Nextjs will attempt to re-generate the page;
  // -- When the request comes in
  // -- At most every 10 seconds
  revalidate: 10,
  };
  };

## Deploying the site on Vercel! using Cli:

- We are deploying the site on vercel.
- yarn global add vercel -- add vercel using yarn or npm here using yarn! - globally add vercel to the system.
- vercel build
- vercel deploy --prebuilt
- You will get the url then

### Extra Information:

- In Nextjs, the main page that renders is index.js not the app.js page.
- typescript snippet for the component - tsrafce/tsrfce
- <Head>
    <title>Wajahat's Portfolio</title>
  </Head>  - It is where the title goes its in each page in nextjs.

- wanted header to be on the top so we will say in css -- sticky,top-0.
- max-w-7xl - max width of the div or the component where we apply will be 7xl-1200px - that is default.
- mx-auto - will appear in center, squeeze from both sides on x-axis and will appear in center.
- z-20 - it is the z-index that will make it to the top.
- padding is the key when making things great, Its the icing on the cake!
- parent div relative hoga to jo neche wale div hnge wo absolute bnaeinge hm uske behalf pe mtlb, ke absolute krdo relative ke behalf pe.
- border deke border ajaega hmare pass, width aur height bhi bata deinge hm to square ya shape ajaegi hmare pass pori trhn se phr hm rounded-full krdeinge to wo circle bnjaega css se! easy as F\*\*\*.
- tailwind-css mein animate ki property hai jsko hm use krskte hn animation bnane ke liye.
- Har component ko section bnake laeinge hm aur uski id bhi deinge hm idhr take link krlein click pe aram se, aur link ke href mein hm id pass krdeinge to wahan lejaega beshak usi same page pe ho.
- <Link href="#about">
           <button className="heroButton">About</button>
         </Link>
- snap apply krrhe hain main css mein index pe y axis pe - snap-y snap-mandatory overflow-scroll
- hero section ko meine snap-center kra hai iska mtlb yh hai hmesa yh center mein leaega screen ko!
- snap works in terms of the parent element and it works all the way by depending on the parent component so we make it snap-y snap-mandatory and on the hero section we have created it snap-center, this is the way how it works!
- Creating the hero component motion.div as well so it appears like an animation
- Object-cover - isse image cover size pe adjust krega.
- uppercase - tailwind class se uppercase hojaeinge letters
- We can create our custom classes in our tailwindcss by going to the global.css file and writing:
- @layer components{
  .heroButton{
  @apply px-6 py-2 border border-gray rounded-full uppercase text-xs tracking-widest text-gray-500
  }
  }

- Creating the z-index to 0 in the main nextjs page and in the text there we will be using the z-index to 20 so it will overlap the circles

- layer components {
  .heroButton {
  @apply border border-[#242424] px-6 py-2 rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-blue-200 hover:text-red-200
  }
  } -- how we apply custom classes by our own self
- h-screen -- it is the class which tells that it has height of screen here! -- It will be there inside the component not in the section!
- relative will be there on the parent div, and It is there so we will have absolute class in the child, we wanted the childs to be absolute in the position therefore we use relative in parent as they are absolute with respect to the relative container all the way!
- justify evenly - It will put the items evenly on the screen.
- flex-shrink-0 -- It will not shrink if we ran out of the space.
- object-cover -- It will bring the picture in a good resolution.
- underline -- It is used to underline the div or the element here.
- decoration-[colorCode] -- It is used to fill the colors into the underline or any other object.
- text-base - To make the text base type like as text-lg.
- overflow-hidden -- isse ziada zor nhi dalega aur overflow nhi krega.
- article tag -- good for seo. -- Instead of div we can use it.
- object-start/center -- to fix the place of the image.
- list-disc -- it brings the bullet points with it.
- space-x-2 -- it brings up with space of 2 on the x axis.
- grid - grid bnarhe hain.
- grid-col-4 - $ coloumns hain grid mein.
- group - creating group for a bunch of elements.
- filter - It will filter it out.
- group-hover -- when we hover over the group it will apply some effect on it.
- md: flex-row -- on medium screen flex-row the div for example, It will be applied when medium screen resolutions appear!
- justify-evenly -- se content justify hojaega sbke sth evenly space ke hisab se aur center hojaega agr corner mein hai
- css krte we phle -- position/spacing/size/color
- snap-center mtlb yh hai snap yani image pe chale jao leke!
- flex-shrink-0 se image size change nhi hoga
- list-disc -- To add bullets to the list
- space-y-4 -- vertical y axis pe spaces ke liye use krskte hain phr hmein padding aur margin ki zrorat nhi pregi
- space-x-4 -- horizontal x axis pe spaces ke liye use krskte hain phr hmein margin/gap/padding ki zrorat nhi pregi
- animation banai hai opacity is 40 bydefault but after hover it is 100.
- group -- we are using the group here to apply a effect and we add the group to the parent div.
- filter group-hover:grayscale transition duration-300 ease-in-out -- This is making the effect on hover to make the filter and change the main image color to grayscale!
- -skew-y-12 -- It is used to curve or to scale something left all the way
- flex-shrink-0 -- This shows the proper size of the image jo styling hmne ki wi hai!
- flex items-center -- isse center ajaega kuch bhi
- animate-pulse se animation hoti rhegi tailwind css mein
- w-fit -- isse width fit krdega yh
- focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 -- iska mtlb hai jb hm input field mein likh rhe hnge to focus
- outline-none --- isse outline nhi aegi input box pe jo blue color ki aati hai
- overflow-y-scroll -- isse scroll krega y pe mtlb y axis pe.
- overflow-x-hidden -- x scroller nazar nhi aega isse hidden hi rhega
- color/20 -- slash ke bd jo bhi no. likheinge hm usse opacity target hojaegi hmare pass.
- scrollbar-thin -- It will make the scrollbar thin

- Creating a footer here as well in the bottom when we will going to click it it will take us to the top of the screen!
- sticky -- sticky se stick hojaega jese yhn mne bottom-5 pe stick hone ka kaha hai to yhn yh stick hojaega bottom-5 pe

- grayscale hover:grayscale-0 -- animation bnadi hai hmne yh grayscale ki, grayscale hoga by default mtlb gray color jb hover kreinge to phr grayscale-0 hojaega to normal color show hojaega hmein!
- ya to element block hoga ya flex class mein dono mein se koi aik hoga.
- When the parent is a flex container, we want to make sure the image never shrinks, so we’ve added md:shrink-0 to prevent shrinking on medium screens and larger.
- prompt -- gets the input from the user in the javascript.
- we have created 2 files here .env.example and .env.local - we will be using the .env.local - this is the one that we will be using
- Whenever we change the environment variables always reload the server.
- After writing all the queries we can see that the data is all the way coming to us in the api page e.g getSocials -http://localhost:3000/api/getSocials
- After applying sanity and getStaticProps will be applied we will pass the props in every component and there we will create the things working for us dynamically all the way!
- To get the format of the date we require - {new Date(experience.dateEnded).toDateString()} - new date technique by which we can access the date all the way
- If same name import so we will be importing it like import as - we use as.
- Applying slice to break the skill half for the left animation and half for the right animation here all the way.
- slice is used to slice the array by 2 as here we slice the array as well!
- Static Regeneration allows the page to cache and it does actually is it brings the page back. that is regenerated or fetched all the way!
