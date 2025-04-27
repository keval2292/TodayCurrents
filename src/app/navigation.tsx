"use client";

import { Button } from "@/components/ui/button"; // Ensure this import is correct
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react"; 

const Navigation = () => {
    const pathname = usePathname();
    const isMobile: boolean = useIsMobile();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/news", label: "News" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ] as const;

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navVariants = {
        open: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3 },
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.3 },
        },
    };

const navItemVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

    return ( 
        <motion.nav
            className="bg-background py-4 px-6 shadow-md sticky top-0 z-50 w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    HeroNews
                    </Link>
                    {isMobile ? (
                        <div className="md:hidden">
                            <Button variant="ghost" onClick={handleNavToggle} className="text-primary">
                                {isNavOpen ?   <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </Button>
                        </div>
                    ) : (
                        <div className="hidden md:flex space-x-4">
                            {navItems.map((item) => (
                                <motion.div animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} key={item.href}>                                    
                                    <Link href={item.href}>                                        
                                        <Button                                            
                                            variant="ghost"                                            
                                            className={`transition-all ${                                                
                                            pathname === item.href ? "text-primary" : "text-foreground"                                                
                                            }`}                                        
                                            >                                           
                                              {item.label}                                            
                                        </Button>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            
                <motion.div
                        className={`md:hidden absolute top-full left-0 w-full bg-background`}
                        variants={navVariants}
                        animate={isNavOpen ? "open" : "closed"}
                    >
                        {navItems.map((item) => (
                            <motion.div variants={navItemVariants} key={item.href} className="px-6 py-3">
                                <Link href={item.href} className="block">
                                    <Button variant="ghost" className={pathname === item.href ? "text-primary" : ""}>
                                        {item.label}
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
        </motion.nav>
    );
};

export default Navigation;
