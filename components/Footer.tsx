import Link from "next/link";
import Image from "next/image";

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container-std py-10 grid md:grid-cols-3 gap-8">
        <div>
         <Link href="/" className="inline-block">
            <Image
              src="/logo-footer.png"  // ไฟล์ใน /public
              alt="LongTrade Academy"
              width={220}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
		  <p className="text-white/70 text-sm mt-4">
            แพลตฟอร์มความรู้และเครื่องมือสำหรับเทรดเดอร์ยุคใหม่
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-3">เมนู</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link href="/">หน้าแรก</Link></li>
            <li><Link href="/about">เกี่ยวกับเรา</Link></li>
            <li><Link href="/courses">คอร์สเรียน</Link></li>
            <li><a href="https://longtrade-catalog.vercel.app/" target="_blank" rel="noopener noreferrer">สินค้าและบริการ</a></li>
            <li><Link href="/articles">บทความ</Link></li>
            <li><Link href="/promotions">โปรโมชั่น</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-3">ติดตามเรา</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" aria-disabled>Youtube</a></li>
            <li><a href="#" aria-disabled>Facebook</a></li>
            <li><a href="#" aria-disabled>LINE OA</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">© {year} LongTrade Academy. All rights reserved.</div>
    </footer>
  )
}
