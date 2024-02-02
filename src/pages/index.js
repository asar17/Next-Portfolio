import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import HireMe from '../components/HireMe'
import Image from 'next/image'
import AnimatedText from '../components/AnimatedText'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import { DownloadIcon } from '../components/Icons'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="flex  items-center w-full min-h-screen text-dark ">
        {/* Resume section */}
        <Layout className="pt-0">
          {/* left side */}
          <div className="flex items-center justify-between w-full ">
            <div className=" w-1/2">
              <Image
               src={profilePic}
               className="w-full h-auto"
               alt="profileLogo"
              />
            </div>
            {/* right side */}
            <div className=" w-1/2 flex flex-col items-center self-cente">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left"/>
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link 
                  href="/dummy.pdf" 
                  className="flex p-2.5 px-6 items-center justify-center bg-dark text-light rounded-lg text-lg font-semibold border-solid border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark"
                >
                  Resume<DownloadIcon className={"fill-current text-light-600 ml-1"}/>
                </Link>

                <Link href="mailto:aelhaidary2019@gmail.com" className="text-lg capitalize underline text-dark font-medium ml-4 ">Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* Hire me section */}
        <HireMe/>
        {/* Light image section */}
        <div className="right-8 bottom-5 absolute w-24 inline-block">
          <Image
            src={lightBulb}
            alt="lightImage"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  )
}
