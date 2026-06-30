type Props = { src: string }

const HeroPolaroid = ({ src }: Props) => (
    <div className="absolute bottom-4 left-0 right-0 lg:left-auto lg:right-[15%] xl:right-[20%] z-20 flex justify-center items-end pointer-events-none">
        <img
            src={src}
            alt="Destaque da Exposição"
            className="
                object-contain drop-shadow-2xl transition-all duration-300 z-[100]

                max-h-[20vh] max-w-[200px]
                sm:max-h-[22vh] sm:max-w-[220px]
                md:max-h-[25vh] md:max-w-[280px]
                lg:max-h-[40vh] lg:max-w-[420px]
                xl:max-h-[44vh] xl:max-w-[470px]
                2xl:max-h-[48vh] 2xl:max-w-[520px]

                w-auto h-auto
            "
        />
    </div>
)

export default HeroPolaroid