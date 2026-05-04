

import Button from '../components/buttons/MainButton'
import Countdown from '../components/Countdown'
import AreasTrail from '../components/Path'
import { CalendarCheck, MoveRight, MoveDown, MapPin } from 'lucide-react'
import Carousel from '../components/Carousel'
import BentoGallery from '../components/BentoGallery'


import OOTBLogo from '../assets/ootb_w.png'
import Fundo from '../assets/FUNDO.jpg'
import leafImg from '../assets/leaf1.png'
import leafImg2 from '../assets/leaf2.png'
import leafImg3 from '../assets/leaf3.png'
import starGreen from '../assets/star_g.png'
import starPink from '../assets/star_p.png'
import doodleOrange from '../assets/d_o.png'
import doodleBlue from '../assets/d_blu.png'
import '../styles/leaves.css'
import EticCTA from '../components/Cta'



function Homepage() {
    return (
        <>
        <section
            className="w-full overflow-hidden bg-black"
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                height: 'calc(100vh - 66px)',
            }}
        >
            <div className="absolute z-100 -left-24 bottom-0 h-52 w-52 rounded-full bg-[#c8ff00]/10 blur-3xl" />
            <div className="absolute z-100 -right-24 top-0 h-52 w-52 rounded-full bg-[#745ff2]/10 blur-3xl" />
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
                    opacity: 0.7,
                    filter: 'contrast(70%)',
                }}
            />
            <img
                src={doodleOrange}
                alt=""
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: '-7%',
                    right: '-10%',
                    width: '25%',
                    pointerEvents: 'none',
                    zIndex: 50,
                    userSelect: 'none',
                    opacity: 0.7,
                    filter: 'contrast(60%)',
                }}
            />
        
            <img
                src={leafImg}
                alt=""
                aria-hidden="true"
                className="leaf-1"
                style={{
                position: 'absolute',
                right: '110%',
                top: '20%',
                transform: 'translateY(-50%)',
                width: '40%',
                rotate: '52deg',
                pointerEvents: 'none',
                zIndex: 50,
                userSelect: 'none',
                }}
            />
            <img
                src={leafImg2}
                alt=""
                aria-hidden="true"
                className="leaf-2"
                style={{
                position: 'absolute',
                right: '80%',
                top: '55%',
                transform: 'translateY(-50%)',
                width: '40%',
                rotate: '16deg',
                pointerEvents: 'none',
                zIndex: 1,
                userSelect: 'none',
                }}
            />
            <img
                src={leafImg3}
                alt=""
                aria-hidden="true"
                className="leaf-3"
                style={{
                position: 'absolute',
                right: '-15%',
                top: '25%',
                transform: 'translateY(-50%)',
                width: '30%',
                rotate: '270deg',
                pointerEvents: 'none',
                zIndex: 1,
                userSelect: 'none',
                }}
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
                {/* Gray-100 fade — left edge */}
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent" />
                {/* <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-100 to-transparent" /> */}
                {/* Gray-100 fade — right edge */}
                <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent" />
                {/* <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-100 to-transparent" /> */}
                {/* Gray-100 fade — top edge */}
                <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent" />
                {/* <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-100 to-transparent" /> */}
                {/* Gray-100 fade — bottom edge */}
                <div className="absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-t from-black to-transparent" />
                {/* <div className="absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-t from-gray-100 to-transparent" /> */}
            </div>

            {/* Logo: col 2, row 1, z-10 */}
            <div
                className="z-10 flex items-start justify-start px-6 pt-[7%] relative"
                style={{
                    gridColumn: '2 / 4',
                    gridRow: '1 / 2',
                }}
            >
                <img
                    src={OOTBLogo}
                    alt="OOTB Logo"
                    className="w-full min-w-[10%] max-w-[46%] h-auto"
                />
                {/* Pink star — top-right of logotype */}
                <img
                    src={starPink}
                    alt=""
                    aria-hidden="true"
                    style={{ width: '7%', position: 'absolute', top: '4%', left: '45%', pointerEvents: 'none', rotate: '-20deg' }}
                />
            </div>



            {/* Buttons: col 2, row 3, z-10 — aligned with logo */}
            <div
                className="z-10 flex items-end justify-center pb-20 px-6 gap-4 pl-12 relative"
                style={{
                    gridColumn: '2 / 3',
                    gridRow: '3 / 4',
                }}
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
        </section>
              <div className="absolute top-[101.5%] left-0 z-30 w-full h-15 pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, transparent, black, transparent)' }}
                />
            <AreasTrail />
            <Carousel />
            <BentoGallery />
            <EticCTA />
        </>
    );
}

export default Homepage;