"use client"
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({ loggedIn: null })

    const [gig, setGig] = useState([
        {
            jobTitle: "Interactive app ui/ux design in Figma",
            companyName: "Flow Org",
            jobValue: "1500 FLOW",
            timePosted: "0 mins",
            description:
              "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
            skillsRequired: ["Figma", "Prototyping", "Wireframing"],
            paymentMethod: "Cryptocurrency",
            location: "Remote",
        },
        {
            jobTitle: "Interactive app ui/ux design in Figma 2",
            companyName: "Flow Org",
            jobValue: "1500 FLOW",
            timePosted: "0 mins",
            description:
              "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
            skillsRequired: ["Figma", "Prototyping", "Wireframing"],
            paymentMethod: "Cryptocurrency",
            location: "Remote",
        },
        {
            jobTitle: "Interactive app ui/ux design in Figma 3",
            companyName: "Flow Org",
            jobValue: "1500 FLOW",
            timePosted: "0 mins",
            description:
              "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
            skillsRequired: ["Figma", "Prototyping", "Wireframing"],
            paymentMethod: "Cryptocurrency",
            location: "Remote",
        }, 
    ])

    const feedGig = (arrayForGig) => {
        setGig(...arrayForGig);
    }

    const [freelancer, setFreelancer] = useState({
        name: "Glory Praise Emmanuel",
        email: "work.glorypraise@gmail.com",
        jobRole: "FullStack Developer",
        jobCategory: "Blockchain Development",
        country: "Nigeria",
        city: "Uyo",
        address: "",
        postalCode: "",
        phoneNumber: "",
        bio: "Worldclass Developer,  I specialize in blockchain development, web3 frontend engineering, and technical writing.",
        walletName: "",
        walletAddress: "",
        hourlyRate: "",
        serviceFee: "",
        amountPaid: "",
        portfolioLink: "wwww.github.com/emmaglorypraise",
        hoursPerWeek: "More than 30 hrs",
        contractPreference: "No contract-to-hire preference set",
        language: ["English: Fluent", "Igbo: Fluent", "Yoruba: Fluent"],
        university: "University of Uyo",
        degree: "Bachelor of Science (BS),",
        department: "Public Administration",
        yearOfStudy: "2017-2022",
        careerTitle: "Blockchain Developer",
      },)

    return (
        <Context.Provider value={{ user, setUser, freelancer, setFreelancer, gig, feedGig }}>
            {children}
        </Context.Provider>
    );
};