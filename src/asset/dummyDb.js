// Team images
import Inyang from "../asset/images/inyang.svg";
import Tayelolu from "../asset/images/tayelolu.svg";
import Omale from "../asset/images/omale.svg";
import Morgan from "../asset/images/Morgan.svg";

//features Icons
import { FaMoneyBill} from "react-icons/fa"
import { GrVmMaintenance} from "react-icons/gr"
import { RiUserSettingsFill} from "react-icons/ri"


// const visitor = <Visitor/>

export const header = [
  {
    id: 1,
    title: "Home",
    // link: "/",
  },
  {
    id: 2,
    title: "How it works",
    // link: "/",
  },
  {
    id: 3,
    title: "Features",
    // link: "/",
  },
  {
    id: 4,
    title: "Our Team",
    // link: "/",
  },
  {
    id: 5,
    title: "Contact us",
    // link: "/",
  },
];

export const company = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "How it works",
    path: "/",
  },
  {
    id: 3,
    title: "FAQ",
    path: "/",
  },
  {
    id: 4,
    title: "Contact us",
    path: "/",
  },
  {
    id: 5,
    title: "Private Policy",
    path: "/",
  },
  {
    id: 6,
    title: "Terms of Services",
    path: "/",
  },
];

export const teams = [
  {
    id: 1,
    image: Inyang,
    name: "Enwongoabasi Inyang",
    role: "Co-founder",
    linkedin: {
      title: "LinkedIn Profile",
      path: "/",
    },
  },
  {
    id: 2,
    image: Tayelolu,
    name: "Tayelolu Akinbohun",
    role: "Co-founder",
    linkedin: {
      title: "LinkedIn Profile",
      path: "/",
    },
  },
  {
    id: 3,
    image: Omale,
    name: "Omale Aje",
    role: "Lead Engineer",
    linkedin: {
      title: "LinkedIn Profile",
      path: "/",
    },
  },
  {
    id: 4,
    image: Morgan,
    name: "Otobong Morgan",
    role: "Customer Delivery Officer",
    linkedin: {
      title: "LinkedIn Profile",
      path: "/",
    },
  },
];

export const features = [
  {
    id: 1,
    icon: <FaMoneyBill size={55}/>,
    title: "Bills Payment",
    desc: "Fund your wallet and pay estate and utility bills with ease",
    link: "Learn more",
    path: "/",
  },
  {
    id: 2,
    icon: <RiUserSettingsFill size={55}/>,
    title: "Visitor’s Management",
    desc: "Enjoy smooth scheduling of guests at your home before they arrive.",
    link: "Get started",
    path: "/",
  },
  {
    id: 3,
    icon: <GrVmMaintenance size={55}/>,
    title: "Maintenance Service",
    desc: "Get easy access to a handyman or artisan when in need",
    link: "Learn more",
    path: "/",
  },
];
