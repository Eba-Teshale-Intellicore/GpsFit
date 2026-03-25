"use client";
import * as motion from "motion/react-client"

import { programs } from "@/lib/constants";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function Programs() {
    return (
        <>
            <section className="py-20 border" id="programs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2 
                        initial = {{opacity: 0 , y: 24}}
                        whileInView = {{opacity: 1 , y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut"}}
                        className="text-4xl md:text-5xl font-black font-heading mb-8 text-foregroun">
                            Our Program
                            </motion.h2>
                        <motion.p 
                        initial = {{opacity: 0 , y: 24}}
                        whileInView = {{opacity: 1 , y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1}}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Choose from our comphensive fitness programs designed to meet your
                            specific goals and fitness level.
                        </motion.p>
                    </div>
                    {/* Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <motion.div  
                                        initial = {{opacity: 0 , y: 24}}
                                        whileInView = {{opacity: 1 , y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2}}
                                        whileHover={{scale: 1.02}}
                            key= {index} className="group cursor-pointer">
                                <Card className="p-0 transition-shadow duration-300 hover:shadow-2xl">
                                    <div className="relative overflow-hidden rounded-t-lg w-full h-70 md:h-70 lg:h-90">
                                    <Image 
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-115"
                                    />
                                    </div>
                                    <CardContent className="px-10 py-6">
                                        <motion.h3 
                                        initial = {{opacity: 0 , y: 8}}
                                        whileInView = {{opacity: 1 , y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.2}}
                                        className="text-2xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-all">
                                            {program.title}</motion.h3>
                                        <motion.p
                                        initial = {{opacity: 0 , y: 8}}
                                        whileInView = {{opacity: 1 , y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.4}}
                                        className="text-xl text-muted-foreground mb-4 p-6 leading-relaxed ">
                                            {program.description}</motion.p>
                                            <div>
                                                <Button size={"lg"} className="w-full text-semibold text-xl bg-primary-foreground px-10 py-6 mt-0 text-primary transtion-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground border-2 border-primary">
                                                    Learn More</Button>
                                            </div>
                                    </CardContent>
                                </Card>
                        </motion.div>
                        ))};
                    </div>
                </div>
            </section>
        </>
    );
}