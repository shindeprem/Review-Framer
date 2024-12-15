import "@/styles/components/footer/footer.css"

const FramerFooter = ()=>{
    return(
        <footer className="comm-footer framer-p">
            <div className="logo-container">
                <div className="second-head font-semibold"><span>REVIEW</span><br/><span>FRAMER</span></div>
            </div>
            <div className="footer-common-lsts">
                <div className="footer-lst-1">
                    <p className="second-head font-semibold content-comm-b-m-l">
                            PRODUCTS
                    </p>
                    <ul className="footer-list no-style-ul">
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Sign In</a></li>
                        <li><a href="/">Sign Up</a></li>
                    </ul>
                </div>
            </div>

            
        </footer>
    )
}

export default FramerFooter;