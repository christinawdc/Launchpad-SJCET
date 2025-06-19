import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="text-xl font-bold">LOGO</div>
      
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">Startups</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Announcements</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Connect</a></li>
      </ul>
      
      <a href="#">
        <Button className="bg-green-200 text-black hover:bg-green-300">
          Join Us
        </Button>
      </a>
    </nav>
  );
}
export default Navbar;