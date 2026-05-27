import starGreen from '../../assets/star_g.webp'
import starPink from '../../assets/star_p.webp'
import '../../styles/stars.css'

type Props = {
    pinkStyle?: React.CSSProperties
    greenStyle?: React.CSSProperties
}

const PageStars = ({
    pinkStyle  = { width: '6%', top: '7%', left: '40%', rotate: '-20deg' },
    greenStyle = { width: '4%', bottom: '18%', left: '46%', rotate: '-70deg' },
}: Props) => (
    <>
        <img
            src={starPink}
            alt=""
            aria-hidden="true"
            className="star-2 absolute pointer-events-none select-none z-[2]"
            style={pinkStyle}
        />
        <img
            src={starGreen}
            alt=""
            aria-hidden="true"
            className="star-1 absolute pointer-events-none select-none z-[2]"
            style={greenStyle}
        />
    </>
)

export default PageStars
