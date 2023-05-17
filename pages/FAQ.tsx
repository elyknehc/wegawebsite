import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Image from "next/image";
import banner from "../public/wega.jpg";
import AccordionItem from "../components/AccordionItem";
import { useState } from "react";

const FAQ = () => {
	const [open, setOpen] = useState(false);
	const toggle = (index) => {
		if (open === index) {
			return setOpen(null);
		}
		setOpen(index);
	};
	const accordionData = [
		{
			title: "How Do I Join WEGA?",
			desc: "You can purchase a membership on the USC Storefront: with this link: ",
		},
		{
			title: "What games do you guys play?",
			desc: "WEGA has a community of over 2000 users on discord and over 200 members with a membership, you name the game; someone else most likely plays it! ",
		},
		{
			title: "What are the benefits of purchasing a membership?",
			desc: "Purchasing a membership allows you to get free swag and merch (e.g. Lanyards, Keychains, Stickers) from us. In addition, you can compete in WEGA tournaments for free. ",
		},
		{
			title: "Do I have to play games to join WEGA?",
			desc: "No! Feel welcome to join WEGA even if you are not a gamer!",
		},
		{
			title: "Can I tryout for a collegiate team?",
			desc: "Yes! Tryouts will be held during the beginning of the school year. View the Teams page to view the teams that we have. Additional information will be posted on discord for specific information and dates. ",
		},
		{
			title: "What events does WEGA have and how can I attend?",
			desc: "From Tournaments to In-Person Socials, WEGA has a variety of events for members to attend. Some past events include: Valorant Tournament, Mario Kart Tournament, Smash Tournament, Nintendo Night, Trivia Night and many more!",
		},
		{
			title: "Does WEGA have a discord?",
			desc: "Yes! Join our discord of over 2000 users: ",
		},
	];
	return (
		<div>
			<Navbar />
			<Image className="h-screen" src={banner} alt="FAQ page" />

			<section className="grid place-items-center text-center"> </section>
			<div className="">
				{accordionData.map((data, index) => {
					return (
						<AccordionItem
							key={index}
							title={data.title}
							description={data.desc}
							open={index === open}
							toggle={() => toggle(index)}
						/>
					);
				})}
			</div>

			<Footer />
		</div>
	);
};

export default FAQ;
