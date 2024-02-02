import { WebDevIcon } from './Icons'
import Link from 'next/link'

const HireMe = () =>{
    return(
        <div className="fixed left-4 bottom-4 flex justify-center items-center overflow-hidden">
            <div className="flex justify-center items-center w-48 h-auto relative">
               <WebDevIcon className={"rounded-full fill-current text-light-600 animate-ping-slow"}/>
            </div>
            
        </div>
    )
}
export default HireMe