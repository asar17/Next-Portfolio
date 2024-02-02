import Head from 'next/head'
import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/article1.jpg'
const articles = () =>{
    const FeaturedArticles = ({link,img,articleTitle,time,summary}) => {
        return(
            <li className="col-span-1 w-full border border-solid border-dark bg-light p-12 rounded-2xl">
                {/* elem one */}
                <Link href={link} target="_blank" className="w-full rounded-lg overflow-hidden cursor-pointer">
                   <Image src={img} className="w-full h-auto"/>
                </Link>
                {/* elem two */}
                <Link href={link} target="_blank">
                  <h2 className="capitalize text-2xl font-bold my-2">{articleTitle}</h2>
                </Link>
                {/* elem three */}
                <p className="text-sm mb-2">{summary}</p>
                {/* elem four */}
                <span className="text-primary font-semibold">{time}</span>
            </li>
        )
    }
    return(
       <>
        <Head>
               <title>Athar ElHaidary | articles</title>
        </Head>
        <main className="border-solid border-red-500 border-2 flex flex-col justify-center items-center overflow-hidden w-full mb-16">
            <Layout className="border-solid border-black border-2 pt-16">
                {/* first child */}
                <AnimatedText text="Words Can Change The World!" className="text-center mb-16"/>
                <ul className="grid grid-cols-2 gap-16">
                    <FeaturedArticles
                      img={article1}
                      link="/"
                      articleTitle="Build A Custom Pagination Component In Reactjs From Scratch"
                      summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                      Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                      time="9 min read"
                    />
                    <li>two</li>
                </ul>
            </Layout>
        
        </main>
       </>
    )
}
export default articles