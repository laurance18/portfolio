import travel_photo from "../assets/travelsite_photo.png";
import tenzies_photo from "../assets/tenzies_photo.png";
import fiverr_photo from "../assets/fiverr_photo.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    "projects": [
        {
            id: 1,
            name: "Travel Journal",
            desc: `The "Deniz's Travel Journal" website is a web application that showcases my "travel" experiences. Users can see the photos of several sightseeing locations, as well as read a little description about each one. They can also look the location up on Google Maps. The site is built using ReactJS, and uses TailwindCSS framework for styling.`,
            position: "un-switched",
            image: travel_photo,
            link: "https://laurance18.github.io/travel_journal/"
        },
        {
            id: 2,
            name: "Tenzies",
            desc: `Tenzies website is a web application that is basically the online version of the game tenzies. Users can play the game by holding and rolling the dices accordingly in order to get all the dices to the same number. The site is built using ReactJS with several hooks and libraries, and uses vanilla CSS3 for styling.`,
            position: "switched",
            image: tenzies_photo,
            link: "https://laurance18.github.io/tenzies/"
        },
        {
            id: 3,
            name: "Fiverr Gigs",
            desc: `I have several gigs on Fiverr, where I offer my services as a freelancer. I have been working on Fiverr for over 3 months now, and I have completed 2 orders about web design. I have a 5-star rating, and I am a Level 1 Seller. I offer services such as web development, web design, and bot design.`,
            position: "un-switched",
            image: fiverr_photo,
            link: "https://www.fiverr.com/laurance18?public_mode=true"
        },
    ]
}