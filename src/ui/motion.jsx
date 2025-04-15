import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "motion/react";

export const Reval = ({children, width}) =>{
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true}) 
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
        
    }, [isInView ])
    return(
        <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 195},
                    visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls }
                transition={{ duration: 1, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 195},
                    visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={slideControls }
                transition={{ duration: 1, ease: 'easeIn'}}
                style={{
                    position: "absolute",
                    top: 4,
                    left: 0,
                    right: 0,
                    bottom: 4,
                    background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                    zIndex: 20,
                    

                }}
            >
            </motion.div>

        </div>
    )
}
export const RevalAboutImg = ({children, width}) =>{
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true}) 
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
        
    }, [isInView ])
    return(
        <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, x: 195},
                    visible: {opacity: 1, x: 0},
                }}
                initial="hidden"
                animate={mainControls }
                transition={{ duration: 1, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {opacity: 0, x: 195},
                    visible: {opacity: 1, x: 0},
                }}
                initial="hidden"
                animate={slideControls }
                transition={{ duration: 1, ease: 'easeIn'}}
                style={{
                    position: "absolute",
                    top: 4,
                    left: 0,
                    right: 0,
                    bottom: 4,
                    background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                    zIndex: 20,
                    

                }}
            >
            </motion.div>

        </div>
    )
}
export const RevalAboutContent = ({children, width}) =>{
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true}) 
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
        
    }, [isInView ])
    return(
        <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, x: -195},
                    visible: {opacity: 1, x: -0},
                }}
                initial="hidden"
                animate={mainControls }
                transition={{ duration: 1, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {opacity: 0, x: -95},
                    visible: {opacity: 1, x: -0},
                }}
                initial="hidden"
                animate={slideControls }
                transition={{ duration: 1, ease: 'easeIn'}}
                style={{
                    position: "absolute",
                    top: 4,
                    left: 0,
                    right: 0,
                    bottom: 4,
                    background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                    zIndex: 20,
                    

                }}
            >
            </motion.div>

        </div>
    )
}

export const RevalTopBottom = ({children, width}) =>{
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true}) 
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
        
    }, [isInView ])
    return(
        <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: -195},
                    visible: {opacity: 1, y: -0},
                }}
                initial="hidden"
                animate={mainControls }
                transition={{ duration: 1, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: -195},
                    visible: {opacity: 1, y: -0},
                }}
                initial="hidden"
                animate={slideControls }
                transition={{ duration: 1, ease: 'easeIn'}}
                style={{
                    position: "absolute",
                    top: 4,
                    left: 0,
                    right: 0,
                    bottom: 4,
                    background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                    zIndex: 20,
                    

                }}
            >
            </motion.div>

        </div>
    )
}