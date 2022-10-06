# Modern Portfolio using Nextjs, Sanity.IO, Tailwind, Framer Motion & Typescript!

- created the project by using - npx create-next-app@latest --ts project_name

- Start nextjs Development Server : yarn run dev

## Tailwindcss setup in nextjs

- 1-npm install -D tailwindcss postcss autoprefixer
- 2-npx tailwindcss init -p
- 3-inside context --
  "./pages/**/\*.{js,ts,jsx,tsx}",
  "./components/**/\*.{js,ts,jsx,tsx}", in tailwind.config.js file
- 4- inside golbals.css file add
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

## React-Social-Icons

- yarn add react-social-icons -- installation
- we can use the url inside to get the icon from its website
- There is a component name social icons with different attributes with itself whic we can use according to our need!

- import { SocialIcon } from "react-social-icons";
- <SocialIcon  url='https://www.facebook.com/wajahat.abbas.7982' network='instagram' fgColor='gray' bgColor='transparent' />
- we can use network and write the icon we needed or the direct url where we need ourself to be redirected all the way.
- we have bgColor - that is basically the background color, we set it above to transparent!
- we have fgColor - that is the color of the icon as above we use gray so instagram icon will show with the gray color.

## Framer Motion https://www.framer.com/motion/

- yarn add framer-motion

- It is the animation library for the react
- The div we want to animate will be : motion.div
- initial,animate,transition are the properties over here in the framer motion.
- <motion.div
  initial={{ x: -500, opacity: 0, scale: 0.5 }} -- initial the values from where the animation starts
  animate={{ x: 0, opacity: 1, scale: 1 }} -- final values where the animation ends
  transition={{ duration: 1.5 }} -- the time duration for the animation to come from initial values to the final value

  >

## TypeWriter Library (react-simple-typewriter) https://www.npmjs.com/package/react-simple-typewriter

- yarn add react-simple-typewriter
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
  delaySpeed: 2000,
  }); -- these are the parameters to use it here
- In the code we will going to use the text by destructuring it just.
- We can also use the Cursor component underneath the text, this will create the typewriter effect here!
-         <Cursor cursorColor='yellow' />

## Background Circles

- It is a component.
- Circles bnadie hain hmne 5 different sixes ke tailwindcss use krte we.
- uske ilawa hmne animation effects bhi apply kre hain in circles mein jese animate-ping/animate-pulse ke.

## Image optimization in nextjs

- <Image
        src={mypic}
        width={128}
        height={128}
        alt='Wajahat Abbas'
        className='object-cover rounded-full relative mx-auto'
      />

### Extra Information:

- In Nextjs, the main page that renders is index.js not the app.js page.
- typescript snippet for the component - tsrafce/tsrfce
- <Head>
    <title>Wajahat's Portfolio</title>
  </Head>  - It is where the title goes its in each page in nextjs.

- wanted header to be on the top so we will say n css -- sticky,top-0.
- max-w-7xl - max width of the div or the component where we apply will be 7xl-1200px - that is default.
- mx-auto - will appear in center, squeeze from both sides on x-axis and will appear in center.
- z-20 - it is the z-index that will make it to the top.
- padding is the key when making things great, Its the icing on the cake!
- parent div relative hoga to jo neche wale div hnge wo absolute bnaeinge hm uske behalf pe mtlb, ke absolute krdo relative ke behalf pe.
- border deke border ajaega hmare pass, width aur height bhi bana deinge hm to square ya shape ajaegi hmare pass pori trhn se phr hm rounded-full krdeinge to wo circle bnjaega css se! easy as F\*\*\*.
- tailwind-css mein animate ki property hai jsko hm use krskte hn animation bnane ke liye.
- Har component ko section bnake laeinge hm aur uski id bhi deinge hm idhr take link krlein click pe aram se, aur link ke href mein hm id pass krdeinge to wahan lejaega beshak usi same page pe ho.
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
  }  --  how we apply custom classes by our own self
