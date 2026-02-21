'use client'
import React from 'react'
import Image from 'next/image'
import { Mail, SendHorizonal, ChevronLeft, ChevronRight, GraduationCap, Briefcase, Plane, CheckCircle, Globe, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { LogoCloud } from './logo-cloud'
import Link from 'next/link'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const heroImages = [
    '/New folder/canadaimage.jpg',
    '/New folder/travelimage2.jpg',
    '/New folder/canadavisa2.jpg',
    '/New folder/studentvisa.jpg',
    '/New folder/travelimage.jpg'
]

export default function HeroSection() {
    const [email, setEmail] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [currentImage, setCurrentImage] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return
        
        setLoading(true)
        try {
            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'Free Visa Check',
                    email,
                }),
            })
            setEmail('')
            alert('Thank you! We will contact you soon.')
        } catch (error) {
            alert('Failed to send. Please try again.')
        }
        setLoading(false)
    }

    return (
        <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
            <section>
                <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:pt-32">
                    <div className="grid lg:grid-cols-[500px_1fr] gap-10 items-start">
                        <div className="space-y-5">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-3xl font-bold md:text-4xl">
                                Trusted Travel & Immigration Experts in Rwanda
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.2}
                                as="p"
                                className="text-sm text-muted-foreground">
                                Your gateway to Canada, USA, and Europe. Expert immigration services including Express Entry, work permits, student visas, Schengen visas, plus flight booking and car rentals.
                            </TextEffect>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.4,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="space-y-4">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                    <Link href="/study-abroad" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                                        <GraduationCap className="size-5 text-blue-600 shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-xs">Study Abroad</h3>
                                            <p className="text-[10px] text-muted-foreground">Canada, USA, Europe</p>
                                        </div>
                                    </Link>
                                    <Link href="/immigration/work-permit" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                                        <Briefcase className="size-5 text-blue-600 shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-xs">Work Permits</h3>
                                            <p className="text-[10px] text-muted-foreground">Express Entry</p>
                                        </div>
                                    </Link>
                                    <Link href="/services/europe" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                                        <Globe className="size-5 text-blue-600 shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-xs">Schengen Visas</h3>
                                            <p className="text-[10px] text-muted-foreground">Europe travel</p>
                                        </div>
                                    </Link>
                                    <Link href="/services/travel" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                                        <Plane className="size-5 text-blue-600 shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-xs">Travel Services</h3>
                                            <p className="text-[10px] text-muted-foreground">Flights & rentals</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="bg-blue-600 rounded-xl p-4 text-white">
                                    <h3 className="font-bold text-sm mb-3">What We Offer</h3>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="size-3.5 shrink-0" />
                                            <span>Free eligibility check</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="size-3.5 shrink-0" />
                                            <span>CRS calculator & NOC finder</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="size-3.5 shrink-0" />
                                            <span>Document prep & SOP writing</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="size-3.5 shrink-0" />
                                            <span>Expert visa processing</span>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="bg-white dark:bg-zinc-900 rounded-[1.5rem] p-1.5 border shadow-sm">
                                        <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your email"
                                                className="h-10 w-full bg-transparent pl-3 focus:outline-none text-sm"
                                                type="email"
                                                required
                                            />
                                            <Button
                                                type="submit"
                                                disabled={loading}
                                                size="sm"
                                                className="rounded-xl bg-blue-600 hover:bg-blue-700 h-9 px-4 text-xs">
                                                Start Free Check
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </AnimatedGroup>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.3,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src={heroImages[currentImage]}
                                    alt="Travel & Immigration"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                    {heroImages.map((_, idx) => (
                                        <button key={idx} onClick={() => setCurrentImage(idx)} className={`h-2 rounded-full transition-all ${idx === currentImage ? 'bg-white w-8' : 'bg-white/60 w-2'}`} />
                                    ))}
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </div>
            </section>
            <LogoCloud />
        </main>
    )
}

const AppComponent = () => {
    return (
        <div className="relative space-y-3 rounded-[1rem] bg-white/5 p-4">
            <div className="flex items-center gap-1.5 text-orange-400">
                <Image
                    src="/heroimage.png"
                    alt="Hero"
                    width={20}
                    height={20}
                    className="size-5"
                />
                <div className="text-sm font-medium">Steps</div>
            </div>
            <div className="space-y-3">
                <div className="text-foreground border-b border-white/10 pb-3 text-sm font-medium">This year, you're walking more on average than you did in 2023.</div>
                <div className="space-y-3">
                    <div className="space-y-1">
                        <div className="space-x-1">
                            <span className="text-foreground align-baseline text-xl font-medium">8,081</span>
                            <span className="text-muted-foreground text-xs">Steps/day</span>
                        </div>
                        <div className="flex h-5 items-center rounded bg-gradient-to-l from-emerald-400 to-indigo-600 px-2 text-xs text-white">2024</div>
                    </div>
                    <div className="space-y-1">
                        <div className="space-x-1">
                            <span className="text-foreground align-baseline text-xl font-medium">5,412</span>
                            <span className="text-muted-foreground text-xs">Steps/day</span>
                        </div>
                        <div className="text-foreground bg-muted flex h-5 w-2/3 items-center rounded px-2 text-xs dark:bg-white/20">2023</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
