import Image from "next/image"
import Logo from "@/assets/logosaas.png"
import MenuIcon from "@/assets/menu.svg"
import Link from "next/link"
const Navbar =()=>{
    return (
        <nav className="py-5">
            <div className="flex items-center justify-between">
                <Image src={Logo} alt="Company Logo" height={40} width={40} />
                <Image src={MenuIcon} className="md:hidden" alt="Menu Icon" height={20} width={20} />
                <nav className="hidden md:flex gap-6 text-black/60 items-center">
                    <Link href="/">Home</Link>
                    <Link href="/">About us</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Portfolio</Link>
                    <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Get a quote</button>
                </nav>
            </div>
        </nav>
    )
}
export default Navbar