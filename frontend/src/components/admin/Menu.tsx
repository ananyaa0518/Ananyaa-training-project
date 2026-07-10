interface MenuProps {
  children: React.ReactNode;
}

export default function Menu({ children }: MenuProps) {
  return <nav className="space-y-2">{children}</nav>;
}
