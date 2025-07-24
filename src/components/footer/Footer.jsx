import '@fortawesome/fontawesome-free/css/all.min.css';
import footerStyle from './footer.module.css';

function Footer() {
    return (
        <footer className={footerStyle.footer}>
            <div className="d-flex flex-row m-4 w-100 align-content-md-between" style={{backgroundColor: "#2c3e50"}}>
                <div className={footerStyle.card}>
                    <div className={`${footerStyle.cardBody} text-center`}>
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className={`${footerStyle.card} text-white`}>
                    <div className={`${footerStyle.cardBody} text-center`}>
                        <h3>AROUND THE WEB</h3>
                        <div className="icons">
                            <a href="https://facebook.com" target="_blank"><i
                                className={`fa-brands fa-facebook mx-1 p-2 ${footerStyle.icon}`}></i></a>
                            <a href="https://twitter.com" target="_blank"><i
                                className={`fa-brands fa-twitter mx-1 p-2 ${footerStyle.icon}`}></i></a>
                            <a href="https://linkedin.com" target="_blank"><i
                                className={`fa-brands fa-linkedin-in mx-1 p-2 ${footerStyle.icon}`}></i></a>
                            <a href="https://google.com" target="_blank"><i
                                className={`fa-solid fa-globe mx-1 p-2 ${footerStyle.icon}`}></i></a>
                        </div>
                    </div>
                </div>
                <div className={footerStyle.card}>
                    <div className={`${footerStyle.cardBody} text-center`}>
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;