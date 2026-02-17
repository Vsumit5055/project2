import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";

const profileImg = "./sumit.jpg";

const Contact = () => {
	return (
		<div className="contact-page">
			<div className="contact-card">
				<img
					src={profileImg}
					alt="sumit vishwakarma"
					className="contact-profile-img"
				/>
				<h1 className="contact-name">Sumit vishwakarma</h1>
				<span className="contact-title">
					BSC.computer science | Frontend web builder
				</span>
				<p className="contact-bio">
					Passionate web developer | Full Stack Developer with a
					Bachelor's in Computer and Control Systems Engineering.
					<br />
					Specialized in creating dynamic, responsive, and accessible
					web applications that bring ideas to life.
				</p>
				<div className="contact-links-row">
					<a
						href="https://ahmedmaher-portfolio.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Portfolio"
						className="contact-link portfolio"
					>
						<span role="img" aria-label="Portfolio">
							🌐
						</span>
					</a>
					<a
						href="https://www.linkedin.com/in/sumit=vishwakarma=4b36573ab"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="contact-link linkedin"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://github.com/Vsumit5055"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="contact-link github"
					>
						<FaGithub />
					</a>
					<a
						href="https://web.facebook.com/profile.php?id=100012154268952"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
						className="contact-link facebook"
					>
						<FaFacebook />
					</a>
					<a
						href="https://wa.me/+919665015350"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="WhatsApp"
						className="contact-link whatsapp"
					>
						<FaWhatsapp />
					</a>
				</div>
				<div className="contact-email">
					<a href="mailto:ahmedmaher.dev@gmail.com">
						sumitvishwakarma537@gmail.com
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
