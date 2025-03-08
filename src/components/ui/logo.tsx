import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className={className}>
      <span className="text-2xl font-bold text-[#FF9AA2]">PIXEL</span>
      <span className="text-lg text-[#67B99A] ml-1">convites</span>
    </Link>
  );
}
