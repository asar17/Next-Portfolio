import { motion } from 'framer-motion'
const Skills = () =>{
    const AnimatedSkills = ({skill,x,y}) =>{
        return(
            <motion.div 
              className="flex justify-center item-center absolute cursor-pointer bg-dark text-light rounded-full py-3 px-6 shadow-dark"
              initial={{
                x:0,
                y:0
              }}
              whileInView={{
                x:x,
                y:y
              }}
              transition={{
                duration:1.5
              }}
            viewport={{once:true}}
            
            >
                {skill}
            </motion.div>
        )
    }
    return(
        <>
          <h1 className="font-bold text-8xl text-center mt-60">skills</h1>
          <div className="flex justify-center items-center relative  w-full h-screen bg-circleLight rounded-full">
            <AnimatedSkills skill="web"/>
            <AnimatedSkills skill="HTML" x="-25vw" y="2vw"/>
            <AnimatedSkills skill="CSS" x="-5vw" y="-10vw"/>
            <AnimatedSkills skill="JavaScript" x="20vw" y="6vw"/>
            <AnimatedSkills skill="ReactJS" x="0vw" y="12vw"/>
            <AnimatedSkills skill="NextJS" x="-20vw" y="-15vw"/>
            <AnimatedSkills skill="GatsbyJS" x="15vw" y="-12vw"/>
            <AnimatedSkills skill="Web Design" x="32vw" y="-5vw"/>
            <AnimatedSkills skill="Figma" x="0vw" y="-20vw"/>
            <AnimatedSkills skill="Firebase" x="-25vw" y="18vw"/>
            <AnimatedSkills skill="Tailwind CSS" x="18vw" y="18vw"/>
          </div>
        </>
    )
}
export default Skills;