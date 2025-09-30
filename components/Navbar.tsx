"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="container-std flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-bold">LongTrade Academy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item)=> item.external ? (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white/100 text-white/80">
              {item.label}
            </a>
          ) : (
            <Link key={item.label} href={item.href} className="text-sm hover:text-white/100 text-white/80">
              {item.label}
            </Link>
          ))}
          {/* เปลี่ยนจาก /login เป็น /contact */}
          <Link href="/contact" className="btn btn-secondary">ติดต่อทีมงาน</Link>
        </nav>
        <button className="md:hidden p-2" onClick={()=>setOpen(s=>!s)} aria-label="toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="container-std py-3 flex flex-col">
            {NAV.map((item)=> item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="py-2 text-white/80">{item.label}</a>
            ) : (
              <Link key={item.label} href={item.href} className="py-2 text-white/80" onClick={()=>setOpen(false)}>{item.label}</Link>
            ))}
            {/* ปุ่มมือถือไปหน้า /contact */}
            <Link href="/contact" className="btn btn-secondary mt-2 w-full" onClick={()=>setOpen(false)}>
              ติดต่อทีมงาน
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
