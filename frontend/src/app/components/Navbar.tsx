import Link from 'next/link'
import { NavItems } from '../items'

export const Navbar = () => {
  return (
    <nav className="fixed top-10 mx-auto inset-x-0 max-w-2xl h-10  ">
      <ul className="flex flex-row items-center justify-center gap-5 rounded-full p-4  bg-white/20">
        {NavItems.map(item => (
          <li key={item.href} className="hover:text-neutral-200 text-white">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
