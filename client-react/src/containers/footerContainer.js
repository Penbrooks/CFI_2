  
import React from 'react'
import Footer from '../components/footer/footer'
import Icon from '../components/footer/icon'

const FooterContainer = () => {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Our Team</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Corporate Information</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Events and Projects</Footer.Link>
                    <Footer.Link href="#">Fundings</Footer.Link>
                    <Footer.Link href="#">News</Footer.Link>
                    
                    
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Documents</Footer.Title>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <div className="footer-border1"></div>
            <div className="footer-border2"></div>
            </Footer.Wrapper>   
        </Footer>
    )
}
export default FooterContainer;