type Props = { src: string }

const HeroPolaroid = ({ src }: Props) => (
    <div className="absolute bottom-4 left-0 right-0 z-[100] flex justify-center lg:justify-end pointer-events-none">
        <img
        src={src}
        alt="Destaque da Exposição"
        className=" 
            z-50 h-auto w-auto object-contain drop-shadow-2xl
            
            /* MOBILE: Sem max-h ou max-w restritivos. Deixamos a imagem respirar */
            max-h-[45%] max-w-[75%]

            /* TABLETS (Pequenos / Grandes) */
            sm:max-h-[70%] sm:max-w-[90%] sm:pr-4 sm:pb-4
            md:max-h-[50%] md:max-w-[70%] md:pr-4 md:pb-4
            
            /* DESKTOP (Computadores) */
            lg:max-h-[50%] lg:max-w-[50%] lg:pr-8 lg:pb-8
            xl:max-h-[50%] xl:max-w-[50%] xl:pr-40 xl:pb-8
        "
        />
    </div>
)

export default HeroPolaroid