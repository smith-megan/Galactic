import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { format } from "date-fns"
import soundList from "./assets/sounds/sounds"
import "./App.css"
import axios from "axios"
import Nav from "./Components/Nav"
export interface HistoryStructure {
  date: string
  name: string
  description: string
  length: number
  tracked: Array<string>
  // length: { [index: number]: string }
  // month: Array<number>
}

function App() {
  let navigate = useNavigate()

  const todayDate = format(new Date(), "MMM/dd/yyyy")

  const [history, setHistory] = useState<HistoryStructure>({
    date: todayDate,
    name: "Journal",
    description: "5 min or one page of writing by hand",
    length: 0,
    tracked: [""],
  } as HistoryStructure)

  const postData = (historyPackage: HistoryStructure) => {
    axios.post(`./api/send`, { historyPackage }).then((res) => {
      if (res.data === "success") {
        navigate(`/tic`)
      }
    })
  }

  const playSound = () => {
    const chosenSound = soundList[Math.floor(Math.random() * soundList.length)]
    new Audio(chosenSound).play()
  }

  return (
    <>
      <Nav />
      <div className="grid justify-self-center bg-white p-5 mt-6 w-5/6 text-navy-400">
        <div>
          <h1
            className={
              "grid grid-flow-row font-semibold text-4xl pb-5 font-header"
            }
          >
            {todayDate}
          </h1>
          <p className="p-5"></p>
        </div>
        <form className="grid gap-5">
          <label className="bg-slate-300 p-2">
            Name your Goal:
            <input
              type="text"
              value={history.name}
              onChange={(e) => {
                const newHistory = { ...history }
                newHistory.name = e.target.value
                setHistory(newHistory)
              }}
            />
          </label>
          <label className="bg-slate-500 p-2">
            Specify Success:
            <input
              type="text"
              value={history.description}
              onChange={(e) => {
                const newHistory = { ...history }
                newHistory.description = e.target.value
                setHistory(newHistory)
              }}
            />
          </label>
          <label className="bg-slate-300 p-2">
            Set Length:
            <input
              type="number"
              min="1"
              max="365"
              // value={history.length}
              onChange={(e) => {
                const newHistory = { ...history }
                newHistory.length = parseInt(e.target.value)
                setHistory(newHistory)
              }}
            />
          </label>
          <div>
            <button
              className={
                "bg-gradient-to-tl " +
                // history[item] +
                " border-2 border-orange-300 rounded-full p-1 w-16 h-16 text-center text-gray-700 shadow-inner focus:border-orange-400 active:border-orange-400 hover:border-orange-400"
              }
              onClick={(e) => {
                e.preventDefault()
                // changeColor(item)
                playSound()
                console.log(history, "submit history")
                postData(history)
              }}
            ></button>
            <h1>Start</h1>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
