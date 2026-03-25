"use client";
import { testimonials } from "@/lib/constants";
import { motion } from "motion/react"
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
export default function Testimonials(){
    const Max_Stars = 5
    return <>
    <section className=" relative py-20 min-h-screen border-2" id="testimonials">
            {/* <div className="absolute w-60 h-full md:w-140 md:h-200 lg:w-170 lg:h-160 rounded-b-full bg-primary/10 text-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center mb-16">
                        <motion.h2
                        initial = {{opacity: 0 , y: 24}}
                        whileInView = {{opacity: 1 , y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut"}}
                        className="text-4xl md:text-5xl font-black font-heading mb-8 text-foreground">
                            Testimonials
                            </motion.h2>
                        <motion.p 
                        initial = {{opacity: 0 , y: 24}}
                        whileInView = {{opacity: 1 , y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1}}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Real transformation from real people who chose to change their lives with our programs.
                        </motion.p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index)=> (
                            <motion.div key= {testimonial.name} className="group" >
                                <Card className="hover:shadow-2xl transition-shadow duration-300 hover:border-2 hover:border-primary">
                                    <CardContent className="p-8 text-center">
                                        <motion.div className="relative mb-6 h-30 w-30 mx-auto">
                                            <Image 
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="rounded-full object-cover border-4 border-primary/20
                                                group-hover:border-primary transition-colors duration-300"
                                            />
                                        </motion.div>
                                        <motion.div className="flex justify-center mb-4 gap-1">
                                        {Array.from({length: Max_Stars}).map(( _ , i) => {
                                            const filled = i < testimonial.rating;
                                            return (
                                                <Star key ={i} 
                                                className={filled ? "w-5 h-5 text-yellow-300 " : " w-5 h-5 text-neutral-300"}
                                                fill = {filled ? "currentcolor" : "none"}/>
                                            )
                                        })}
                                        </motion.div>
                                        <motion.blockquote className="text-lg font-bold font-heading text-foreground mb-4">
                                            {testimonial.story}
                                        </motion.blockquote>
                                        <motion.p className="text-muted-foreground mb-4 leading-relaxed">
                                            {testimonial.detail}
                                        </motion.p>
                                        <motion.cite className="text-primary text-lg font-bold font-heading italic">
                                            -- {testimonial.name}
                                        </motion.cite>
                                    </CardContent>
                                </Card>

                            </motion.div>
                        ))}
                    </div>
                </div>
        </section>
    </>
}