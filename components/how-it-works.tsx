import { CheckCircle, FileText, Plane, UserCheck } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function HowItWorks() {
    return (
        <section className="py-16 md:py-32 bg-zinc-50 dark:bg-transparent">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold lg:text-5xl mb-4">How ULTRALARGE LTD Works</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Your trusted partner for immigration success. We simplify the complex visa process in 4 clear steps.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-gray-100 dark:bg-gray-800">
                            <UserCheck className="size-6 text-gray-700 dark:text-gray-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Free Assessment</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Get instant eligibility check for Canada Express Entry, USA DV Lottery, or Europe work permits. Expert consultation at no cost.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-gray-100 dark:bg-gray-800">
                            <FileText className="size-6 text-gray-700 dark:text-gray-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Document Preparation</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Complete document support: CRS score calculation, NOC code finder, SOP writing, WES guidance, and all required paperwork.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-gray-100 dark:bg-gray-800">
                            <CheckCircle className="size-6 text-gray-700 dark:text-gray-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Visa Application</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Professional submission of Express Entry, work permits, student visas, Schengen visas, and family sponsorship applications.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-gray-100 dark:bg-gray-800">
                            <Plane className="size-6 text-gray-700 dark:text-gray-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Travel & Settlement</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Complete travel services: flight booking, car rental, and post-arrival settlement support for your new life abroad.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-600 rounded-[2rem] p-8 md:p-10 text-white shadow-2xl">
                    <h3 className="text-3xl font-bold mb-8 text-center">Everything You Need in One Platform</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Calculate CRS Score</strong>
                                <span className="text-sm text-blue-100">Express Entry points calculator</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Find NOC Codes</strong>
                                <span className="text-sm text-blue-100">Occupation classification tool</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Apply for Visas</strong>
                                <span className="text-sm text-blue-100">Canada, USA, Europe services</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Book Travel</strong>
                                <span className="text-sm text-blue-100">Flights & car rental</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Expert Guidance</strong>
                                <span className="text-sm text-blue-100">Free consultation included</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="size-5 shrink-0 mt-1" />
                            <div>
                                <strong className="block">Document Support</strong>
                                <span className="text-sm text-blue-100">Complete preparation help</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                                <Link href="/contact">Book Free Consultation</Link>
                            </Button>
                            <Button asChild size="lg" className="bg-white/20 text-white hover:bg-white hover:text-blue-600 font-semibold border-2 border-white">
                                <Link href="/tools">Explore Tools</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
