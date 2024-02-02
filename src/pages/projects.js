import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import one from '../../public/images/projects/one.jpg'
import { GithubIcon, YouTubeIcon } from '@/components/Icons'
import {motion} from 'framer-motion'
const projects = () =>{
    const FramerImage=motion(Image);
    const FeaturedProjects = ({img,linkUrl,titleProject,summaryProject,githubUrl}) =>{
        return(
            <article className="relative w-full flex items-center bg-light shadow-2xl border border-solid border-black rounded-3xl p-12">
                <div className="absolute top-0 -right-3 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  -z-10 border-2 border-solid border-dark" />
                {/* left side */}
                <Link href={linkUrl} className="w-1/2 rounded-lg cursor-pointer overflow-hidden" target="_blank" >
                   <FramerImage src={img} className="w-full h-auto" whileHover={{scale:1.2}} transition={{duration:0.2}}/>
                </Link>
                {/* right side */}
                <div className="w-1/2 flex flex-col pl-6 justify-between items-start">
                    {/* elem one */}
                    <span className="text-primary text-medium text-xl">featured project</span>
                    {/* elem two */}
                    <Link href="/" className="cursor-pointe hover:underline underline-offset-2">
                      <h1 className="font-bold text-3xl my-2 w-full text-left">{titleProject}</h1>
                    </Link>
                    {/* elem four */}
                    <p className="my-2 font-medium text-dark">{summaryProject}</p>
                    {/* elem five */}
                    <div className="mt-2 flex">
                            <Link href={githubUrl} target="_blank" className="w-10"><GithubIcon/></Link>
                            <Link href={linkUrl} target="_blank" ><YouTubeIcon/></Link>
                    </div>
                </div>
            </article>
        )
    }
    const Projects = ({img,linkUrl,githubUrl,projectName,type}) =>{
        return(
        <article className="relative flex flex-col border border-solid border-dark rounded-3xl p-8 bg-light items-center justify-center">
            <div className="absolute top-0 -right-3 w-[101%] h-[103%] rounded-[2rem] bg-dark -z-10 border-2 border-solid border-dark"/>
            <Link href={linkUrl} className="w-full rounded-lg cursor-pointer overflow-hidden"  target="_blank" >
               <FramerImage src={img} className="w-full h-full" whileHover={{scale:1.2}} transition={{duration:0.2}} />
            </Link>
            <div className="flex flex-col w-full mt-4">
                {/* elem one */}
                <span className="text-primary text-medium text-xl">{type}</span>
                {/* elem two */}
                <Link href={linkUrl} className="my-2 cursor-pointe hover:underline underline-offset-2">
                  <h1 className="font-bold text-2xl">{projectName}</h1>
                </Link>
                {/* elem three */}
                <div className="flex justify-between  mt-4">
                    <Link href={githubUrl} target="_blank" className="w-10"><GithubIcon/></Link>
                    <Link href={linkUrl} target="_blank"><YouTubeIcon/></Link>
                </div>
            </div>
        </article>
        )
    }
    return(
        <>
        <Head>
               <title>Athar ElHaidary | projects</title>
        </Head>
        <main className="flex flex-col justify-center items-center w-full mb-16 ">
            <Layout className="pt-16">
                {/* first child */}
                <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 text-center"/>
                {/* projects section */}
                <div className="grid grid-cols-12 gap-24 gap-y-32">
                    {/* first row */}
                    <div className="col-span-12">
                        <FeaturedProjects
                         img={one} 
                         linkUrl="/"
                         titleProject="Crypto Screener Application"
                         summaryProject="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                         It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                         local currency."
                         githubUrl="/"
                        />
                    </div>
                    {/* second row */}
                    <div className="col-span-6">
                        <Projects 
                          projectName="Crypto Screener Application"
                          img={one}
                          linkUrl="/"
                          type="featured project"
                          githubUrl="/"
                        />
                    </div>
                    <div className="col-span-6">
                        <Projects 
                          projectName="Crypto Screener Application"
                          img={one}
                          linkUrl="/"
                          type="featured project"
                          githubUrl="/"
                        />
                    </div>
                    {/* third row */}
                    <div className="col-span-12">
                        <FeaturedProjects
                         img={one} 
                         linkUrl="/"
                         titleProject="Crypto Screener Application"
                         summaryProject="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                         It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                         local currency."
                         githubUrl="/"
                        />
                    </div>
                    {/* fourth row */}
                    <div className="col-span-6">
                        <Projects 
                          projectName="Crypto Screener Application"
                          img={one}
                          linkUrl="/"
                          type="featured project"
                          githubUrl="/"
                        />
                    </div>
                    <div className="col-span-6">
                        <Projects 
                          projectName="Crypto Screener Application"
                          img={one}
                          linkUrl="/"
                          type="featured project"
                          githubUrl="/"
                        />
                    </div>
                </div>
            </Layout>
            
        </main>
        </>
    )
}
export default projects
