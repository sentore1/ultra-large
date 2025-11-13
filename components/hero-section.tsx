'use client'
import React from 'react'
import Image from 'next/image'
import { Mail, SendHorizonal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { LogoCloud } from './logo-cloud'

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
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    const [email, setEmail] = React.useState('')
    const [loading, setLoading] = React.useState(false)

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
                    <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-balance text-5xl font-normal md:text-6xl">
                                Ultra Large: Your Future, Scaled Up
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mx-auto mt-6 max-w-2xl text-pretty text-base">
                                Stop dreaming about a bigger life and start living it. Ultra Large is your dedicated partner for securing successful study, work, and permanent residency visas across the globe. We simplify complex immigration processes so you can focus on monumental results.
                            </TextEffect>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12">
                                <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
                                    <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                                        <SendHorizonal className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="h-12 w-full bg-transparent pl-12 focus:outline-none text-sm"
                                            type="email"
                                            maxLength={50}
                                            required
                                        />
                                        <div className="md:pr-1.5 lg:pr-0">
                                            <Button
                                                type="submit"
                                                disabled={loading}
                                                aria-label="submit"
                                                size="sm"
                                                className="rounded-xl bg-blue-600 hover:bg-blue-700">
                                                <span className="hidden md:block">Start Free Check</span>
                                                <SendHorizonal
                                                    className="relative mx-auto size-5 md:hidden"
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </form>

                                <div className="relative mx-auto mt-32 max-w-2xl">
                                    <Image
                                        src="/heroimage4.png"
                                        alt="Hero Image"
                                        width={320}
                                        height={400}
                                        className="mx-auto"
                                    />
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
