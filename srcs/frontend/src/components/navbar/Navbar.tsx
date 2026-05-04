
import logo_etic from '../../assets/logo_etic_white.png'

var pages = [
    { name: "HOME", path: "/homepage" },
    { name: "EXPOSIÇÕES", path: "/exposicoes" },
    { name: "PALESTRAS", path: "/palestras" },
    { name: "WORKSHOPS", path: "/workshops" },
    { name: "PROJEÇÕES", path: "/projecoes" },
    { name: "SPEED HUNTING", path: "/speed-hunting" },
    { name: "SEMANA LÁBIA", path: "/semana-labia" },
]

function Navbar(){
    return (
        <nav className="w-full justify-between flex p-2 bg-black pl-2">
            <div className="flex items-center">
                <img src={logo_etic} alt="Logo" width={50} height={50} />
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-6 text-white font-semibold">
                    {pages.map((page) => (
                        <li key={page.name}>
                            <a href={page.path} className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#c8ff00] after:transition-all after:duration-300 hover:after:w-full">
                                {page.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center">
                
            </div>
        </nav>
    )

}

export default Navbar