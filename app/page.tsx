"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SectionCard from "@/components/SectionCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import FAQ from "@/components/FAQ";

const TOOLS = [
  { title: "GOLD FLOW SYSTEM", src: "/tools/indicator1.png" },
  { title: "BOOST CAPITAL", src: "/tools/indicator3.png" },
  { title: "LT INTELLIGENCE", src: "/tools/indicator2.png" },
];

const OPEN_ACCOUNT_URL = "https://affs.click/iQ1BQ";

/** ป็อปอัปขั้นตอนเปิดบัญชี */
function OpenAccountModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // ปิดเมื่อกด Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-6"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* modal card */}
      <div
        className="relative z-[91] w-full max-w-4xl glass overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="text-xl md:text-2xl font-extrabold">
            ขั้นตอนการเปิดบัญชีเทรด
          </h3>
          <button
            className="px-3 py-1 rounded-md bg-white/5 hover:bg-white/10"
            onClick={onClose}
            aria-label="ปิดป็อปอัป"
          >
            ✕
          </button>
        </div>

        {/* body */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="rounded-xl overflow-hidden">
              {/* ภาพตัวอย่างการเปิดบัญชี (แก้ทีหลังได้) */}
			<PlaceholderImage src="/sample_open.png" width={600} height={900} className="w-full h-full" />
            </div>

            <div className="space-y-3 text-white/90">
              <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                <li>กรอกข้อมูล <strong>Email</strong> และกำหนด <strong>รหัสผ่าน</strong></li>
                <li>
                  คลิกที่คำว่า <strong>ป้อนที่นี้</strong> เพื่อใส่รหัสพันธมิตร
                </li>
                <li>
                  กรอกรหัสพันธมิตร{" "}
                  <span className="font-extrabold text-brand-red">
                    LONGTRADE
                  </span>
                </li>
                <li>ไปที่ Email เพื่อกดยืนยัน</li>
              </ol>

              <div className="pt-4">
                <a
                  href={OPEN_ACCOUNT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-base"
                >
                  คลิกเพื่อเปิดบัญชี
                </a>
              </div>

              <p className="text-xs text-white/60 pt-2">
                *ลิงก์จะเปิดในแท็บใหม่ เพื่อดำเนินการเปิดบัญชีบนเว็บไซต์ XM
              </p>
			  
			  {/* โปรฯ + สิทธิพิเศษ (จัดกล่องสวยๆ แยก 2 คอลัมน์) */}
            <div className="rounded-xl leading-8 border border-brand-red/35 bg-white/5 p-4">
              <h4 className="font-bold mb-2">โปรโมชั่น XM</h4>
              <ol className="list-decimal pl-5 space-y-1 text-sm md:text-base">
                <li>เปิดบัญชีเทรดครั้งแรก รับ <b>$30</b> ไปเทรดได้เลย</li>
                <li>โบนัสเงินฝาก <b>100%</b> สูงสุดถึง <b>$500</b></li>
                <li>โบนัสเงินฝาก <b>50%</b> สูงสุดถึง <b>$2,000</b></li>
                <li>โบนัสเงินฝาก <b>20%</b> สูงสุดถึง <b>$8,000</b></li>
                <li>แข่งขันบัญชีทดลอง ลุ้นรางวัลรวม <b>$25,000</b></li>
              </ol>
            </div>
			  <p className="text-xs text-white/60 mt-3">
            *เป็นไปตามเงื่อนไขที่ทาง XM กำหนดเท่านั้น
             </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="space-y-8 md:space-y-12">
      {/* 1) HERO */}
      <SectionCard className="text-center">
        <h1 className="h1 text-center leading-tight">
          <span className="block">
            EMPOWER <span className="text-brand-red">YOUR</span>
          </span>
          <span className="block">
            TRADING <span className="text-brand-red">YOUR </span> STYLE
          </span>
          <span className="block">
            <span className="text-brand-red">YOUR </span> WAY!
          </span>
        </h1>

        <p className="p mt-4">
          ยกระดับการเทรดในสไตล์ของคุณ บนเส้นทางของคุณเอง ด้วยเครื่องมือช่วยเทรดอัจฉริยะ และคลังความรู้
        </p>
        <p className="p mt-4">
          เทคนิคการเทรดแบบมือโปร ครอบคลุมทุกเทคนิคที่นักเทรดต้องรู้
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {/* ปุ่มเปิดป็อปอัป */}
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="btn btn-primary"
          >
            เปิดบัญชีเทรดกับ XM
          </button>
        </div>

		<div className="mt-6">
		  <a
			href="https://longtrade-catalog.vercel.app/"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="ไปยัง Longtrade Catalog"
			className="block group"
		  >
			<PlaceholderImage
			  src="/Herocard.png"
			  width={1105}
			  height={680}
			  label="Home_1"
			  className="transition-transform duration-300 group-hover:scale-[1.02] rounded-xl"
			/>
		  </a>
		</div>
      </SectionCard>

      {/* 4) course */}
      <SectionCard>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="h2">คอร์สเรียนออนไลน์สำหรับเทรดเดอร์ยุคใหม่</h2>
            <p className="p mt-3">
              ก้าวแรกสู่การเป็นเทรดเดอร์มืออาชีพ เรียนรู้วิธีคิด วิธีมองตลาด และกลยุทธ์ที่พิสูจน์แล้วว่าสามารถใช้ได้จริง ถ่ายทอดโดยทีมโค้ชที่ผ่านสนามจริงมาแล้ว เพื่อเปลี่ยนความรู้ให้เป็นทักษะ และเปลี่ยนการเทรดของคุณให้เติบโตอย่างมั่นคง
            </p>
            <div className="mt-5">
              <Link href="/tools/goldflow#start" className="btn btn-primary">
                เริ่มเรียนทันที
              </Link>
            </div>
          </div>
          <PlaceholderImage src="/coach.png" width={1000} height={700} className="rounded-xl" />
        </div>
      </SectionCard>

      {/* 2) Hero Card */}
      <SectionCard>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="h2 mt-2">เริ่มต้นเทรดอย่างมั่นใจ ด้วย E-book จาก Longtrade Academy</h2>
            <p className="p mt-3">
              เราได้รวบรวมความรู้ เทคนิค และเครื่องมือที่จำเป็นสำหรับเทรดเดอร์ยุคใหม่ ไม่ว่าจะเป็นการอ่านกราฟเปล่า การวิเคราะห์ Price Action หรือกลยุทธ์การจัดการเงินทุน ทุกเล่มถูกออกแบบมาให้เข้าใจง่าย ใช้งานได้จริง และช่วยยกระดับการเทรดของคุณให้ก้าวไปอีกขั้น
            </p>
            <div className="mt-5">
              <Link href="/tools" className="btn btn-primary">ดูรายละเอียด</Link>
            </div>
          </div>
          <PlaceholderImage src="/ebook/ebook.png" width={1000} height={700} className="rounded-xl" />
        </div>
      </SectionCard>

      {/* 3) GoldFlow Overview */}
      <SectionCard>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <PlaceholderImage src="/ea.png" width={1000} height={700} className="rounded-xl" />
          <div>
            <h2 className="h2">ชุดเครื่องมือ EA อัจฉริยะสำหรับนักเทรดมืออาชีพ</h2>
            <p className="p mt-3">
              EA จาก Longtrade ถูกพัฒนาขึ้นจากประสบการณ์ในตลาดจริง ผสานกลยุทธ์หลากหลาย ทั้งการจับจังหวะ Swing, การติดตามเทรนด์ใหญ่, การเก็งข่าว, รวมถึงการทดสอบกลยุทธ์ย้อนหลัง ครบจบในชุดเดียว เพื่อให้นักเทรดทุกระดับใช้ต่อยอดได้จริง
            </p>
            <div className="mt-5">
              <Link href="/tools/goldflow" className="btn btn-primary">ดูรายละเอียด</Link>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 5) Tools Trio */}
      <SectionCard>
        <h2 className="h2 mb-6 text-center">เครื่องมืออัจฉริยะสำหรับเทรดเดอร์ยุคใหม่</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {TOOLS.map((t) => (
            <div key={t.title} className="glass p-4">
              <PlaceholderImage
                src={t.src}
                width={600}
                height={900}
                label={t.title}
                className="rounded-xl"
              />
              <div className="mt-4 font-semibold">{t.title}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/tools" className="btn btn-primary">ดูรายละเอียด</Link>
        </div>
      </SectionCard>

      {/* 6) Articles */}
		<SectionCard>
		<h2 className="h2 mb-6 text-center">บทความเทคนิควิเคราะห์กราฟ</h2>
			<p className="p mt-3 text-center">
              เรียบรู้เทคนิควิเคราะห์กราฟจากมุมมองของเทรดเดอร์มืออาชีพ ไม่ว่าจะเป็นรูปแบกราฟยอดนิยมแบบต่างๆ เราจะพาคุณเข้าใจโครงสร้างราคา จุดเข้าออกที่มีนัยสำคัญ เหมาะสำหรับทั้งมั้อใหม่ที่ต้องการปูพื้นฐาน และผู้มีประสบการณ์ที่ต้องการพัฒนาทักษะวิเคราะห์ให้แม่นยำยิ่งขึ้งขึ้น
            </p>
			<p className="p mt-3 text-center space-y-12">  </p>

  {/** ใส่รูปทีละรายการ */}
  {(() => {
    const ARTICLES = [
      { title: "2-2 Bearish Continuation",   src: "/articles/articles1.jpg" },
      { title: "Bullish Morning Doji Star",  src: "/articles/articles2.jpg" },
      { title: "Bullish Harami Cross",     src: "/articles/articles3.jpg" },
    ];

    return (
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {ARTICLES.map((a) => (
          <div key={a.title} className="glass p-4">
            <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
              {/* ถ้า PlaceholderImage ของคุณรองรับ src แล้ว */}
              <PlaceholderImage
                src={a.src}
                width={600}
                height={900}
                label={a.title}
                className="w-full h-full object-cover"
              />

              {/* ถ้า PlaceholderImage ยังไม่รองรับ src ให้ใช้ Next/Image แทน:
              <Image src={a.src} alt={a.title} fill className="object-cover" sizes="(min-width:768px) 33vw, 100vw" />
              */}
            </div>
            <div className="mt-4 font-semibold">{a.title}</div>
          </div>
        ))}
      </div>
    );
  })()}

  <div className="text-center mt-6">
    <Link href="/articles" className="btn btn-primary">บทความทั้งหมด</Link>
  </div>
</SectionCard>


      {/* 7) Videos */}
      <SectionCard>
        <h2 className="h2 mb-6 text-center">วิดีโอเจาะลึกกลยุทธ์เทรดแบบมือโปร</h2>
		<p className="p mt-3 text-center">
              รวมวิดีโอเนื้อหาเชิงลึก ที่ถ่ายทอดจากประสบการณ์จริงของเทรดเดอร์มืออาชีพครอบคลุมตั้งแต่พื้นฐานการวางแผนเกรด การจัดการความเสี่ยง ไปจนถึงเทคนิคการวิเคราะห์กราฟที่แม่นยำทุกตอนออกแบบให้เข้าใจง่าย ใช้ได้จริง
            </p>
			<p className="p mt-3 text-center space-y-12">  </p>
        <div className="grid md:grid-cols-3 gap-6">
          {["LYauImHOSkQ", "k2rNMj0RauQ", "DFUF0B2N8zw"].map((id) => (
            <YouTubeEmbed key={id} id={id} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="https://www.youtube.com/@AcademyLongtrade" className="btn btn-primary">VDO View All</Link>
        </div>
      </SectionCard>

      {/* 8) Promotion XM (สามรูปแยกกัน) */}
      <SectionCard>
        <h2 className="h2 mb-6 text-center">โปรโมชันพาร์ทเนอร์</h2>
        {(() => {
          const PROMOS = [
            { src: "/promos/xm_pro1.png", alt: "โปรโมชั่น XM #1" },
            { src: "/promos/xm_pro2.png", alt: "โปรโมชั่น XM #2" },
            { src: "/promos/xm_pro3.png", alt: "โปรโมชั่น XM #3" },
          ];
          return (
            <div className="grid md:grid-cols-3 gap-6">
              {PROMOS.map((p, i) => (
                <div key={i} className="glass p-4">
                  <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <PlaceholderImage
                      src={p.src}
                      width={600}
                      height={800}
                      label={p.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-white/70 mt-2">
                    การลงทุนมีความเสี่ยง โปรดศึกษาข้อมูลก่อนตัดสินใจลงทุน
                  </p>
                </div>
              ))}
            </div>
          );
        })()}
        <div className="text-center mt-6">
          <Link href="/promotions" className="btn btn-primary">รายละเอียดโปรโมชัน</Link>
        </div>
      </SectionCard>

      {/* 9) FAQ */}
      <SectionCard>
        <h2 className="h2 mb-6 text-center">FAQ</h2>
		<p className="p mt-3 text-center">
              นี่คือ FAQ (คำถามที่พบบ่อย) สำหรับ Longtrade Academy
            </p>
			<p className="p mt-3 text-center space-y-12">  </p>
        <FAQ />
      </SectionCard>

      {/* Modal */}
      <OpenAccountModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
