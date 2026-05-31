

import AreasTrail from './components/homepage/Path'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from './components/buttons/MainButton'
import Carousel from './components/homepage/Carousel'
import HeroGallery from './components/homepage/HeroGallery'
import OOTBLogo from './assets/etic_algarve/ootb_w26_900.webp'
import OOTBLogo450 from './assets/etic_algarve/ootb_w26_450.webp'
import leafImg from './assets/doodles/leaf1.webp'
import leafImg2 from './assets/doodles/leaf2.webp'
import leafImg3 from './assets/doodles/leaf3.webp'
import doodleOrange from './assets/doodles/d_o.webp'
import dateELocal from './assets/etic_algarve/data-e-local.webp'
import './styles/leaves.css'
import PageStars from './components/core/PageStars'
import EticCTA from './components/homepage/Cta'
import { motion } from 'framer-motion'
import { fadeUp, heroStagger, heroItem, viewport } from './utils/animations'



function Homepage() {
    return (
        <>
        <section className="relative h-[calc(100vh-66px)] flex items-stretch px-8 xl:px-20 overflow-hidden bg-black z-[200]">
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#c8ff00]/10 blur-3xl pointer-events-none" />


            {/* Stars — opacity only to avoid conflicting with CSS sway animation */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
                <PageStars />
            </motion.div>
            <motion.img
                src={doodleOrange}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-[18%] sm:bottom-[40%] sm:right-[-10%] sm:w-[25%] pointer-events-none select-none z-[50]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* Leaves — opacity only to avoid conflicting with CSS float animation */}
            <motion.img
                src={leafImg}
                alt=""
                aria-hidden="true"
                className="
                    leaf-1 absolute pointer-events-none select-none z-[2]
                    max-w-[35%] right-[60%] top-[34%] -translate-y-1/2 rotate-[5deg]
                    sm:w-[45%] sm:right-[50%] sm:top-[30%] sm:rotate-[46deg]
                    md:w-[30%] md:right-[50%] md:top-[50%] md:rotate-[350deg]
                    lg:w-[35%] lg:right-[112%] lg:top-[35%] lg:rotate-[60deg]
                    xl:w-[35%] xl:right-[112%] xl:top-[55%] xl:rotate-[60deg]
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.1 }}
            />
            <motion.img
                src={leafImg3}
                alt=""
                aria-hidden="true"
                className="
                    leaf-1 absolute pointer-events-none select-none z-[2]
                    max-w-[35%] right-[8%] top-[27%] -translate-y-1/2 rotate-[340deg]
                    sm:w-[40%] sm:right-[20%] sm:top-[20%] sm:rotate-[280deg]
                    md:w-[20%] md:right-[38%] md:top-[25%] md:rotate-[302deg]
                    lg:w-[15%] lg:right-[52%] lg:top-[40%] lg:rotate-[340deg] lg:z-[2]
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
            />
            <motion.img
                src={leafImg2}
                alt=""
                aria-hidden="true"
                className="
                    leaf-2 absolute pointer-events-none select-none z-[2]
                    max-w-[35%] right-[10%] top-[35%] -translate-y-1/2 rotate-[5deg]
                    sm:w-[46%] sm:right-[20%] sm:top-[40%] sm:rotate-[12deg]
                    md:w-[40%] md:right-[20%] md:top-[47%] md:rotate-[5deg]
                    lg:w-[20%] lg:right-[50%] lg:top-[60%] lg:rotate-[0deg]
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.25 }}
            />
            <motion.img
                src={leafImg2}
                alt=""
                aria-hidden="true"
                className="
                    leaf-2 absolute pointer-events-none select-none z-[2]
                    max-w-[35%] right-[10%] top-[35%] -translate-y-1/2 rotate-[5deg] hidden
                    lg:w-[40%] lg:right-[85%] lg:top-[50%] lg:rotate-[10deg] lg:block
                    xl:w-[40%] xl:right-[85%] xl:top-[90%] xl:rotate-[10deg] xl:block
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3 }}
            />

            {/* Date & local banner — opacity + float */}
            <motion.img
                src={dateELocal}
                alt="3 a 17 de julho, IPDJ"
                className="absolute z-[100] pointer-events-none select-none hidden lg:block w-full max-w-[300px] h-auto -rotate-3"
                style={{ left: '43%', top: '62%' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            />

            <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-stretch gap-12">
                {/* Left — logotype + CTAs */}
                <div className="flex-1 flex flex-col items-center lg:items-end justify-center py-4 pb-4 lg:py-8 lg:pb-32">
                    <motion.div variants={heroStagger} initial="hidden" animate="visible" className="flex flex-col gap-3 lg:gap-6 w-full max-w-[450px]">
                        <motion.img
                            variants={heroItem}
                            src={OOTBLogo}
                            srcSet={`${OOTBLogo450} 450w, ${OOTBLogo} 900w`}
                            sizes="(max-width: 1024px) 100vw, 450px"
                            alt="Out of the Box"
                            className="w-full h-auto select-none"
                        />
                        <motion.div variants={heroItem} className="flex justify-center pr-4">
                            <PrimaryButton href="/programacao" className="group">
                                Ver Programação
                                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </PrimaryButton>
                        </motion.div>
                        <motion.img
                            variants={heroItem}
                            src={dateELocal}
                            alt="3 a 17 de julho, IPDJ"
                            className="lg:hidden w-full max-w-[200px] h-auto -rotate-3 select-none pointer-events-none mx-auto"
                        />
                    </motion.div>
                </div>

                {/* Right — gallery + ETIC_Algarve logo */}
                <div className="hidden lg:block relative flex-1 mr-8 xl:mr-20">
                    <HeroGallery className="h-full" />
                </div>
            </div>
        </section>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                <AreasTrail />
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                <Carousel />
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                <EticCTA />
            </motion.div>
        </>
    );
}

export default Homepage;
