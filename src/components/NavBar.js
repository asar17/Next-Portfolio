import Link from 'next/Link'
import Logo from './Logo'
import { InstgramIcon, FacebookIcon, LinkedinIcon, TwitterIcon, GithubIcon  } from './Icons'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
const NavBar = ()=>{
    const router = useRouter()
    //to create navbar links
    const CustomLink = ({href,title,className=""}) => {
        return(
            <Link href={href} className={`${className} relative group`}>
                {title}
                <span className={`${router.asPath === href? 'w-full':'w-0'} inline-block  absolute -bottom-0.5 left-0  bg-black h-[1px] group-hover:w-full transition-[width] ease duration-300`}>&nbsp;</span>
            </Link>
        )

    }
    //to create social media links
    const CustomSocialMediaLink = ({icon,href}) =>{
        return(
            <motion.a
             href={href}
             target="_blank"
             whileHover={{
                y:-4
             }}
             whileTap={{
                scale:0.9
             }}
            >
                {icon}
            </motion.a>
        )
    }
    return(
        <header className=" px-32 py-8 font-medium flex justify-between items-center">
            
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='mx-4'/>
                <CustomLink href="/articles" title="Articles" className='mx-4'/>
            </nav>
           
            <nav className="flex justify-center items-center flex-wrap">
                <CustomSocialMediaLink icon={<FacebookIcon className="mr-3"/>} href="http://www.facebook.com"/>
                <CustomSocialMediaLink icon={<TwitterIcon className="mr-3"/>} href="http://www.twitter.com"/>
                <CustomSocialMediaLink icon={<InstgramIcon className="mr-3"/>} href="http://www.instgram.com"/>
                <CustomSocialMediaLink icon={<LinkedinIcon className="w-9 mr-3"/>} href="http://www.linkedin.com"/>
                <CustomSocialMediaLink icon={<GithubIcon className="w-9 mr-3"/>} href="http://www.github.com"/>
            </nav>

            <div className="absolute left-[50%] translate-x-[-50%] top-2">
                <Logo/>
            </div>
           
        </header>
    )
}
export default NavBar;