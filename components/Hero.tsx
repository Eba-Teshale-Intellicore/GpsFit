import Image from "next/image";
import { Button } from "./ui/button";
import * as motion from "motion/react-client"
export default function Hero() {
    return (
        <section className="h-screen relative flex items-center justify-center overflow-hidden" id="">
            <div className="absolute inset-0">
            <Image 
                src="/fitness.png"
                alt="Fitness Hero"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mt-32">
                <motion.div
                    initial={{opacity:0 , y: 24}}
                    animate={{opacity:1 , y:0}}
                    transition={{ duration: 0.7, ease:"easeInOut" }}
                >
                <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tighter " >
                    “Push Limits. <br /><span className="text-primary">Achieve Greatness.”</span>
                </h1>
                <motion.p 
                initial = {{ opacity: 0 , y:12 }}
                animate ={{ opacity: 1, y: 0}}
                transition={{ delay: 0.3, duration: 0.8}}
                className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
                    “Flexible plans, guided exercises, and nutrition tips designed to make fitness a seamless part of your day.”
                </motion.p>
                <div className="flex flex-col md:flex-row md:gap-10 gap-4 justify-center">
                    <Button size={"lg"} className="bg-primary hover:bg-primary/90 hover:border-accent text-lg font-semibold px-10 py-6 transition-transform duration-200 hover:scale-105">Start Here....</Button>
                    <Button size={"lg"} variant={"outline"} className="bg-transparent text-lg font-semibold px-10 py-6 transition-transform duration-200 hover:scale-105">View Plans</Button>
                </div>
                </motion.div>
            </div>
            {/* scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 text-primary -translate-x-1 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <div className="w-2 h-3 mt-2 bg-primary animate-pulse rounded-full"></div>
                </div>
            </div>
        </section>
    );
}



// “Push Limits.
// Achieve Greatness.”

// Option 2 (Action-Oriented):

// “Track your progress, stay motivated, and transform your body with our smart fitness programs.”
// Option 3 (Lifestyle-Oriented):

// “Flexible plans, guided exercises, and nutrition tips designed to make fitness a seamless part of your day.”