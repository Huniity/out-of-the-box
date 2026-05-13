import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import Concerts from '../components/Concerts'
import { Link } from 'react-router'


const Home = () => {
    return (
        <>
            <section id="center">
                <div className="hero">
                    <img src={heroImg} className="base" width="170" height="179" alt="" />
                    <img src={reactLogo} className="framework" alt="React logo" />
                    <img src={viteLogo} className="vite" alt="Vite logo" />
                </div>
                <div id="next-steps">
                    <Link to="/dashboard">Go to Dashboard</Link>
                    <Concerts />
                </div>
            </section>
        </>
    )
}

export default Home