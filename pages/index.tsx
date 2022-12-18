import Link from "next/link";
import { motion } from "framer-motion";

const NameBox = () => {
  return (
    <motion.div
      className="flex flex-col gap ml-8"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <span className="block font-semibold text-2xl">Taiwo Ajiboye</span>
      <span className="text-slate-500">An agile full stack developer</span>
    </motion.div>
  );
};

const NavbarItem = ({ label }) => {
  return (
    <Link href={"/work"}>
      <span className="font-semibold text-slate-700 hover:text-slate-500 hover:border-b-2 hover:border-b-black ">
        {label}
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <motion.div
      className="navbar md:flex md:gap-12 md:items-center md:justify-between md:mr-16"
      transition={{ duration: 1, delay: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <NavbarItem label="Work" />
      <NavbarItem label="Resume" />
      <NavbarItem label="Contact" />
      <NavbarItem label="Blog" />
      <NavbarItem label="Quiz" />
    </motion.div>
  );
};

const WorkBox = () => {
  const variant = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };
  return (
    <motion.div
      className="w-full h-[400px] bg-white shadow-md rounded-lg border-2 border-slate-300"
      variants={variant}
    ></motion.div>
  );
};

interface IFooterContactItemProps {
  link?: string;
  children: any;
}

const FooterContactItem = ({ children, link }: IFooterContactItemProps) => {
  return (
    <span className="border-b border-slate-500 border-dashed border-spacing-4 cursor-pointer">
      <a href={link} target="_blank">
        {children}
      </a>
    </span>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-slate-300 mt-16 p-4">
      <div className="mb-4">
        <span>Contact Email:</span> <span>boldrackdev@gmail.com</span>
      </div>
      <div className="flex gap-4">
        <FooterContactItem>LinkedIn</FooterContactItem>
        <FooterContactItem>Twitter</FooterContactItem>
        <FooterContactItem>Youtube</FooterContactItem>
      </div>
    </footer>
  );
};

const HomePage = () => {
  const worksVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 1.5, delay: 1 } },
  };
  return (
    <div className="min-h-screen p-2 bg-white flex justify-center">
      <div className="w-full max-w-[920px] bg-slate-100 mt-4 p-4 rounded-lg">
        <header className="flex justify-between">
          <NameBox />
          <Navbar />
        </header>
        <main>
          <motion.section
            className="mx-8 mt-32 grid grid-cols-2 gap-8 justify-items-center"
            variants={worksVariants}
            initial="hidden"
            animate="show"
          >
            <WorkBox />
            <WorkBox />
            <WorkBox />
          </motion.section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
