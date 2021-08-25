import { faBullhorn, faDesktop, faDove, faEdit, faUserFriends } from "@fortawesome/free-solid-svg-icons";

// 2021 Team Images
import Kenuka_Image from '../../assets/img/2021_exec/Kenuka.jpg'
import Celine_Image from '../../assets/img/2021_exec/Celine.jpg'
import Kai_Image from '../../assets/img/2021_exec/Kai.jpeg'
import Connor_Image from '../../assets/img/2021_exec/Connor.jpg'
import Micah_Image from '../../assets/img/2021_exec/Micah.jpg'
import Jasmin_Image from '../../assets/img/2021_exec/Jasmin.jpeg'
import Hirun_Image from '../../assets/img/2021_exec/Hirun.jpeg'
import Keshmira_Image from '../../assets/img/2021_exec/Keshmira.jpg'
import Claire_Image from '../../assets/img/2021_exec/Claire.jpg'
import Jack_Image from '../../assets/img/2021_exec/Jack.jpg'
import Noa_Image from '../../assets/img/2021_exec/Noa.jpg'
import Miah_Image from '../../assets/img/2021_exec/Miah.jpg'
import Ronaldo_Image from '../../assets/img/2021_exec/Ronaldo.jpg'

// 2020 Team Images
import Jelinna_Image from'../../assets/img/2020_exec/Jelinna.jpg'
import Roary_Image from'../../assets/img/2020_exec/Roary.jpg'
import Shrey_Image from '../../assets/img/2020_exec/Shrey.jpg'
import Xavier_Image from '../../assets/img/2020_exec/Xavier.jpg'
import Ian_Image from '../../assets/img/2020_exec/Ian.png'
import Stanley_Image from '../../assets/img/2020_exec/Stanley.jpeg'
import Hayes_Image from '../../assets/img/2020_exec/Hayes.jpeg'
import Emily_Image from '../../assets/img/2020_exec/Emily.png'
import Lelland_Image from '../../assets/img/2020_exec/Lelland.jpeg'
import Susan_Image from '../../assets/img/2020_exec/Susan.jpg'
import Vincent_Image from '../../assets/img/2020_exec/Vincent.jpg'

const teamData = {
    2021: {
        "exec": {
            "Kenuka": {
                "image": Kenuka_Image,
                "description": `Stepping into the role of President, my ultimate goal is to foster a strong community full of everlasting friendships and life-long memories by overseeing all facets of the society.
                I want to enhance the cohesion of Co-op Soc by ensuring that the incoming 2021 first-years feel welcomed into the Co-op family, and by also increasing the involvement of third and fourth years. Overall, despite what 2021 throws at us, get keen for a good time!`,
                "name": "Kenuka Wijayatunga",
                "role": "President",
                "cardColour": "1",
            },
            "Celine": {
                "image": Celine_Image,
                "description": `My biggest goal stepping into this position is to facilitate the creation of long lasting memories and aid the development of the strongest community in UNSW - the co-op family.
                Not only does this entail running fantastic, consistent events and overseeing an online presence, but it also involves ensuring a key support network is maintained and all voices
                are heard, not just within the Executive team but throughout the society.`,
                "name": "Celine Goh",
                "role": "Vice President",
                "cardColour": 2,
            },
            "Kai": {
                "image": Kai_Image,
                "description": `My number one goal is to make sure everyone is included in Co-op Soc. As secretary,
                it is my duty to ensure that communication occurs not only quickly and effectively, but also that it reaches each and every member.
                My vision is to not only maintain the society’s health, but to help grow the Co-op community as a whole by keeping track of our historical records,
                meetings, goals, plans, contact with external organisations, members, and events to name a few!`,
                "name": "Kai Mashimo",
                "role": "Secretary",
                "cardColour": 3,
            },
            "Connor": {
                "image": Connor_Image,
                "description": `Holistically, I would like to utilise my role to further advance the Co-op family, facilitating strong friendships and unforgettable memories for all. Moreover, I hope to ensure a robust financial position into the future, building upon the work of previous treasurers so as to increase the society’s assets and lay the platform for continued development.`,
                "name": "Connor Pilger",
                "role": "Treasurer",
                "cardColour": 4,
            },
            "Micah": {
                "image": Micah_Image,
                "description": `As the Arc Delegate, my goal is to maintain positive communication with Arc and secure all Arc-associates resources.
                I will actively update and manage the SpArc page for our society with events, reimbursements and forms, I also plan to liaison with Arc to secure on-campus venues and equipment for Co-op soc events whilst following Arc guidelines when hosting team / general meetings and during administrative changes.`,
                "name": "Micah Wang",
                "role": "Arc Delegate",
                "cardColour": 5,
            },
            "Jasmin": {
                "image": Jasmin_Image,
                "description": `Over the coming year, my main goal is to cultivate and strengthen the bonds within the Co-op community. Specifically as Social Director, I aim to create, organise and deliver events which can facilitate the building of strong connections and unique memories between the members of the society. I am hoping to organise amazing events that have been run before but also bring new unique events which, holistically, are suited to the diverse group of Co-op society members.`,
                "name": "Jasmin Oren",
                "role": "Events",
                "cardColour": 1,
            },
            "Hirun": {
                "image": Hirun_Image,
                "description": `For 2021, with Kesh, I aim to create an environment where co-ops are provided with a multitude of opportunities to make an impact outside of the corporate world and inside the wider community. In order to achieve this, we will be providing you all with events supporting a range of impactful charities as well as our own initiatives which not only allow co-ops a chance to give back, but also bring us all closer together as we do so.`,
                "name": "Hirun Bandara",
                "role": "Charity",
                "cardColour": 2,
            },
            "Keshmira": {
                "image": Keshmira_Image,
                "description": `Along with Hirun, my goal as Charity Director for 2021 is to create exciting opportunities for all co-ops to give back to the community. By partnering with various charities and running exciting events, I want to help us make a tangible difference in the lives of others, whilst also bringing our co-op family closer through the spirit of giving.`,
                "name": "Keshmira Vijayan",
                "role": "Charity",
                "cardColour": 3,
            },
            "Claire": {
                "image": Claire_Image,
                "description": `My overarching goal for this year is to enrich and enhance the connections within the Co-op community. I believe that the uniqueness of our society lies in our ability to foster tight-knit friendships within and across cohorts. With my position as marketing director, I hope to use the power of social media to reach out to every member and facilitate long-lasting relationships between a diverse range of people, creating valuable memories and a truly unique community.`,
                "name": "Claire Xue",
                "role": "Marketing",
                "cardColour": 4,
            },
            "Jack": {
                "image": Jack_Image,
                "description": `As the Publications Director, it is my vision to continue to develop and facilitate the UNSW Co-op Society’s online presence through its existing avenues - LinkedIn and the website - as well as new and emerging - potentially Instagram and monthly newsletters. To avoid stale writing and allow multiple perspectives, a substantial goal of mine is to co-lead a combined Pubs/IT Subcom - the first of its kind for our society.`,
                "name": "Jack Yin",
                "role": "Publications",
                "cardColour": 5,
            },
            "Noa": {
                "image": Noa_Image,
                "description": `Over the following year as IT Director, I’m hoping to cultivate the society’s online presence, channelling my creativity and love for tech into the Co-op Soc website. I’m looking forward to co-leading the first Pubs/IT Sub-committee as Jack and I strengthen the partnership between our two roles, introducing Co-op Soc Instagram and monthly newsletters. I’m also planning to introduce a new way to create and display blog posts from within the website.`,
                "name": "Noa Challis",
                "role": "IT",
                "cardColour": 1,
            },
            "Miah": {
                "image": Miah_Image,
                "description": `As a first year representative, I aim to represent the interests of the 2021 Co-op Soc cohort and forge stronger connections between our cohort and the Co-op Soc Executive team. Our responsibilities involve creating and distributing the 2021 Co-op merchandise, as well as contributing to planning events throughout the year. Ultimately, I hope that we are able to create opportunities for our cohort to grow closer together and make the most of their experience within Co-op.`,
                "name": "Miah Panovrakos",
                "role": "",
                "cardColour": 1,
            },
            "Ronaldo": {
                "image": Ronaldo_Image,
                "description": `As one of the First Year Representatives, my duty is to connect our cohort with the Co-op Executives across a range of events. We are also responsible for designing the 2021 Co-op merchandise and making everyone look amazing! As time goes on, I hope that we get the privilege to call each and every Co-op scholar our second family.`,
                "name": "Ronaldo Keng",
                "role": "",
                "cardColour": 5,
            }
        },
        "subcoms": {
            "Charity": {
                "icon": [faDove],
                "name": "Charity",
                "description": `The Charity portfolio seeks to create awareness, raise funds and drive social change for charities. The committee also compliments the Social portfolio in hosting fun events for a great cause.`,
                "members": [
                    "Alannah Darling",
                    "Mridul Pant",
                    "Tiana Vincent",
                ],
            },
            "Marketing": {
                "icon": [faBullhorn],
                "name": "Marketing",
                "description": `The marketing portfolio focuses on creating continued engagement with our Co-op Society Facebook platform. Via the creation of digital marketing content, all students are encouraged to participate in fulfilling social events.`,
                "members": [
                    "Emily Ross",
                    "Himanshu Singh",
                    "Nala Hong",
                    "Nicole Huang",
                ],
            },
            "Pubs/IT": {
                "icon": [faEdit, faDesktop],
                "name": "Publications/IT",
                "description": `This year, our society has combined the Publications and IT iteams in order to take advantage of the many synergies that exist between the two portfolios. The combined Pubs/IT portfolio is responsible for continuing to develop and facilitate the society's online presence through new and existing avenues, as well as occassional standalone publications such as the First Year Guide.`,
                "members": [
                    "Annie Yan",
                    "Hanyuan Li",
                    "Rohan Agarwal",
                ],
            },
            "Social": {
                "icon": [faUserFriends],
                "name": "Social",
                "description": `The team is responsible for organising our social calendar, including planning, developing and executing a core suite of events. They ensure all members are given the opportunity to be a part of this vibrant community, through the creation and maintenance of social groups.`,
                "members": [
                    "Isabella Fang",
                    "Jessica Degeling",
                    "Palaash Rawat",
                ],
            }
        },
    },
    2020: {
        "exec": {
            "Jelinna": {
                "image": Jelinna_Image,
                "description": `Stepping into the role of President, not only did I want to be the leader who oversees the events and logistics that happen ‘behind the scenes’; I wanted to act as a key support network for not only the executive members on the team but also those in the society as well- ensuring that the goals and voices of the co-op community were being heard and considered.`,
                "name": "Jelinna Wang",
                "role": "President",
                "cardColour": 1,
            },
            "Roary": {
                "image": Roary_Image,
                "description": `I decided to run for Vice President in order to channel my inner Nigel: the fun-loving guy who can bring a room together and give warm welcomes to everyone coming into Co-op Society. Seeing the first-years enjoy camp so much and create long-lasting memories and friendships honestly filled me with joy; it was definitely one of my biggest goals stepping into this position. It’s quite sad that we’ve been kept at home this term, but I’m looking forward to seeing you all in person again, and continuing to facilitate a friendly and fun environment.`,
                "name": "Roary Xu",
                "role": "Vice President",
                "cardColour": 2,
            },
            "Shrey": {
                "image": Shrey_Image,
                "description": `I honestly believe that organisation is a staple to running any society. I applied to be secretary so that I could help be the backbone of the society. Along the way I’ve helped develop the teams’ communication abilities further, whilst simultaneously increasing my ability to work in and lead a team.  My goal is to have everyone working together as a tightly oiled machine, and so far it’s been pretty good!!`,
                "name": "Shrey Somaiya",
                "role": "Secretary",
                "cardColour": 3,
            },
            "Xavier": {
                "image": Xavier_Image,
                "description": `Over the year as treasurer I have sought to consistently reduce costs associated with events whilst continuing to improve engagement and attendance. Coming from a shaky financial position previously, gaining a reasonable buffer fund for the society has been my main priority for the past term. My goal is to make a total accrual profit for the year of $1000.`,
                "name": "Xavier Crowley",
                "role": "Treasurer",
                "cardColour": 4,
            },
            "Ian": {
                "image": Ian_Image,
                "description": `Coming into the Arc Delegate position, I knew I wanted to do more than becoming a communicator and a signature collector. I wanted to be able to give incoming co-ops the welcoming family experience I received from the society last year.
                I stepped forward to help organise the buddy program to make sure that new scholars would make a strong connection right off the bat with people in the year above them.`,
                "name": "Ian Ng",
                "role": "Arc Delegate",
                "cardColour": 5,
            },
            "Stanley": {
                "image": Stanley_Image,
                "description": `Social director and all-round LIFO. The aim for this year was to help y'all work hard, play hard. With COVID-19 in our systems, I’ve tried to help Co-op play hard, whether it be games over zoom, getting inebriated over zoom or finding love over zoom, I wanted to replicate that feeling of in person connection. Once COVID-19 is over, my goal is to throw a term you’ll never forget.`,
                "name": "Stanley Chen",
                "role": "Events",
                "cardColour": 1,
            },
            "Hayes": {
                "image": Hayes_Image,
                "description": `As a Charity co-director I wanted to highlight the philanthropic side of Co-op Soc that our members tend to forget. Given that we’re a privileged bunch, it’s important we give back to the community, and these acts of kindness don’t have to be boring! We’ve already fundraised through the World’s Greatest Shave and started a new case comp initiative to help small charities. Later on we hope to run in the City2Surf and hold our much-anticipated Poker Night.`,
                "name": "Hayes Choy",
                "role": "Charity",
                "cardColour": 2,
            },
            "Emily": {
                "image": Emily_Image,
                "description": `Coming into the Charity Director role, my goal was to organise fun events that allow Co-ops to volunteer first-hand and give back to the community - to do good and feel good. We’ve had the opportunity to hold some great events, such as our upcoming online Case Comp partnering with a real charity to help them tackle a very real issue in our society. Looking forward to launching some of our planned events when in-person activities resume!`,
                "name": "Emily Kasovska",
                "role": "Charity",
                "cardColour": 3,
            },
            "Lelland": {
                "image": Lelland_Image,
                "description": `Being a marketing director has allowed me to be more creative in the way the society presents itself.

                think that having a strong presence in how we promote ourselves can help us establish us as a better society and engage more Co-ops with events.`,
                "name": "Lelland Hui",
                "role": "Marketing",
                "cardColour": 4,
            },
            "Susan": {
                "image": Susan_Image,
                "description": `As the publications director, my vision is to develop the society’s online presence through the introduction of published articles on our new platform that is the Co-op Soc website. I hope that by establishing a friendly blog environment, these features can inform, amuse and provoke thought in the wider community.`,
                "name": "Susan Sun",
                "role": "Publications",
                "cardColour": 5,
            },
            "Vincent": {
                "image": Vincent_Image,
                "description": `I came into this role because I wanted to express my creativity and create a website that people would be willing and keen to use. I hope to make something that future Co-op Society members as well as alumni will continue to visit and find out more about how Co-ops are doing and what changes take place from year to year.`,
                "name": "Vincent Chen",
                "role": "IT",
                "cardColour": 1,
            },
            "Celine": {
                "image": Celine_Image,
                "description": `As one of two First Year Representatives, I’ve had the opportunity to represent the Co-op Soc 2020 cohort, and function as a channel of communication between us and the Executive Body. My goals stepping into this role were to contribute effectively to the smooth running of the society and actively engage with my cohort, and throughout the year I’ve had the privilege to work on the 2020 Co-op Soc merchandise line, as well as learn from the current executive body.`,
                "name": "Celine Goh",
                "role": "",
                "cardColour": 1,
            },
            "Kenuka": {
                "image": Kenuka_Image,
                "description": `As one of this year’s First Year Representatives, my role has been to bridge the gap between the 2020 Co-op Soc First Year cohort and the Co-op Soc Executive team. I’ve strived to play an active role in the society by engaging with my cohort and working to design and distribute the 2020 Co-op Soc merchandise. After seeing how tightly-knit the second year cohort were, my main goal has been to foster a similar environment and make Co-op Soc a second family for my year.`,
                "name": "Kenuka Wijayatunga",
                "role": "",
                "cardColour": 5,
            }
        },
        "subcoms": {
            "Marketing": {
                "icon": [faBullhorn],
                "name": "Marketing",
                "description": `The marketing portfolio focuses on creating continued engagement with our Co-op Soc Facebook platform. Via the creation of digital marketing content, all students are encouraged to participate in fulfilling social events.`,
                "members": [
                    "Hayley Gayfer",
                    "Claire Xue",
                    "Piper Workman",
                ],
            },
            "Social": {
                "icon": [faUserFriends],
                "name": "Social",
                "description": `The team is responsible for organising our social calendar, including planning, developing and executing a core suite of events. They ensure all members are given the opportunity to be a part of this vibrant community, through the creation and maintenance of social groups.`,
                "members": [
                    "Noa Challis",
                    "Felicity Chan",
                    "Jasmin Oren",
                ],
            },
            "Charity": {
                "icon": [faDove],
                "name": "Charity",
                "description": `This portfolio seeks to create awareness, raise funds and drive social change for charities. The Charity subcommittee also compliments the Social portfolio in hosting fun events for a great cause.`,
                "members": [
                    "Hirun Bandara",
                    "Jack Yin",
                    "Keshmira Vijayan",
                ],
            },
        },
    },
};

export default teamData;
