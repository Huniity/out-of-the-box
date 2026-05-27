type Props = { src: string }

const HeroPolaroid = ({ src }: Props) => (
    <div className="hidden lg:flex absolute inset-0 items-center justify-center pl-[20%] pt-[10%] z-100 pointer-events-none">
        <img
            src={src}
            alt=""
            aria-hidden="true"
            className="max-h-[45%] w-auto object-contain drop-shadow-2xl"
        />
    </div>
)

export default HeroPolaroid
