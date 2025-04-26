"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/news", label: "News" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <motion.nav
            className="bg-background py-4 px-6 shadow-md sticky top-0 z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    HeroNews
                </Link>
                <div className="space-x-4">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <Button variant="ghost" className={pathname === item.href ? "text-primary" : ""}>
                                {item.label}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
