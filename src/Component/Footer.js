import React from "react";
import Typography from "@material-ui/core/Typography";
import cartImg from "../assets/images/icon.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

function Footer() {
  return (
    <div>
      <div className="flex border-2 rounded label-bg border-gray-600 h-64 ">
        <div className="flex w-full pt-4 justify-center">
          <img
            className="lg:ml-24 h-12 mt-2 sm:ml-0 md:ml-0 xl:ml-24"
            src={cartImg}
          />
          <div className="flex w-1/4 flex-col">
            <Typography gutterBottom variant="h6" className="label">
              Shopping Cart
            </Typography>
            <div>
              <FacebookIcon className="icon-color mx-4 rounded" />
              <TwitterIcon className="icon-color mx-4 rounded" />
              <LinkedInIcon className="icon-color mx-4 rounded" />
              <YouTubeIcon className="icon-color mx-4 rounded" />
            </div>
          </div>

          <div className="flex w-1/4 flex-col  mr-8">
            <Typography gutterBottom variant="h6" className="label">
              Support
            </Typography>
            <div className="flex text-white flex-col ml-6 uppercase">
              <p>Contact Us</p>
              <p className="pt-2">FAQ</p>
              <p className="pt-2">product Registration</p>
              <p className="pt-2">Our Story</p>
            </div>
          </div>

          <div className="flex w-1/4 flex-col  mr-8">
            <Typography gutterBottom variant="h6" className="label">
              Helpfull Links
            </Typography>
            <div className="flex text-white flex-col ml-6 uppercase">
              <p>Services</p>
              <p className="pt-2">Support</p>
              <p className="pt-2">Term & Conditon</p>
              <p className="pt-2">Privacy Policy</p>
            </div>
          </div>

          <div className="flex w-1/4 flex-col mr-8">
            <Typography gutterBottom variant="h6" className="label">
              Contact Us
            </Typography>
            <div>
              <PhoneIcon className="icon-color mx-4 rounded" />
              <span className="text-white">+91 9999 999 999</span>
            </div>
            <div className="mt-4">
              <EmailIcon className="icon-color mx-4 rounded" />
              <span className="text-white">www.ecommerce.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
