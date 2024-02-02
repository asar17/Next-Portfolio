const Layout = ({children,className}) =>{
    return(
        <div className={`bg-white w-full h-full p-32 inline-block z-0 ${className}`}>
            {children}
        </div>
    )
}
export default Layout