import React, { useEffect } from "react";
import HomeMgt from "./HomeMgt";
import estateImg from "../../../asset/images/estatemanagement.svg";
import walletImg from "../../../asset/images/wallet.svg";
import estatemgt from "../../../asset/images/estate.svg";
import handymanIcon from "../../../asset/images/handyman.svg";
import emergencyIcon from "../../../asset/images/emergency.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import ServicesTwo from "./ServicesTwo";

// services data
const estate = {
  icon: estatemgt,
  title: "Estate/Home Management",
  article:
    "You are no longer required to be physically present in order to manage your Estate. You can add/remove occupants, track financial records, track visitors, manage estate workers, and much more.",
  img: estateImg,
  btn: {
    desc: "Learn more",
    path: "/estate_management",
  },
};

const wallet = {
  icon: walletImg,
  title: "Mobile wallet/Bill payment",
  article:
    "Fund your wallet to pay on-the-go bills for utilities, additional airtime, cable, and data subscriptions.",
  img: estateImg,
  btn: {
    desc: "Learn more",
    path: "/mobile_wallet",
  },
};

const Handyman = {
  icon: handymanIcon,
  title: "Handyman Services",
  article:
    "Homly relieves you of the stress of searching for an artisan every time you need to repair something in your home. A variety of repair services are available with the click of a button; quick and easy replacement of light bulbs, pipes, flooring, and so on.",
  img: estateImg,
  btn: {
    desc: "Learn more",
    path: "/handyman_services",
  },
};

const Emergency = {
  icon: emergencyIcon,
  title: "Emergency Services",
  article:
    "Residents (home/estate/office) can now make panic alerts during distressed situations or make emergency requests and receive spontaneous immediate responses from police, firefighters, hospitals, and so on.",
  img: estateImg,
  btn: {
    desc: "Learn more",
    path: "/emergencyF_services",
  },
};

const Management = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-screen max-h-max bg-primary py-12 z-20">
      <div className="w-[90%] flex justify-center flex-col mx-auto">
        <div className="mb-10 flex items-center justify-center flex-col" data-aos="zoom-in" data-aos-duration="2500">
          <h1 className="text-secondary text-center text-3xl font-medium">
            Services
          </h1>
          <p className="text-sm text-gray-200 font-normal mt-1">
            See what they are saying about us
          </p>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-5">
          <HomeMgt
            icon={estate.icon}
            heading={estate.title}
            article={estate.article}
            btn={estate.btn.desc}
            image={estate.img}
          />
          <ServicesTwo
            icon={wallet.icon}
            heading={wallet.title}
            article={wallet.article}
            btn={wallet.btn.desc}
            image={wallet.img}
          />
          <HomeMgt
            icon={Handyman.icon}
            heading={Handyman.title}
            article={Handyman.article}
            btn={Handyman.btn.desc}
            image={Handyman.img}
          />
          <ServicesTwo
            icon={Emergency.icon}
            heading={Emergency.title}
            article={Emergency.article}
            btn={Emergency.btn.desc}
            image={Emergency.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Management;
