//Sidebar imports
import {
  UilEstate,
  UilDashboard,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal,
  UilSignOutAlt,
} from "@iconscout/react-unicons/";
import user1 from "../images/user1.png";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.png";

//Sidebar Data
export const SidebarData = [
  {
    icon: UilDashboard,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Jobs",
  },
  {
    icon: UilUsersAlt,
    heading: "Users",
  },
  {
    icon: UilPackage,
    heading: "Transactions",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #ff5450 0%, #ffc9c9 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 90,
    value: "25,970",
    png: UilClipboardAlt,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #e60051 0%, #ff9be9 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "35,870",
    png: UilUsdSquare,
    series: [
      {
        name: "Revenue",
        data: [31, 20, 38, 61, 22, 99, 200],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 40,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Expenses",
        data: [41, 80, 48, 21, 72, 139, 120],
      },
    ],
  },
];

export const UsersData = [
  {
    img: user1,
    name: "Emma Collins",
    job: "Registered Nurse",
    time: "3 mins ago",
  },
  {
    img: user2,
    name: "Dave Olakoma",
    job: "Dental Assistant",
    time: "1 hour ago",
  },
  {
    img: user3,
    name: "Cheryl Rockwell",
    job: "Driver",
    time: "2 hours ago",
  },
];

export const JobsData = [
  {
    name: "Nursing Assistant",
    type: "Full Time",
    wage: "43 per hour",
    location: "Mississauga",
    company: "Credit Valley Hospital",
    postedDate: "03/10/2024",
    expiry: "Expires in 7 days",
    status: "Active",
    description:
      "A Nursing Assistant, or Healthcare Assistant, provides basic care for patients, whether in a hospital, clinic, or long-term healthcare facility. Their duties include following and administering prescribed medications to patients, monitoring their vital signs, and assisting them with day-to-day functioning and activities.",
  },
  {
    name: "Driver",
    type: "Part Time",
    wage: "23 per hour",
    location: "London",
    company: "JK Truck Driving",
    postedDate: "03/20/2024",
    expiry: "Expires in 17 days",
    status: "Active",
    description:
      "Pick up goods and materials, verify loads for accuracy, and deliver them as instructed. Load and unload cargo. Responsible for basic vehicle maintenance; comply with all safe work practices, policies, and processes at all times.",
  },
  {
    name: "Cleaning Supervisor",
    type: "Part Time",
    wage: "20 per hour",
    location: "Toronto",
    company: "PJ Pizza",
    postedDate: "02/10/2024",
    expiry: "Expired 37 days ago",
    status: "Expired",
    description:
      "The Cleaning Supervisor oversees several project sites and their team of cleaners and cleaning tasks. He/She supervises cleaners to carry out their work. He/She inspects the work area cleaned by cleaners. He/She manages work schedule of cleaners and reallocate work to cover absences.",
  },
  {
    name: "Dental Assistant",
    type: "Part Time",
    wage: "30 per hour",
    location: "Brampton",
    company: "Amira Dental Clinich",
    postedDate: "01/30/2024",
    expiry: "Expired 57 days ago",
    status: "Expired",
    description:
      "A Dental Assistant, or Dental Technician, is responsible for helping a licensed Dentist in their day-to-day duties and responsibilities. The tasks of a Dental Assistant generally include record-keeping, performing X-rays, and scheduling appointments with patients.",
  },
  {
    name: "Nursing Practitioner",
    type: "Full Time",
    wage: "63 per hour",
    location: "Windsor",
    company: "Windsor General Hospital",
    postedDate: "04/01/2024",
    expiry: "Expires in 27 days",
    status: "Active",
    description:
      "NPs provide a wide range of direct care services to people at every stage of life. In addition to treating illnesses, they teach individuals and their families about healthy living, preventing disease and managing illness. NPs bring together medical knowledge with the values and skills of nursing.",
  },
  {
    name: "Receptionist",
    type: "Part Time",
    wage: "16 per hour",
    location: "Waterloo",
    company: "Blue Star Hotel",
    postedDate: "03/01/2024",
    expiry: "Expires in 31 days",
    status: "Active",
    description:
      "Receptionists work within an organization to help it run smoothly. They greet visitors, answer phone calls, and run errands while maintaining professional composure throughout interactions with customers or potential clients.",
  },
  {
    name: "Babysitter",
    type: "Part Time",
    wage: "23 per hour",
    location: "Toronto",
    company: "Daddy Day Care",
    postedDate: "03/21/2024",
    expiry: "Expires in 19 days",
    status: "Active",
    description:
      "A Babysitter, or Child Caregiver, provides childcare services to families when they need extra help. There are duties that Babysitters will have to complete during each of their shifts. These duties may include picking children up from school, taking them to appointments, or connecting with their parents in case of emergency.",
  },
  {
    name: "Nail Art Technician",
    type: "Full Time",
    wage: "21 per hour",
    location: "Ottawa",
    company: "Blush Nail Spa",
    postedDate: "03/16/2024",
    expiry: "Expires in 13 days",
    status: "Active",
    description:
      "Deliver high-quality manicures, pedicures, and other nail treatments. Apply nail polish, acrylics, and art to clients' nails. Listen to your clients' wishes and make recommendations to help them reach their nail goals. Keep all of your equipment sanitized and in proper working order.",
  },
  {
    name: "Construction Labourer",
    type: "Full Time",
    wage: "51 per hour",
    location: "Oakville",
    company: "J&J Constructions",
    postedDate: "03/19/2024",
    expiry: "Expires in 23 days",
    status: "Active",
    description:
      "What does a construction labourer do? is they assist a construction site in various ways. Depending on the trade, they can pick up debris from the construction site, fill dumpsters, unload or set up tools, or do simple repetitive tasks. These tasks can provide you with an excellent opportunity to learn a trade and learn about other trade positions you're considering by working hard, watching, and asking questions. Working as a construction labourer requires physical labour, such as using hand tools, lifting, and walking. Depending on the trade, they can spend most of their time working indoors or outdoors.",
  },
];
