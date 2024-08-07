import { useState, useEffect } from "react"
import { format, getDaysInMonth } from "date-fns"
import soundList from "../assets/sounds/sounds"
import "../App.css"
import axios from "axios"
import { HistoryStructure } from "../App"
import Nav from "../Components/Nav"

function Tic() {
  const [history, setHistory] = useState<HistoryStructure>(
    {} as HistoryStructure
  )

  const getData = async () => {
    await axios.get(`./api/data`).then((res) => {
      console.log(res.data, "response data")
      setHistory(res.data)
      renderButtons(res.data)
    })
  }

  const updateData = (updatedObj: HistoryStructure) => {
    axios.post(`./api/send`, { updatedObj }).then((res) => {
      console.log(res.data, "response data")
    })
  }

  let todayDate = format(new Date(), "MMM/dd/yyyy")
  let dayCount = getDaysInMonth(todayDate)

  let renderButtons = (historyData: HistoryStructure) => {
    const newTrackedArray = []
    console.log(historyData.length, "renderbuttons new history")

    for (let i = 1; i < historyData.length + 1; i++) {
      newTrackedArray.push("from-gray-400 via-60% to-gray-500")
    }

    historyData.tracked = newTrackedArray
    setHistory(historyData)
  }

  let changeColor = (item: number) => {
    let newHistory = { ...history }
    if (newHistory.tracked[item] === "from-gray-400 via-60% to-gray-500") {
      newHistory.tracked[item] = "from-gray-300 via-40% to-gray-100"
    } else {
      newHistory.tracked[item] = "from-gray-400 via-60% to-gray-500"
    }
    setHistory(newHistory)
  }

  useEffect(() => {
    getData()
  }, [todayDate])

  const playSound = () => {
    let chosenSound = soundList[Math.floor(Math.random() * soundList.length)]
    new Audio(chosenSound).play()
  }

  return (
    <>
      <Nav />
      <div className="grid justify-self-center bg-cover bg-center rounded-lg p-10 mt-11 w-3/4">
        <div>
          <h1
            className={
              "grid grid-flow-row font-semibold text-4xl pb-5 text-orange-200 font-header"
            }
          >
            {todayDate}
          </h1>
          <div>
            <h1 className="text-orange-200 font-header">{history.name} - </h1>
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
                        " border-1 border-orange-300 rounded-full p-1 w-16 h-16 text-center font-header text-gray-700 shadow-inner focus:border-orange-400 active:border-orange-400 hover:border-orange-400"
                      }
                      onClick={() => {
                        changeColor(item)
                        playSound()
                        updateData(history)
                      }}
                    >
                      {item + 1}
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
