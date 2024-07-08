import card from "../assets/union.svg"
function Landing() {
  return (
    <>
      <div className="grid justify-items-center bg-elevator bg-cover bg-center w-full h-96">
        <h1 className="text-orange-200 font-header p-20">Tic</h1>
        <img className="w-1/6 center" src={card}></img>
      </div>
      <div className="bg-cream-300 p-10">
        <h1>hi</h1>
      </div>
    </>
  )
}

export default Landing
