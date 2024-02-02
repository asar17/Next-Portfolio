import React,{ useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'
import Layout from '../components/Layout'
import Skills from '../components/Skills'
import Experience from '@/components/Experience'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useMotionValue, useSpring, useInView } from 'framer-motion'
const about = () =>{

    const InfoSection = ({spanVlue,text}) =>{
        return(
            <div className="flex flex-col items-end justify-center" >
                <span  className="text-7xl font-bold"><AnimatedNumber value={spanVlue} />+</span>
                <h1 className="text-xl font-medium capitalize text-dark/75">{text}</h1>
            </div>
        )
    }
    const AnimatedNumber = ({value}) =>{
        const ref=useRef();
        //to set initail state
        const motionValue= useMotionValue(0);
        //animate effect
        const springValue= useSpring(motionValue,{duration:3000});
        //to check the element[span] is loaded in the page or not
        const inView= useInView(ref)

        //to change state from [0,1,2,.....,value]
        useEffect(()=>{
            if(inView){
             motionValue.set(value)
            }
        },[inView,motionValue,value])
        

        //to set the latest value of state
        useEffect(()=>{
          springValue.on('change',(latest)=>{
            if(ref.current && latest.toFixed(0)<= value ){
                ref.current.textContent= latest.toFixed(0)
            }
          })
        },[springValue,value])
        return <span ref={ref} ></span>
    }
    return(
       <>
            <Head>
               <title>Athar ElHaidary | about me</title>
            </Head>
            <main className="flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16  flex justify-center"/>
                    {/* first child ===>general info section */}
                    <div className="grid grid-cols-8 gap-16 w-full">
                            {/* left side */}
                            <div className="col-span-3 flex flex-col   w-full">
                                    <h2 className="uppercase text-lg font-bold text-dark">biography</h2>
                                    <p className="font-medium">
                                        Hi, I'm Athar ElHaidary, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                                        and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                                        new and innovative ways to bring my clients' visions to life
                                    </p>
                                    <p className="font-medium my-4">
                                        I believe that design is about more than just making things look pretty – it's about solving problems and 
                                        creating intuitive, enjoyable experiences for users. 
                                    </p>
                                    <p className="font-medium">
                                        Whether I'm working on a website, mobile app, or 
                                        other digital product, I bring my commitment to design excellence and user-centered thinking to 
                                        every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                                    </p>
                            </div>
                            {/* center side */}
                            <div className="border-solid border-2 border-dark rounded-2xl h-max p-8 bg-light col-span-3 relative">
                                <div className="absolute top-2 -right-3 bg-dark -z-10 w-full h-full rounded-[2rem]">one</div>
                                <Image
                                src={profilePic}
                                alt="profilepic"
                                className="rounded-2xl w-full h-auto"
                                />
                            </div>
                            {/* right side */}
                            <div className="col-span-2 flex flex-col justify-between items-end ">
                                <InfoSection spanVlue="50" text="satisfied clients"/>
                                <InfoSection spanVlue="40" text="projects completed"/>
                                <InfoSection spanVlue="4" text="years of experience"/>
                            </div>
                    </div>

                    {/* second child ====>skills section */}
                    <Skills/>
                    {/* third child ====>experience section */}
                    <Experience/>
                </Layout>
            </main>
       </>

    )
}
export default about