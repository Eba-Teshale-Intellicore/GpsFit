"use client";
import { Activity, CheckCircle, Dumbbell, HeartPulse, Users } from "lucide-react";
// import * as motion from "motion/react-client";
import { motion } from "framer-motion";
export default function WhyChooseUs(){
    const features = [
        {
            icon: Dumbbell,
            title: "Personalized Workouts",
            description: "Get training plans tailored to your fitness level, goals, and progress."
        },
        {
            icon: Activity,
            title: "Real-Time Progress Tracking",
            description: "Monitor your workouts, calories, and performance with smart tracking tools."
        },
        {
            icon: HeartPulse,
            title: "Health & Wellness Focus",
            description: "Improve not just strength, but your overall health, energy, and lifestyle."
        },
        {
            icon: Users,
            title: "Community Support",
            description: "Stay motivated by connecting with a community of fitness enthusiasts."
        },
        {
            icon: CheckCircle,
            title: "Proven Results",
            description: "Follow programs designed by experts that deliver real, measurable results."
        }
    ];
    return <>
    <section className=" relative py-20 bg-primary-foreground min-h-screen">
        <div className="absolute w-60 h-full md:w-140 md:h-200 lg:w-170 lg:h-160 rounded-b-full bg-primary/10 text-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <motion.h2
                    initial = {{opacity: 0 , y: 24}}
                    whileInView = {{opacity: 1 , y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut"}}
                    className="text-4xl md:text-5xl font-black font-heading mb-8 text-foreground">
                        Why Choose <span className="text-primary">GpsFit</span> Fitness ?
                        </motion.h2>
                    <motion.p 
                    initial = {{opacity: 0 , y: 24}}
                    whileInView = {{opacity: 1 , y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1}}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We provide everything you need to succeed on your fitness journey with
                        proven methods and expert support.
                    </motion.p>
                </div>
                {/* Features Grid */}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    
                    {features.map((feature, index) => (
                        <motion.div 
                        className="group text-center p-8"
                        key={feature.title}
                        initial = {{ opacity: 0 , y: 24}}
                        whileInView={{ opacity: 1 , y: 0}}
                        viewport={{once : true}}
                        transition={{ delay: index * 0.12}}
                        whileHover={{scale: 1.05}}
                        >
                            <motion.div
                            className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6
                            group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" 
                            initial = {{scale: 0.9 , opacity: 0}}
                            whileInView={{scale: 1 , opacity: 1}}
                            viewport={{ once: true}}
                            transition={{ duration: 0.5 , ease: "easeOut",delay : index * 0.18}}
                            >
                                <feature.icon className="w-8 h-8"/>
                            </motion.div>
                            <motion.h3
                            className="text-2xl font-bold font-heading mb-4 mx-auto px-10 text-foreground"
                            initial = {{opacity: 0, y:8}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration:0.5 , ease: "easeOut", delay : index * 0.14}}
                            >{feature.title}</motion.h3>
                            <motion.p className="text-muted-foreground px-8 leading-relaxed">{feature.description}</motion.p>
                        </motion.div>
                        
                    ))}
                </div>
                
            </div>
        </section>
    </>
}