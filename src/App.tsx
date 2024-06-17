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

  useEffect(() => {
    renderButtons(dayCount)
  }, [date])

  return (
    <>
      <div className={"grid grid-flow-row bg-" + history[1] + "600"}>
        {date}
      </div>
      {buttonArray.map((item: number) => {
        return (
          <div key={"button-" + { item }}>
            <h1 className={"bg-" + history[item] + "600" + " text-sm"}>
              {item}
            </h1>
            <button
              className="bg-gray-200 border-2 border-gray-500 rounded-full w-1/3 h-1/3"
              onClick={() => {
                console.log(history)
                let newHistory = history
                newHistory[item] = "green"
                setHistory(history)
              }}
            ></button>
          </div>
        )
      })}
    </>
  )
}

export default App
