

import AreasTrail from './components/homepage/Path'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PrimaryButton, SecondaryButton } from './components/buttons/MainButton'
import Carousel from './components/homepage/Carousel'
import HeroGallery from './components/homepage/HeroGallery'
import OOTBLogo from './assets/ootb_w26.webp'
import leafImg from './assets/leaf1.webp'
import leafImg2 from './assets/leaf2.webp'
import doodleOrange from './assets/d_o.webp'
import starGreen from './assets/star_g.webp'
import starPink from './assets/star_p.webp'
import dateELocal from './assets/data-e-local.webp'
import eticLogo from './assets/etic.webp'
import './styles/leaves.css'
import EticCTA from './components/homepage/Cta'



function Homepage() {
    return (
        <>
        <section className="relative h-[calc(100vh-66px)] flex items-stretch px-8 xl:px-20 overflow-hidden bg-black z-[200]">
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#c8ff00]/10 blur-3xl pointer-events-none" />
            

            {/* Stars */}
            <img
                src={starPink}
                alt=""
                aria-hidden="true"
                className="leaf-2 absolute pointer-events-none select-none z-[2]"
                style={{ width: '6%', top: '7%', left: '40%', rotate: '-20deg' }}
            />
            <img
                src={starGreen}
                alt=""
                aria-hidden="true"
                className="leaf-1 absolute pointer-events-none select-none z-[2]"
                style={{ width: '4%', bottom: '18%', left: '46%', rotate: '-70deg' }}
            />
            <img
                src={doodleOrange}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-[18%] sm:bottom-[40%] sm:right-[-10%] sm:w-[25%] pointer-events-none select-none z-[50]"
            />

            {/* Leaves */}
            <img
                src={leafImg}
                alt=""
                aria-hidden="true"
                className="
                    leaf-1 absolute pointer-events-none select-none z-[200]
                    w-[55%] right-[-10%] top-[28%] -translate-y-1/2 rotate-[10deg]
                    sm:w-[45%] sm:right-[90%] sm:top-[18%] sm:rotate-[46deg]
                    md:w-[40%] md:right-[110%] md:top-[50%] md:rotate-[52deg]
                    lg:w-[35%] lg:right-[112%] lg:top-[45%] lg:rotate-[60deg]
                "
            />
            <img
                src={leafImg2}
                alt=""
                aria-hidden="true"
                className="
                    leaf-2 absolute pointer-events-none select-none z-[2]
                    w-[65%] right-[60%] top-[45%] -translate-y-1/2 rotate-[8deg]
                    sm:w-[46%] sm:right-[70%] sm:top-[52%] sm:rotate-[12deg]
                    md:w-[40%] md:right-[78%] md:top-[98%] md:rotate-[5deg]
                "
            />
            {/* Date & local banner — center overlap */}
            <img
                src={dateELocal}
                alt="3 a 17 de julho, IPDJ"
                className="absolute z-[100] pointer-events-none select-none hidden lg:block w-full max-w-[300px] h-auto -rotate-3"
                style={{ left: '43%', top: '62%' }}
            />

            <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-stretch gap-12">
                {/* Left — logotype + CTAs */}
                <div className="flex-1 flex flex-col items-center lg:items-end justify-center py-8 pb-32">
                    <div className="flex flex-col gap-6 w-full max-w-[450px]">
                        <img
                            src={OOTBLogo}
                            alt="Out of the Box"
                            className="w-full h-auto select-none"
                        />
                        <div className="flex justify-center pr-4">
                            <PrimaryButton href="/sunset-talks" className="group">
                                Ver Programação
                                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </PrimaryButton>
                        </div>
                        <img
                            src={dateELocal}
                            alt="3 a 17 de julho, IPDJ"
                            className="lg:hidden w-full max-w-[300px] h-auto -rotate-3 select-none pointer-events-none mx-auto"
                        />
                    </div>
                </div>

                {/* Right — gallery + ETIC_Algarve logo */}
                <div className="hidden lg:block relative flex-1 mr-8 xl:mr-20">
                    <HeroGallery className="h-full" />
                </div>
            </div>
        </section>
            <AreasTrail />
            <Carousel />
            <EticCTA />
        </>
    );
}

export default Homepage;