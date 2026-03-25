import { Github, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return <>
    <footer className="text-neutral-100 bg-black transition-all duration-300">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
                {/* Brand  */}
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-3xl font-black font-heading text-primary mb-4">GpsFit</h3>
                    <p className="leading-relaxed mb-6 max-w-md">Transfrom your life with our comprehensive fitness programs, 
                        expert trainers, and supportive community.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/" className="w-12 h-12 bg-black rounded-full flex
                         items-center justify-center hover:bg-primary transition-colors duration-300">
                        <Instagram className="w-7 h-7"/>
                        </Link>
                        <Link href="/" className="w-12 h-12 bg-black rounded-full flex
                         items-center justify-center hover:bg-primary transition-colors duration-300">
                        <Youtube className="w-7 h-7"/>
                        </Link>
                        <Link href="/" className="w-12 h-12 bg-black rounded-full flex
                         items-center justify-center hover:bg-primary transition-colors duration-300">
                        <Github className="w-7 h-7"/>
                        </Link>
                    </div>
                </div>
                {/* Quick Link */}
                <div>
                    <h3 className="text-2xl font-black font-heading mb-6">Quick Link</h3>
                    <ul className="space-y-4">
                        {["Home", "About", "Programs", "Pricing", "Contact"].map((link) => (
                            <li key={link}>
                                <Link href="#"
                                className="hover:text-primary transition-colors duration-300">
                                {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Contact  */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-black font-heading mb-6">Contact Us</h3>
                    <div className="space-y-6">
                        <p>
                            <strong>Phone:</strong> <br />
                            +251903000000
                        </p>
                        <p>
                            <strong>Email:</strong> <br />
                            gpsfit@gmail.com
                        </p>
                        <p>
                            <strong>Location:</strong> <br />
                            Bole, Medhanialem <br />
                            Kebele 02
                        </p>
                    </div>
                </div>
            </div>
            <div className="border-t border-secondary/10 pt-12 text-center text-muted-foreground">
                <p> @2026 GpsFit Fitness. All rights reserved Transform your body, transform your life.</p>
            </div>
        </div>
    </footer>
    </>
}