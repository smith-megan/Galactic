import cloud from "../assets/cloud.png"
function Nav() {
  return (
    <>
      <div
        className="flex flex-row relative justify-around items-center bg-[#799FCD] bg-blend-lighten bg-cover bg-center w-full h-30"
        style={{ backgroundImage: `url(${cloud})` }}
      >
        <h1 className="font-header p-2 font-semibold text-3xl text-white">
          Elevate
        </h1>
        <p className="text-xl text-navy-400 font-light">One step to improve</p>
      </div>
    </>
  )
}
export default Nav
