// import card from "../assets/squish.svg"
import mountain from "../assets/mountain.jpg"

function Landing() {
  return (
    <>
      <div
        className="flex flex-col relative justify-between items-center bg-navy-400 bg-cover bg-center w-full h-90 text-white"
        style={{ backgroundImage: `url(${mountain})` }}
      >
        <h1 className="font-header pt-40 pl-10 pr-10 font-semibold text-6xl">
          Elevate
        </h1>
        <p className="text-xl pb-7">One step to improve</p>
        {/* <img className="w-1/5 center" src={card}></img> */}
      </div>
      <div className="bg-navy-400 p-3">
        <div className="flex justify-center items-center">
          <hr className="w-1/4 border-1"></hr>
          <h2 className="text-white text-2xl">
            Take a habit to the next level
          </h2>
          <hr className="w-1/4 border-1"></hr>
        </div>
        <div className="grid gap-5 justify-center items-center content-center text-white">
          <div className="grid justify-center items-center content-center">
            <img
              src={mountain}
              alt="lightbulb image"
              className="object-cover rounded-full h-20 w-20 block m-auto"
            />
            <h2 className="font-header text-2xl ">Envision</h2>
            <p>
              First imagine how you want to improve your life and identify the
              habit that will get you there
            </p>
          </div>
          <span className="top-1 border-r-[10px] border-r-transparent border-t-[10px] border-t-transparent border-l-[10px] border-l-transparent border-t-white block m-auto"></span>
          <div>
            <img
              src={mountain}
              alt="lightbulb image"
              className="object-cover rounded-full h-20 w-20 block m-auto"
            />
            <h2 className="font-header text-2xl">Specify</h2>
            <p>
              Next take the habit and define what it is, when you will do it,
              and for how long
            </p>
          </div>
          <span className="top-1 border-r-[10px] border-r-transparent border-t-[10px] border-t-transparent border-l-[10px] border-l-transparent border-t-white block m-auto"></span>

          <div>
            <img
              src={mountain}
              alt="lightbulb image"
              className="object-cover rounded-full h-20 w-20 block m-auto"
            />
            <h2 className="font-header text-2xl">Track</h2>
            <p>
              Then monitor your progress and celebrate consistency as you work
              towards creating your new life and habit
            </p>
          </div>
          <button>Try Free</button>
        </div>
      </div>
    </>
  )
}

export default Landing
