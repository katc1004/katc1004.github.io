import React, { Fragment } from "react"
import { AiFillLinkedin, AiOutlineGithub, AiFillFile, AiFillMail } from "react-icons/ai";
import Propic from "../attachments/propic.jpg"
import Resume from "../attachments/resume.pdf"
import "../styles/index.scss"
import "../styles/general.scss"

export default function Home() {
  return (
  	<Fragment>
  		<div id="about">
		  	<div id="profile-pic"><img src={Propic} alt="Profile Pic"/></div>
	  		Hello, my name is Kathy Chern. I am a Software Engineer.
	  		<div id="links">
	  			<a href="https://www.linkedin.com/in/kathychern95" target="blank"><AiFillLinkedin /></a>
	  			<a href="https://github.com/katc1004" target="blank"><AiOutlineGithub /></a>
	  			<a href={Resume} target="blank"><AiFillFile /></a>
	  			<a href="mailto:kchern95@gmail.com"><AiFillMail /></a>
	  		</div>
		</div>
  	</Fragment>
  )
}
