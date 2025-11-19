import Hero from '@/components/sections/Hero';
import { HowWeWork } from '@/components/sections/HowWeWork';
import Services from '@/components/sections/Services';
import Skills from '@/components/sections/Skills';
import { CaseStudies } from '@/components/sections/CaseStudies';
import Stats from '@/components/sections/Stats';
import { ContactModal } from '@/components/contact-modal';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <Hero />
            <HowWeWork />
            <Stats />
            <Services />
            <Skills />
            <CaseStudies />
            <Footer />
            <ContactModal />
            <FloatingWhatsApp />
        </main>
    );
}
