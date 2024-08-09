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

  const startDate = format(new Date(), "MMM/dd/yyyy")

  const [history, setHistory] = useState<HistoryStructure>({
    date: startDate,
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
      <div className="grid justify-self-center bg-white p-5 mt-9 text-navy-400">
        <h1
          className={
            "grid grid-flow-row font-semibold text-4xl pb-5 font-header"
          }
        >
          4 Questions
        </h1>
        <form className="grid gap-0">
          <label className="bg-slate-300 p-4">
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
          <label className="bg-slate-200 p-4 grid gap-1">
            Specify Success:
            <textarea
              value={history.description}
              onChange={(e) => {
                const newHistory = { ...history }
                newHistory.description = e.target.value
                setHistory(newHistory)
              }}
            />
          </label>
          <label className="bg-slate-300 p-4">
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
          <label className="bg-slate-200 p-4">
            Set Start Date:
            <input
              type="date"
              onChange={(e) => {
                const newHistory = { ...history }
                newHistory.date = e.target.value
                setHistory(newHistory)
              }}
            />
          </label>
          <div className="flex justify-center items-center content-center pt-3 pb-3">
            <button
              className={
                "bg-navy-400 bg-gradient-to-tl " +
                // history[item] +
                " border-2 border-[#AAC9EF] rounded-full p-1 w-16 h-16 text-center text-gray-700 shadow-inner focus:border-orange-400 active:border-orange-400 hover:border-orange-400"
              }
              onClick={(e) => {
                e.preventDefault()
                // changeColor(item)
                playSound()
                console.log(history, "submit history")
                postData(history)
              }}
            ></button>
            <h1 className="font-header p-2">Go</h1>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
