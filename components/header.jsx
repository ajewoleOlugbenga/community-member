import Image from 'next/image';
import Logo from "../public/logo.png"
const Header = () => {
  return (
    <>
    <Image src={Logo} alt="A server surrounded by magic sparkles." width={500} />
      <h1>Welcome to this NextJS Course!</h1>
    </>
  )
}

export default Header;