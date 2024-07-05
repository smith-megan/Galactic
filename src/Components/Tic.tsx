import { useState, useEffect } from "react"
import { format, getDaysInMonth } from "date-fns"
import soundList from "../assets/sounds/sounds"
import "../App.css"
import axios from "axios"
import { HistoryStructure } from "../App"

function Tic() {
  const [history, setHistory] = useState<HistoryStructure>(
    {} as HistoryStructure
  )

  const getData = async () => {
    await axios.get(`./api/data`).then((res) => {
      console.log(res.data, "response data")
      setHistory(res.data)
    })
  }

  let todayDate = format(new Date(), "MMM/dd/yyyy")
  let dayCount = getDaysInMonth(todayDate)

  let renderButtons = () => {
    const newHistory = { ...history }
    const newTrackedArray = []

    console.log(history, "renderbuttons new history")
    for (let i = 1; i < newHistory.length + 1; i++) {
      newTrackedArray.push("from-gray-400 via-60% to-gray-500")
      console.log(newTrackedArray)
    }
    newHistory.tracked = newTrackedArray
    console.log(newTrackedArray)
    setHistory(newHistory)
    console.log(history, "Buttons rendered")
  }

  // let changeColor = (item: number) => {
  //   let newHistory = { ...history }
  //   if (newHistory[item] === "from-gray-400 via-60% to-gray-500") {
  //     newHistory[item] = "from-gray-300 via-40% to-gray-100"
  //   } else {
  //     newHistory[item] = "from-gray-400 via-60% to-gray-500"
  //   }
  //   setHistory(newHistory)
  // }

  useEffect(() => {
    getData()
    renderButtons()
  }, [todayDate])

  const playSound = () => {
    let chosenSound = soundList[Math.floor(Math.random() * soundList.length)]
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
          <div>
            <h1 className="text-orange-200">{history.name} - </h1>
            <p className="text-orange-200 p-5">{history.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-7">
          {history.tracked
            ? history.tracked.map((index, item: any) => {
                return (
                  <div key={"button-" + item + index}>
                    <button
                      className={
                        "bg-gradient-to-tl " +
                        history.tracked[item] +
                        " border-2 border-orange-300 rounded-full p-1 w-16 h-16 text-center text-gray-700 shadow-inner focus:border-orange-400 active:border-orange-400 hover:border-orange-400"
                      }
                      onClick={() => {
                        // changeColor(item)
                        playSound()
                        // DownloadJSON(history, date) - add axios handling here
                      }}
                    >
                      {item}
                    </button>
                  </div>
                )
              })
            : ""}
        </div>
      </div>
    </>
  )
}

export default Tic
