import card from "../assets/squish.svg"
import meter from "../assets/levels.jpg"
function Landing() {
  return (
    <>
      <div className="flex flex-col relative justify-between items-center bg-cream-200 bg-cover bg-center w-full h-90">
        <h1 className="text-navy-400 font-header pt-20 pl-10 pr-10 font-bold text-6xl">
          Elevate
        </h1>
        <p className="text-xl pt-.5 pb-5">One step to improve</p>
        <img className="w-1/3 center" src={card}></img>
      </div>
      <div className="bg-navy-400 p-10">
        <img src={meter} className="rounded-md" />
        <h2 className="text-cream-100 text-3xl">
          Take a habit to the next level
        </h2>
        <button>Try Free</button>
      </div>
      <div className="bg-cream-100">
        <h1>Steps to success</h1>
        <h2>1. Envision</h2>
        <p>
          Imagine how you want to improve your life and identify the habit that
          will get you there
        </p>
        <h2>2. Specify</h2>
        <p>
          Take the habit and define what it is, when you will do it, and for how
          long
        </p>
        <h2>3. Track</h2>
        <p>
          Monitor your progress and celebrate consistency as you work towards
          creating your new life and habit
        </p>
      </div>
    </>
  )
}

export default Landing
