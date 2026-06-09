type Props = { src: string }

const HeroPolaroid = ({ src }: Props) => (
    <div className="absolute bottom-6 left-0 right-0 lg:left-auto lg:right-[15%] xl:right-[20%] z-20 flex justify-center pointer-events-none">        <img
            src={src}
            alt="Destaque da Exposição"
            className="
                h-auto object-contain drop-shadow-2xl transition-all duration-300 z-[100]
                
                max-h-[32vh] lg:max-h-none

                /* MOBILE: Imagem pequenina para não estragar o layout nem tapar botões */
                w-[260px] sm:w-[280px]
                
                /* TABLETS (md: a partir de 768px) */
                md:w-[380px]
                
                /* DESKTOP (lg: a partir de 1024px) */
                lg:w-[450px]
                
                /* DESKTOPS GRANDES (xl: a partir de 1280px) */
                xl:w-[500px]
            "
        />
    </div>
)

export default HeroPolaroid