import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import HttpIcon from "@material-ui/icons/Http";
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

import fb from "./facebook.png";
import attic from "./attic.png";
import attic_RN from "./attic_RN.png";
import premier from './premier.png';

export default {
  name: "Inusha Manawadu",
  title: "Software Engineering Undergraduate",
  birthday: "02-09-1998",
  email: "inusha.20191059@iit.ac.lk",
  phone: "+94 767262633",
  university: "Informatics Institute of Technology",

  socials: {
    Facebook: {
      link: "asa",
      text: "Inusha Manawadu",
      Icon: <FacebookIcon />,
    },
    LinkedIn: {
      link: "asa",
      text: "Inusha Manawadu",
      Icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "asas",
      text: "Inusha Manawadu",
      Icon: <GitHubIcon />,
    },
  },
  about:
    "I am an energetic, adaptable, confident and smart Software Engineering Undergraduate with excellent problem solving and challenge taking skills. I’m interested in finding technological solutions for the betterment of the society.",

  projects: [
    {
      tag: "React",
      image: fb,
      title: "Facebook Clone",
      description:
        "This is a clone of Facebook developed using React Js and Firebase",
      links: [
        {
          link: "https://facebook-clone-ce7ca.web.app/",
          icon: <HttpIcon color="primary" fontSize="large" />,
        },
        {
          link: "https://github.com/InushaManawadu/facebook-clone",
          icon: <GitHubIcon style={{ fill: "black" }} />,
        },
      ],
    },
    {
      tag: "Java",
      image: attic,
      title: "Attic Mobile Application",
      description:
        "An Interior Designing Application that uses Augmented Relaity and Deep Learning to Enhance the User Experience. This Application is purely Android Native and Google ARCore is used for the AR Functionality. With parallel to the Mobile Application, a Furniture Management dashbaord is also developed for furniture suppliers to maintain their products.",
      links: [
        {
          link: "https://attic-b6655.web.app/",
          icon: <HttpIcon color="primary" fontSize="large" />,
        },
        {
          link: "https://drive.google.com/drive/folders/1eBvnh2VqSIl7Penb6nYU4pYTWqzH1Wwz?usp=sharing",
          icon: <CloudUploadIcon color="primary" fontSize="default" />,
        },
        {
          link: "https://github.com/SDGP-Terabyte/Attic_Application",
          icon: <GitHubIcon style={{ fill: "black" }} />,
        },
      ],
    },
    {
      tag: "Java",
      image: premier,
      title: "Premier League Management",
      description:
        "A full-stack football premier league management system developed using Java, Spring Boot and Angular JS.",
      links: [
        {
          link: "https://github.com/InushaManawadu/Football-League-Manager",
          icon: <GitHubIcon style={{ fill: "black" }} />,
        },
      ],
    },
    {
      tag: "React Native",
      image: attic_RN,
      title: "Attic Mobile Application Redesign ",
      description: "An E-Commerce mobile application that can be used to sell furniture items. Back-end of this application is under construction using Node Js.",
      links: [
        {
          icon: <HttpIcon color="primary" fontSize="large" />,
          link: "https://drive.google.com/drive/folders/1FtnQFdxLQjzW0jNSjDwn7h6ZMmtgDvPJ?usp=sharing",
        },
      ],
    },
  ],
};
