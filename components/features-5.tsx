import { GraduationCap, Briefcase, Home } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold lg:text-5xl">The Ultra Large Advantage: Our Services</h2>
                    <p className="mt-6 text-lg">We don't just process papers; we engineer your move. We offer specialized services designed to achieve your ultimate goals.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="border rounded-3xl p-8 space-y-4">
                        <GraduationCap className="size-5" />
                        <h3 className="text-2xl font-semibold">Ultra Education</h3>
                        <p className="text-sm">Study Visas</p>
                        <p>Access elite universities and global knowledge. We provide full-cycle support—from strategic application planning to securing your student visa—so you can study where the opportunity is largest.</p>
                    </div>
                    <div className="border rounded-3xl p-8 space-y-4">
                        <Briefcase className="size-5" />
                        <h3 className="text-2xl font-semibold">Ultra Career</h3>
                        <p className="text-sm">Work Visas</p>
                        <p>Unlock high-demand jobs and maximize your earning potential abroad. We connect you with vetted employment and manage all necessary work permits, helping you maximize your earning potential in key global markets.</p>
                    </div>
                    <div className="border rounded-3xl p-8 space-y-4">
                        <Home className="size-5" />
                        <h3 className="text-2xl font-semibold">Ultra Life</h3>
                        <p className="text-sm">Permanent Migration</p>
                        <p>Secure your long-term future. We manage the complexities of permanent residency and settlement for you and your family, allowing you to build your legacy abroad with confidence and ease.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
