

import Button from './components/buttons/MainButton'
import AreasTrail from './components/homepage/Path'
import { CalendarCheck, MoveRight, MoveDown, MapPin } from 'lucide-react'
import Carousel from './components/homepage/Carousel'
import BentoGallery from './components/homepage/BentoGallery'


import OOTBLogo from './assets/ootb_w24.png'
import Fundo from './assets/FUNDO.jpg'
import leafImg from './assets/leaf1.png'
import leafImg2 from './assets/leaf2.png'
import leafImg3 from './assets/leaf3.png'
import starGreen from './assets/star_g.png'
import starPink from './assets/star_p.png'
import doodleOrange from './assets/d_o.png'
import doodleBlue from './assets/d_blu.png'
import './styles/leaves.css'
import EticCTA from './components/homepage/Cta'



function Homepage() {
    return (
        <>
        <section
            className="w-full overflow-visible bg-black relative">
            <div 
                className="z-1"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gridTemplateRows: 'repeat(3, 1fr)',
                    height: 'calc(100vh - 66px)',
                }}>
                <div className="absolute z-100 -left-24 bottom-0 h-52 w-52 rounded-full bg-[#c8ff00]/10 blur-3xl" />
                <div className="absolute z-100 right-0 sm:-right-24 top-0 h-52 w-52 rounded-full bg-[#745ff2]/10 blur-3xl" />
                <img
                    src={doodleBlue}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: '9%',
                        right: '15%',
                        width: '12%',
                        pointerEvents: 'none',
                        zIndex: 1,
                        userSelect: 'none',
                    }}
                />
                <img
                    src={doodleOrange}
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-0 right-0 w-[18%] sm:bottom-[-7%] sm:right-[-10%] sm:w-[25%]"
                    style={{
                        pointerEvents: 'none',
                        zIndex: 50,
                        userSelect: 'none',
                    }}
                />
            

                <img
                src={leafImg}
                alt=""
                aria-hidden="true"
                className="
                    leaf-1 absolute pointer-events-none select-none z-[200]
                    w-[55%] right-[-10%] top-[28%] -translate-y-1/2 rotate-[10deg]
                    sm:w-[45%] sm:right-[90%] sm:top-[18%] sm:rotate-[46deg]
                    md:w-[40%] md:right-[110%] md:top-[50%] md:rotate-[52deg]
                    lg:w-[40%] lg:right-[112%] lg:top-[45%] lg:rotate-[60deg]
                "
                />

                <img
                src={leafImg2}
                alt=""
                aria-hidden="true"
                className="
                    leaf-2 absolute pointer-events-none select-none z-[1]
                    w-[65%] right-[60%] top-[45%] -translate-y-1/2 rotate-[8deg]
                    sm:w-[46%] sm:right-[70%] sm:top-[52%] sm:rotate-[12deg]
                    md:w-[40%] md:right-[80%] md:top-[90%] md:rotate-[16deg]
                "
                />

                <img
                src={leafImg3}
                alt=""
                aria-hidden="true"
                className="
                    leaf-3 absolute pointer-events-none select-none z-[200]
                    w-[45%] right-[-5%] top-[92%] -translate-y-1/2 rotate-[280deg]
                    sm:w-[30%] sm:right-[-15%] sm:top-[23%] sm:rotate-[260deg]
                    md:w-[20%] md:right-[-5%] md:top-[35%] md:rotate-[290deg]
                "
                />
                <div
                    className="z-0 w-full h-full relative"
                    style={{
                        gridColumn: '1 / 6',
                        gridRow: '1 / 4',
                    }}
                >
                    <img
                        src={Fundo}
                        alt="Background"
                        className="w-full h-full object-cover contrast-125 brightness-90"
                    />
                    <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent" />
                    {/* <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-100 to-transparent" /> */}
                    <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent" />
                    {/* <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-100 to-transparent" /> */}
                    <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent" />
                    {/* <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-100 to-transparent" /> */}
                    <div className="absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-t from-black to-transparent" />
                    {/* <div className="absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-t from-gray-100 to-transparent" /> */}
                </div>

                <div
                    className="z-10 flex items-start justify-start px-6 relative [grid-column:2/4] [grid-row:1/2] max-sm:[grid-column:1/6] max-sm:justify-center"
                >
                    <img
                        src={OOTBLogo}
                        alt="OOTB Logo"
                        className="w-full min-w-[10%] max-w-[60%] h-auto max-sm:max-w-[80%] max-md:max-w-[60%] mt-[20%] sm:mt-[10%] md:mt-[0%] lg:mt-[0%]"
                    />
                    {/* Pink star — top-right of logotype */}
                    <img
                        src={starPink}
                        alt=""
                        aria-hidden="true"
                        style={{ width: '7%', position: 'absolute', top: '4%', left: '45%', pointerEvents: 'none', rotate: '-20deg' }}
                    />
                </div>

                <div
                    className="z-30 flex flex-col sm:flex-row items-end justify-center pb-20 px-6 gap-4 pl-12 relative [grid-column:2/3] [grid-row:3/4] max-sm:absolute max-sm:top-[55%] max-sm:left-0 max-sm:right-0 max-sm:justify-center max-sm:items-center max-sm:px-0 max-sm:pl-0 max-sm:pb-0"
                >
                    {/* Green star — near Explore button */}
                    <img
                        src={starGreen}
                        alt=""
                        aria-hidden="true"
                        style={{ width: '7%', position: 'absolute', bottom: '100%', left: '100%', pointerEvents: 'none', rotate: '-70deg' }}
                    />
                    <Button
                        name="PROGRAMAÇÃO"
                        textColor="black"
                        hoverTextColor="#c8ff00"
                        bgColor="#c8ff00"
                        hoverBgColor="black"
                        borderColor="black"
                        hoverBorderColor="#c8ff00"
                        borderWidth="2"
                        width="52"
                        height="8"
                        textSize="text-base"
                        fontSize="semibold"
                        svgLeft={<CalendarCheck size={18} />}
                        svgRight={<MoveRight size={18} />}
                    />
                    <Button
                        name="EXPLORE"
                        textColor="black"
                        hoverTextColor="#c8ff00"
                        bgColor="white"
                        hoverBgColor="black"
                        borderColor="black"
                        hoverBorderColor="#c8ff00"
                        borderWidth="2"
                        width="52"
                        height="8"
                        textSize="text-base"
                        fontSize="semibold"
                        svgRight={<MoveDown size={18} />}
                    />
                </div>
            </div>
        </section>
            <AreasTrail />
            <Carousel />
            <BentoGallery />
            <EticCTA />
        </>
    );
}

export default Homepage;