
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextFood
        </Link>
        
      </header>
    </>
  );
};

export default MainHeader;
