"use client";
import { plans } from "@/lib/constants"
import {motion} from "motion/react"
import { Card, CardContent, CardHeader } from "./ui/card";
import { features } from "process";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";
export default function Pricing(){
    return <>
    <section className=" relative py-20 bg-primary-foreground min-h-screen" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <motion.h2
                    initial = {{opacity: 0 , y: 24}}
                    whileInView = {{opacity: 1 , y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut"}}
                    className="text-4xl md:text-5xl font-black font-heading mb-8 text-foreground">
                        Simple, Transparent <span className="text-primary">Pricing</span>
                        </motion.h2>
                    <motion.p 
                    initial = {{opacity: 0 , y: 24}}
                    whileInView = {{opacity: 1 , y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1}}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Choose a plan that fits your goals and start building a stronger, healthier you.
                    </motion.p>
                </div>

                {/* plans */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i ) => (
                        <motion.div
                        key={plan.name} className="relative"
                        >
                            <Card className={`${plan.popular ? "border-primary border-2" : " "}`}>
                                {plan.popular && (
                                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">Most Popular</Badge>
                                )}
                                <CardHeader className="text-center p-8 pb-0">
                                    <h3 className="text-2xl font-bold font-heading mb-4">{plan.name}</h3>
                                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                                    <div className="text-lg">
                                        <span className="text-5xl font-black font-heading text-foreground">{plan.price}</span>
                                        <span className="text-3xl font-black font-heading text-foreground">{plan.sign}</span>
                                        <span className="text-muted-foreground ml-1">/{plan.period}</span>
                                    </div>
                                </CardHeader>
                                <CardContent> 
                                    <ul className="space-y-8 m-8 mb-10">
                                        {plan.features.map(( feature, i )=> (
                                            <li key={feature} className="flex items-center">
                                                <Check className="w-5 h-5 text-green-500 pr-1"/>
                                                <span className="text-muted-foreground">{feature}</span>
                                                </li>
                                        ))}
                                    </ul>
                                    <Button className={`w-full py-5 text-lg font-semibold transition-colors duration-300 
                                        ${plan.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                                        : "bg-foreground/90 hover:bg-primary text-primary-foreground"}`}>
                                        {plan.cta}
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <motion.div className="text-center mx-auto mt-12">
                    <p className="text-muted-foreground">All plans include a 2-day free trial. No commitment required.</p>
                </motion.div>
                </div>
        </section>
    </>
}