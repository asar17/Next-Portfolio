import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import Circle from './Circle'
const Experience = () =>{
    const ref2= useRef(null)
    
    const ListItemsDetails = ({ position, companyLink, duration, address, work }) => {
        return(
            <li ref={ref2} className="border-solid border-2 last:mb-0 border-blue-500 mb-10 flex flex-col items-center justify-between w-[60%] mx-auto">
                <Circle reference={ref}/>
                <div>
                    <h3 className="font-bold text-3xl">
                        {position}&nbsp;
                        <a href={`http://www.${companyLink}`} className="text-primary">@{companyLink}</a>
                    </h3>
                    <span className="text-dark/75 font-medium">
                        { duration } | { address }
                    </span>
                    <p className="font-medium w-full">{work}</p>

                </div>
            </li>
        )
    }
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target:ref
    })
    
    return(
        <div className="border-solid border-2 border-black my-64 " ref={ref}>
            <h1 className="font-bold text-8xl w-full text-center mb-32 border-solid border-2 border-black">Experience</h1>
            <div  className="border-solid border-2 border-red-500 w-[75%] mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute bg-dark w-[4px] h-full top-0 left-8 origin-top"/>
                    
                <ul className="flex flex-col items-start justify-between ml-14 border-solid border-2 border-yellow-400" >
                    <ListItemsDetails
                        position="Software Engineer" 
                        companyLink="Google"
                        duration="2022-Present" 
                        address= "Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />

                    <ListItemsDetails
                        position="Intern "
                        companyLink="Facebook"
                        duration="Summer 2021 "
                        address="Menlo Park, CA."
                        work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                        share short-form video content, including designing and implementing a new user interface and developing 
                        the backend infrastructure to support the feature."
                    />

                    <ListItemsDetails
                    position="Software Developer" 
                    companyLink="Amazon"
                    duration="2020-2021" 
                    address="Seattle, WA."
                    work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                    as product recommendations and user reviews, and optimizing the app's performance and reliability."
                    />

                   <ListItemsDetails
                        position="Intern "
                        companyLink="Facebook"
                        duration="Summer 2021 "
                        address="Menlo Park, CA."
                        work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                        share short-form video content, including designing and implementing a new user interface and developing 
                        the backend infrastructure to support the feature."
                    />

                    <ListItemsDetails
                    position="Software Developer" 
                    companyLink="Amazon"
                    duration="2020-2021" 
                    address="Seattle, WA."
                    work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                    as product recommendations and user reviews, and optimizing the app's performance and reliability."
                    />


                    <ListItemsDetails
                        position="Intern "
                        companyLink="Facebook"
                        duration="Summer 2021 "
                        address="Menlo Park, CA."
                        work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                        share short-form video content, including designing and implementing a new user interface and developing 
                        the backend infrastructure to support the feature."
                    />

                    <ListItemsDetails
                    position="Software Developer" 
                    companyLink="Amazon"
                    duration="2020-2021" 
                    address="Seattle, WA."
                    work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                    as product recommendations and user reviews, and optimizing the app's performance and reliability."
                    />


                   <ListItemsDetails
                        position="Intern "
                        companyLink="Facebook"
                        duration="Summer 2021 "
                        address="Menlo Park, CA."
                        work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                        share short-form video content, including designing and implementing a new user interface and developing 
                        the backend infrastructure to support the feature."
                    />

                    <ListItemsDetails
                    position="Software Developer" 
                    companyLink="Amazon"
                    duration="2020-2021" 
                    address="Seattle, WA."
                    work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                    as product recommendations and user reviews, and optimizing the app's performance and reliability."
                    />
                </ul>
            </div>
        </div>
    )
}
export default Experience;