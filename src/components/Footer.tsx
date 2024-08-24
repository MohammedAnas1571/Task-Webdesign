import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const mainItems = [
  {
    id: 1,
    title: "Sofas",
    link: "#",
  },
  {
    id: 2,
    title: "Chairs",
    link: "#",
  },
  {
    id: 3,
    title: "Benches",
    link: "#",
  },
  {
    id: 4,
    title: "Cofee Tables",
    link: "#",
  },
  {
    id: 5,
    title: "Side Tables",
    link: "#",
  },
];

const subItems = [
  {
    id: 1,
    title: "Console Tables",
    link: "#",
  },
  {
    id: 2,
    title: "Tv Stands",
    link: "#",
  },
  {
    id: 3,
    title: "Shelving",
    link: "#",
  },
  {
    id: 4,
    title: "Leather Furniture",
    link: "#",
  },
  {
    id: 5,
    title: "Dining Chair",
    link: "#",
  },
];

const subItems2 = [
  {
    id: 1,
    title: "Dining Tables",
    link: "#",
  },
  {
    id: 2,
    title: "Dining Benches",
    link: "#",
  },
  {
    id: 3,
    title: "Buffests & BarCharts",
    link: "#",
  },
  {
    id: 4,
    title: "Bar & Counter Stools",
    link: "#",
  },
  {
    id: 5,
    title: "Beds",
    link: "#",
  },
];

const subItems3 = [
  {
    id: 1,
    title: "Bedside Tables",
    link: "#",
  },
  {
    id: 2,
    title: "Dressers",
    link: "#",
  },
  {
    id: 3,
    title: "Mattresses",
    link: "#",
  },
  {
    id: 4,
    title: "Privacy Policies",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#324C48] relative">
      <div className=" absolute bottom-0 left-0 flex justify-end">
        <img className="w-[400px]" src="/Mask Group 3.png" alt="" />
      </div>
      <div className="absolute top-0 right-0 flex justify-end">
        <img src="/Mask Group 4.png" alt="" />
      </div>

      <div className="py-28 flex flex-col justify-center relative z-10">
        {/* text content */}
        <div className="flex justify-center items-center gap-10  py-5  mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex flex-col space-y-10 justify-center max-w-[800px] text-[#AD9271]"
          >
            <h1 className="font-playfair-display text-3xl md:text-4xl  text-center">
              {" "}
              “Real comfort, visual and physical, is vital to every room.”
            </h1>
            <p className="text-2xl md:text-3xl italic font-playfair-display text-center">
              – Mark Hampton
            </p>
          </motion.div>
        </div>

        {/* enquiry section */}
        <div className="container lg:px-0">
          <hr className=" border-t border-solid border-t-[#AD9271]" />
          <div className=" grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 md:ml-40">
            <div className="flex flex-col gap-4 text-sm text-[#AD9271]">
              {mainItems.map((item) => (
                <Link key={item.id} to={item.link}>
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-sm text-[#AD9271]">
              {subItems.map((item) => (
                <Link key={item.id} to={item.link}>
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-sm text-[#AD9271]">
              {subItems2.map((item) => (
                <Link key={item.id} to={item.link}>
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-sm text-[#AD9271]">
              {subItems3.map((item) => (
                <Link key={item.id} to={item.link}>
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex items-start gap-12">
              <img src="/Path 110.png" alt="" />
              <img src="/twitter.png" alt="" />
              <img src="/instagram.png" alt="" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="ml-auto p-4 border text-[#ad9271] border-[#ad9271] flex gap-4">
              <span>Website Terms &amp; Conditions</span>
              <span className="text-white">|</span>
              <span className="uppercase">
                &copy; Smart Hatch Technologies Fze
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
