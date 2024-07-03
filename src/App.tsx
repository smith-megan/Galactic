import { useState } from "react"
import { format } from "date-fns"
import soundList from "./assets/sounds/sounds"
import "./App.css"
import axios from "axios"

function App() {
  interface HistoryStructure {
    date: string
    name: string
    description: string
    length: number
    // length: { [index: number]: string }
    // month: Array<number>
  }

  const todayDate = format(new Date(), "MMM/dd/yyyy")

  const [history, setHistory] = useState<HistoryStructure>({
    date: todayDate,
    name: "Journal",
    description: "5 min or one page of writing by hand",
    length: 0,
  } as HistoryStructure)

  const postData = (historyPackage: object) => {
    console.log(historyPackage, "from post function")
    axios.post(`./api/send`, { historyPackage }).then((res) => {
      console.log(historyPackage)
      console.log(res.data, "response data")
      // move to next screen on success
    })
  }

  const playSound = () => {
    const chosenSound = soundList[Math.floor(Math.random() * soundList.length)]
    new Audio(chosenSound).play()
  }

  return (
    <>
      <div className="grid justify-self-center bg-burgundy rounded-lg p-10 mt-11 w-3/4">
        <div>
          <h1
            className={
              "grid grid-flow-row font-semibold text-4xl pb-5 text-orange-200 font-header"
            }
          >
            Tic - {todayDate}
          </h1>
          <p className="text-orange-200 p-5"></p>
        </div>
        <form className="grid gap-5 text-orange-200">
          <label>
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
          <label>
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
          <label>
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
