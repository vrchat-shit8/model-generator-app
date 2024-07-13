export const Home = (props: { onNextStep: () => void }) => {
  return (
    <div className="container space-y-6">
      <img src="/banner.png" alt="Varkaria" />
      <h1 className="text-2xl">
        ยินดีต้อนรับสู่ระบบที่มีประโยชน์ที่ด <br />
        ีที่สุดในงาน
      </h1>
      <button onClick={props.onNextStep}>ถัดไป</button>
    </div>
  )
}

export default Home
