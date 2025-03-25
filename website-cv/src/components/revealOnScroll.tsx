import { useEffect, useRef, ReactNode } from "react"

interface RevealScrollProps{
    children: ReactNode;
}

export const RevealOnScroll: React.FC<RevealScrollProps> = ({children}) =>{

    const ref = useRef(null)
    
    useEffect(() =>{
        const observer = new IntersectionObserver(([entry]) =>{
            if(entry.isIntersecting && ref.current){
                (ref.current as HTMLDivElement).classList.add("visible");
            }
        }, {threshold: 0.2, rootMargin: "0px 0px -50px 0px"});
        if(ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    });

    return(
        <div ref={ref} className="reveal">
            {children} 
        </div>
    )
}