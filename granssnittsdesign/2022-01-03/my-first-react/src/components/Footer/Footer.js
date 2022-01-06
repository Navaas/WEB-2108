import './Footer.css'
function Footer() {

    return (
        <footer className="container-footer">
            <section>
                <h1>Följ oss på:</h1>
                <img className="footer-img"
                     src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
                     alt="Facebook"/>
                <img className="footer-img"
                     src="	https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                     alt="Instagram"/>
            </section>
        </footer>
    )
}

export default Footer;