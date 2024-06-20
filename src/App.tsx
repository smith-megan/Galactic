import { useState, useEffect } from "react"
import { format, getDaysInMonth } from "date-fns"
import "./App.css"

function App() {
  interface HistoryStructure {
    [index: number]: string
    // month: Array<number>
  }

  const [history, setHistory] = useState<HistoryStructure>(
    {} as HistoryStructure
  )

  let date = format(new Date(2014, 6, 11), "MMM/dd/yyyy")
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
