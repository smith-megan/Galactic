import { useState, useEffect } from "react"
import { format, getDaysInMonth } from "date-fns"
import soundList from "./assets/sounds/sounds"
import "./App.css"
import DownloadJSON from "./Components/download.tsx"

function App() {
  interface HistoryStructure {
    [index: number]: string
    // month: Array<number>
  }

  const [history, setHistory] = useState<HistoryStructure>(
    {} as HistoryStructure
  )

  let date = format(new Date(), "MMM/dd/yyyy")
  let dayCount = getDaysInMonth(date)

  let renderButtons = (dayCount: number) => {
    let newHistory = { ...history }
    for (let i = 1; i < dayCount + 1; i++) {
      newHistory[i] = "from-gray-400 via-60% to-gray-500"
    }
    setHistory(newHistory)
  }

  let changeColor = (item: number) => {
    let newHistory = { ...history }
    if (newHistory[item] === "from-gray-400 via-60% to-gray-500") {
      newHistory[item] = "from-gray-300 via-40% to-gray-100"
    } else {
      newHistory[item] = "from-gray-400 via-60% to-gray-500"
    }
    setHistory(newHistory)
  }

  useEffect(() => {
    renderButtons(dayCount)
  }, [date])

  const playSound = () => {
    let chosenSound = soundList[Math.floor(Math.random() * soundList.length)]
    new Audio(chosenSound).play()
  }

  return (
    <>
      <div className="grid justify-self-center bg-burgundy rounded-lg p-10 mt-11 w-3/4">
        <div
          className={
            "grid grid-flow-row font-semibold text-4xl p-10 text-orange-200 font-header"
          }
        >
          {date}
        </div>
        <div className="grid grid-cols-7 gap-7">
          {Object.keys(history).map((item: any) => {
            return (
              <div key={"button-" + item}>
                <button
                  className={
                    "bg-gradient-to-tl " +
                    history[item] +
                    " border-2 border-orange-300 rounded-full p-1 w-16 h-16 text-center text-gray-700 shadow-inner focus:border-orange-400 active:border-orange-400 hover:border-orange-400"
                  }
                  onClick={() => {
                    changeColor(item)
                    playSound()
                    DownloadJSON(history, date)
                  }}
                >
                  {item}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
