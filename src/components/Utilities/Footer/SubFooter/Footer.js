import { useNavigate } from 'react-router-dom';

export function LastFooter() {
    const navigate = useNavigate();


    return (

        <footer>
            <div className="glowing-line-component">
                <div className="glow"></div>
                <div className="line"></div>
            </div>
            <div className="footer-cont">
                <div className="no-cr-footer">
                    <div className="immerse-logo-cont">
                        <a href="#" className="immerse-logo-a">
                            <img src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dca49e0e494f0_immerse-logo.svg" className="immerse-logo-footer" />
                        </a>
                    </div>
                    <div className="company-product-footer">
                        <div className="company-footer">
                            <p className="title-sections-footer">Company</p>
                            <a href="#" onClick={() => {navigate("/ourStory")}}>Our Story</a>
                            <a href="#" onClick={() => {navigate("/support")}}>Support</a>
                            <a href="#" onClick={() => {navigate("/Partner")}}>Partner</a>
                            <a href="" onClick={() => {navigate("/career")}}>Careers</a>
                        </div>
                        <div className="product-footer">
                            <p className="title-sections-footer">Product</p>
                            <a href="#">Why Immerse</a>
                            <a href="#" onClick={() => {navigate("/blog")}}>Blog</a>
                            <a href="#" onClick={() => {navigate("/pricing")}}>Pricing</a>
                            <a href="#" onClick={() => {navigate("/faq")}}>FAQ</a>
                        </div>
                    </div>
                    <div className="follow-footer">
                        <p className="title-sections-footer">Follow</p>
                        <div className="follow-footer-no-p">
                            <a href="" className="social-links">
                                <div className="cont-svg">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
                                        <path d="M19.1367 8.09375C19.8398 7.56641 20.4727 6.93359 20.9648 6.19531C20.332 6.47656 19.5938 6.6875 18.8555 6.75781C19.6289 6.30078 20.1914 5.59766 20.4727 4.71875C19.7695 5.14062 18.9609 5.45703 18.1523 5.63281C17.4492 4.89453 16.5 4.47266 15.4453 4.47266C13.4062 4.47266 11.7539 6.125 11.7539 8.16406C11.7539 8.44531 11.7891 8.72656 11.8594 9.00781C8.80078 8.83203 6.05859 7.35547 4.23047 5.14062C3.91406 5.66797 3.73828 6.30078 3.73828 7.00391C3.73828 8.26953 4.37109 9.39453 5.39062 10.0625C4.79297 10.0273 4.19531 9.88672 3.70312 9.60547V9.64062C3.70312 11.4336 4.96875 12.9102 6.65625 13.2617C6.375 13.332 6.02344 13.4023 5.70703 13.4023C5.46094 13.4023 5.25 13.3672 5.00391 13.332C5.46094 14.8086 6.83203 15.8633 8.44922 15.8984C7.18359 16.8828 5.60156 17.4805 3.87891 17.4805C3.5625 17.4805 3.28125 17.4453 3 17.4102C4.61719 18.4648 6.55078 19.0625 8.66016 19.0625C15.4453 19.0625 19.1367 13.4727 19.1367 8.58594C19.1367 8.41016 19.1367 8.26953 19.1367 8.09375Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <p>Twitter</p>
                            </a>
                            <a href="" className="social-links">
                                <div className="cont-svg">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
                                        <path d="M15.8086 12.875L16.3008 9.64062H13.1719V7.53125C13.1719 6.61719 13.5938 5.77344 15 5.77344H16.4414V2.99609C16.4414 2.99609 15.1406 2.75 13.9102 2.75C11.3438 2.75 9.65625 4.33203 9.65625 7.14453V9.64062H6.77344V12.875H9.65625V20.75H13.1719V12.875H15.8086Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <p>Facebook</p>
                            </a>
                            <a href="" className="social-links">
                                <div className="cont-svg">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
                                        <path d="M11.875 7.70703C9.625 7.70703 7.83203 9.53516 7.83203 11.75C7.83203 14 9.625 15.793 11.875 15.793C14.0898 15.793 15.918 14 15.918 11.75C15.918 9.53516 14.0898 7.70703 11.875 7.70703ZM11.875 14.3867C10.4336 14.3867 9.23828 13.2266 9.23828 11.75C9.23828 10.3086 10.3984 9.14844 11.875 9.14844C13.3164 9.14844 14.4766 10.3086 14.4766 11.75C14.4766 13.2266 13.3164 14.3867 11.875 14.3867ZM17.0078 7.56641C17.0078 7.03906 16.5859 6.61719 16.0586 6.61719C15.5312 6.61719 15.1094 7.03906 15.1094 7.56641C15.1094 8.09375 15.5312 8.51562 16.0586 8.51562C16.5859 8.51562 17.0078 8.09375 17.0078 7.56641ZM19.6797 8.51562C19.6094 7.25 19.3281 6.125 18.4141 5.21094C17.5 4.29688 16.375 4.01562 15.1094 3.94531C13.8086 3.875 9.90625 3.875 8.60547 3.94531C7.33984 4.01562 6.25 4.29688 5.30078 5.21094C4.38672 6.125 4.10547 7.25 4.03516 8.51562C3.96484 9.81641 3.96484 13.7188 4.03516 15.0195C4.10547 16.2852 4.38672 17.375 5.30078 18.3242C6.25 19.2383 7.33984 19.5195 8.60547 19.5898C9.90625 19.6602 13.8086 19.6602 15.1094 19.5898C16.375 19.5195 17.5 19.2383 18.4141 18.3242C19.3281 17.375 19.6094 16.2852 19.6797 15.0195C19.75 13.7188 19.75 9.81641 19.6797 8.51562ZM17.9922 16.3906C17.7461 17.0938 17.1836 17.6211 16.5156 17.9023C15.4609 18.3242 13 18.2188 11.875 18.2188C10.7148 18.2188 8.25391 18.3242 7.23438 17.9023C6.53125 17.6211 6.00391 17.0938 5.72266 16.3906C5.30078 15.3711 5.40625 12.9102 5.40625 11.75C5.40625 10.625 5.30078 8.16406 5.72266 7.10938C6.00391 6.44141 6.53125 5.91406 7.23438 5.63281C8.25391 5.21094 10.7148 5.31641 11.875 5.31641C13 5.31641 15.4609 5.21094 16.5156 5.63281C17.1836 5.87891 17.7109 6.44141 17.9922 7.10938C18.4141 8.16406 18.3086 10.625 18.3086 11.75C18.3086 12.9102 18.4141 15.3711 17.9922 16.3906Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <p>Instagram</p>
                            </a>
                            <a href="" className="social-links">
                                <div className="cont-svg">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg%22%3E">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                                    </svg>
                                </div>
                                <p>LinkedIn</p>
                            </a>
                            <a href="" className="social-links">
                                <div className="cont-svg">
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                                    </svg>
                                </div>
                                <p>Youtube</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copyright-footer">
                    <p className="copy-paragraph">© Copyright 2022 Immerse</p>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Code of Conduct</a>
                </div>
            </div >
        </footer >
    )
}