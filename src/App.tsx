import './App.css'
import {Footer} from "@/components/layout/Footer.tsx";
import {ScrollProgress} from "@/components/layout/ScrollProgress.tsx";
import {Navbar} from "@/components/layout/Navbar.tsx";
import {Hero} from "@/components/sections/Hero.tsx";
import {Features} from "@/components/sections/Features.tsx";
import {Testimonials} from "@/components/sections/Testimonials.tsx";
import {Stats} from "@/components/sections/Stats.tsx";
import {Solutions} from "@/components/sections/Solutions.tsx";
import {ContactCTA} from "@/components/sections/ContactCTA.tsx";

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
            <ScrollProgress />
            <Navbar />

            <Hero />
            <Features />
            <Solutions />
            <Stats/>
            <Testimonials />
            <ContactCTA />

            <main className={'w-full'}>

            </main>

            <Footer />
        </div>
    );
};

export default App
