import "@/styles/components/header/header.css"
import FramerBtn from "./button";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Header = ()=>{
    const [isToggleNavOpen,setToggleNavOpen] = useState(false)

    const handleToggleNav = ()=>{
        setToggleNavOpen((isToggleNavOpen)=>!isToggleNavOpen)
    }

    return(
        <div className="framer-lev-1 global-dark-bg">
            <header className="framer-header p-auto m-auto max-w-auto">
                <div className="logo-container">
                    <div className="second-head font-semibold"><span>REVIEW</span><br/><span>FRAMER</span></div>
                </div>

                <div className={`header-nav-w-sign ${isToggleNavOpen?"open-header-nav":"close-header-nav"}`}>
                    <nav className="header-nav m-auto">
                        <ul className="second-head font-semibold header-nav-list no-style-ul">
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Features</a></li>
                            <li><a href="/">About</a></li>
                        </ul>
                    </nav>

                    <div className="sign-in-up">
                        <FramerBtn buttonText={"Sign in"} isTransparent={true} noBorder={true}/>
                        <FramerBtn buttonText={"Sign up"} paddingVal={"medium"} solidPurpleBtn={true} noBorder={true}/>
                    </div>
                </div>

                <div className="menu-icn second-head font-semibold md-menu-icn font-xl common-icn">
                    {isToggleNavOpen?<RxCross2 onClick={handleToggleNav}/>:<MdMenu onClick={handleToggleNav}/>}
                    
                </div>
            </header>
        </div>
    )
}

export default Header;