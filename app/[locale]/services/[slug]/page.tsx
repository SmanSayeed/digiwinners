import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import servicesData from '@/data/services.json';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { ContactModal } from '@/components/contact-modal';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function generateStaticParams() {
    return servicesData.services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Services
                    </Link>

                    <div className="mb-12">
                        <div className="text-6xl mb-6">
                            {service.icon === 'cloud' ? '☁️' :
                                service.icon === 'shopping-cart' ? '🛒' :
                                    service.icon === 'zap' ? '⚡' :
                                        service.icon === 'layers' ? '🏗️' :
                                            service.icon === 'book' ? '📚' :
                                                service.icon === 'clipboard' ? '📋' :
                                                    service.icon === 'briefcase' ? '💼' :
                                                        service.icon === 'cash-register' ? '💰' :
                                                            service.icon === 'warehouse' ? '📦' :
                                                                service.icon === 'globe' ? '🌐' :
                                                                    service.icon === 'palette' ? '🎨' : '🚀'}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                            {service.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {service.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                            <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
                            <ul className="space-y-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                                        <span>Comprehensive solution tailored to your business needs.</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                            <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                            <ul className="space-y-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-blue-500 shrink-0" />
                                        <span>Increased efficiency and optimized performance.</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-primary text-primary-foreground p-12 rounded-3xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                        <p className="mb-8 opacity-90">Let's transform your business with our {service.title} services.</p>
                        <Link
                            href="/contact"
                            className="inline-block bg-background text-foreground px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
                        >
                            Contact Us Now
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <ContactModal />
            <FloatingWhatsApp />
        </main>
    );
}
