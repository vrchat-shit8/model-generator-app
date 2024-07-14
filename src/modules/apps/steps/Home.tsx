import { Marquee } from '@/modules/apps/Marquee'

export const Home = (props: { onNextStep: () => void }) => {
  return (
    <div className="container space-y-6">
      <img
        src="/banner.png"
        alt="Varkaria"
        className="varkaria-animation w-full transition-all"
      />
      <Marquee />
      <h1 className="text-2xl">
        ยินดีต้อนรับสู่ระบบที่มีประโยชน์ที่ด <br />
        ีที่สุดในงาน
      </h1>
      <div className="space-y-0.5">
        <button onClick={props.onNextStep}>ถัดไป</button>
        <div className="text-xs">^ อันนี้ปุ่มนะ กดได้ มันไม่กัด</div>
      </div>
      <div className="relative">
        <img
          src="/drink.png"
          alt="Varkaria"
          className="w-full transition-all"
        />
        <div
          className="absolute right-10 top-[11rem] h-12 w-12"
          onClick={() => {
            alert('โง่ ปุ่มอยู่ด้านบน')
          }}
        />
        onimai drink
      </div>
    </div>
  )
}

export default Home
