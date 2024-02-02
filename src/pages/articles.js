import Head from 'next/head'
import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/article1.jpg'
import {motion, useMotionValue} from 'framer-motion'
import {useRef} from 'react'

const articles = () =>{
    const FramerImage=motion(Image);
    const MovingImage=motion(Image);
   
  
    const FeaturedArticles = ({link,img,articleTitle,time,summary}) => {
        return(
            <li className="flex flex-col relative col-span-1 w-full border border-solid border-dark bg-light p-12 rounded-2xl">
                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark border border-solid border-dark"/>
                {/* elem one */}
                <Link href={link} target="_blank" className="inline-block w-full rounded-lg overflow-hidden cursor-pointer">
                   <FramerImage src={img} className="w-full h-auto" whileHover={{scale:1.2}} transition={{duration:0.2}}/>
                </Link>
                {/* elem two */}
                <Link href={link} target="_blank">
                  <h2 className="capitalize text-2xl font-bold my-2 hover:underline">{articleTitle}</h2>
                </Link>
                {/* elem three */}
                <p className="text-sm mb-2">{summary}</p>
                {/* elem four */}
                <span className="text-primary font-semibold">{time}</span>
            </li>
        )
    }
    const MoveImage = ({linkUrl,articleTitle,img}) =>{
        const x=useMotionValue(0);
        const y=useMotionValue(0);
        const imageRef=useRef(null);
        function displayImage(event){
            x.set(event.pageX)
            y.set(-10)
            imageRef.current.style.display="inline-block"
        }
        function hideImage(event){
            x.set(0)
            y.set(0)
            imageRef.current.style.display="none"

        }

        return(
          <Link href={linkUrl} target="_blank"  onMouseMove={displayImage} onMouseLeave={hideImage}>
                <h2 className="text-xl capitalize hover:underline font-semibold">{articleTitle}</h2>
                <MovingImage 
                   src={img} 
                   ref={imageRef} 
                   alt={articleTitle} 
                   className="hidden absolute  w-96 h-auto rounded-lg z-10"
                   initial={{opacity:0}}
                   style={{x:x,y:y}}
                   whileInView={{opacity:1,transition:{duration:0.2}}}

                />
          </Link>
        )        
    }
    const Articles = ({articleTitle,date,linkUrl,img}) =>{
        return(
            <motion.li 
              className=" w-full flex justify-between items-center rounded-xl p-4 py-6 my-4 text-dark border border-solid border-dark bg-light border-r-4 border-b-4"
              initial={{y:200}}
              whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}
              viewport={{once:true}}

            >
                <MoveImage linkUrl={linkUrl} articleTitle={articleTitle} img={img}/>
                <span className="text-primary text-semibold">{date}</span>
            </motion.li>
        )
    }
    return(
       <>
        <Head>
               <title>Athar ElHaidary | articles</title>
        </Head>
        <main className="flex flex-col justify-center items-center overflow-hidden w-full mb-16">
            <Layout className="pt-16">
                {/* first child */}
                <AnimatedText text="Words Can Change The World!" className="text-center mb-16"/>
                {/* featured articles section */}
                <ul className="grid grid-cols-2 gap-16">
                    <FeaturedArticles
                      img={article1}
                      link="/"
                      articleTitle="Build A Custom Pagination Component In Reactjs From Scratch"
                      summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                      Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                      time="9 min read"
                    />
                     <FeaturedArticles
                      img={article1}
                      link="/"
                      articleTitle="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                      summary="Learn how to create stunning loading screens in React with 3 different methods. 
                      Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                      Improve the user experience."
                      time="10 min read"
                    />
                </ul>
                <h2 className="text-center my-16 mb-4 w-full font-bold capitalize text-4xl">all articles</h2>
                {/* articles section */}
                <ul>
                    <Articles
                    articleTitle="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    linkUrl="/"
                    date="March 22 2023"
                    img={article1}
                    />
                </ul>
                <ul>
                    <Articles
                    articleTitle="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                    linkUrl="/"
                    date="March 22 2023"
                    img={article1}
                    />
                </ul>
                <ul>
                    <Articles
                    articleTitle="Creating An Efficient Modal Component In React Using Hooks And Portals"
                    linkUrl="/"
                    date="March 22 2023"
                    img={article1}
                    />
                </ul>
                <ul>
                    <Articles
                    articleTitle="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
                    linkUrl="/"
                    date="March 22 2023"
                    img={article1}
                    />
                </ul>
                <ul>
                    <Articles
                    articleTitle="Redux Simplified: A Beginner's Guide For Web Developers"
                    linkUrl="/"
                    date="March 22 2023"
                    img={article1}
                    />
                </ul>
                <ul>
                    <Articles
                    articleTitle="What Is Higher Order Component (Hoc) In React?"
                    linkUrl="/"
                    date="March 22 2023"
                    img={article1}
                    />
                </ul>
            </Layout>
        </main>
       </>
    )
}
export default articles