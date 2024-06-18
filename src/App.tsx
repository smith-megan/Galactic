import { useState, useEffect } from "react"
import { format, getDaysInMonth } from "date-fns"
import "./App.css"

function App() {
  interface HistoryStructure {
    [index: number]: string
  }

  const [history, setHistory] = useState<HistoryStructure>(
    {} as HistoryStructure
  )

  const [buttonArray, setButtonArray] = useState([0])
  let date = format(new Date(2014, 6, 11), "MMM/dd/yyyy")
  let dayCount = getDaysInMonth(date)

  let renderButtons = (dayCount: number) => {
    let newArray = []
    for (let i = 1; i < dayCount + 1; i++) {
      newArray.push(i)
    }
    setButtonArray(newArray)
  }
  let changeColor = (item: number) => {
    console.log(history)
    let newHistory = history
    newHistory[item] = "bg-green-200"
    setHistory(newHistory)
  }

  useEffect(() => {
    renderButtons(dayCount)
    console.log(buttonArray)
  }, [date, history])

  return (
    <>
      <div className={"grid grid-flow-row " + history[1]}>{date}</div>
      <div className="grid grid-cols-3 gap-3 items-center">
        {buttonArray.map((item: number) => {
          // console.log(item, "Item from first array")
          return (
            <div key={"button-" + item}>
              <button
                className={
                  history[item]
                  // history[1] + "border-2 border-orange-300 rounded-full"
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
