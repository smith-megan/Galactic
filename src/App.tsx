import { useState, useEffect } from "react"
import { format, getDaysInMonth } from "date-fns"
import soundList from "./assets/sounds/sounds"
import "./App.css"

function App() {
  interface HistoryStructure {
    // "start": Date
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
      newHistory[i] = "bg-gray-200"
    }
    setHistory(newHistory)
  }

  let changeColor = (item: number) => {
    let newHistory = { ...history }
    newHistory[item] = "bg-green-200"
    setHistory(newHistory)
  }

  useEffect(() => {
    renderButtons(dayCount)
  }, [date])

  const playSound = () => {
    // let chosenSound = soundList[1]
    let chosenSound = soundList[Math.floor(Math.random() * soundList.length)]
    new Audio(chosenSound).play()
    console.log(chosenSound)
  }

  return (
    <>
      <div className={"grid grid-flow-row " + history[1]}>{date}</div>
      <div className="grid grid-cols-4 gap-3 items-center">
        {Object.keys(history).map((item: any) => {
          return (
            <div key={"button-" + item}>
              <button
                className={
                  history[item] + " border-2 border-orange-300 rounded-full"
                }
                onClick={() => {
                  changeColor(item)
                  playSound()
                }}
              >
                {item}
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
