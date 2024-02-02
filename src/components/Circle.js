import { motion, useScroll } from 'framer-motion'
const Circle = ({reference}) =>{
    const { scrollYProgress }= useScroll(
        {
            target:reference,
            offset:["center end","center center"]
            //offset:["end end","end end"]
        }
    )
    return(
       <figure className="absolute left-0">
        <svg width="75" height="75" viewBox="0 0 100 100">
            <circle cx="75" cy="50" r="20" className="stroke-primary stroke-1 fill-none"></circle>
            <motion.circle 
            style= {{pathLength : scrollYProgress }}
            cx="75" cy="50" r="20" className="stroke-green-500 stroke-[5px] fill-light"></motion.circle>
            <circle cx="75" cy="50" r="5" className="stroke-primary stroke-1 fill-primary"></circle>

        </svg>            

       </figure>
    )
}
export default Circle