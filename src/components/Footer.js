import Layout from './Layout'
import Link from 'next/link'
const Footer = () =>{
    return(
        <footer className="w-full h-auto border-solid border-2 border-t-black">
            <Layout className="flex justify-between py-8 items-center">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className="flex items-center">
                    Build With
                    <span className="text-primary px-1 text-2xl">&#9825;</span>
                    <Link href="/" className="underline underline-offset-2">Athar ElHaidary</Link>
                </div>
                <Link href="/" className="underline underline-offset-2">Say Hello</Link>
            </Layout>
            
           
        </footer>
    )
}
export default Footer