import { useCallback, useEffect, useState } from 'react'

export const useProgressBar = (duration, onTimeUp) => {
   const [chartPercent, setChartPercent] = useState(0)
   const [time, setTime] = useState(duration)

   const calculatePercentage = useCallback(() => {
      const percent = (1 - time / duration) * 100
      setChartPercent(percent)
   }, [duration, time])

   useEffect(() => {
      calculatePercentage()
   }, [calculatePercentage])

   const timeTicking = useCallback(() => {
      if (time <= 0) {
         onTimeUp()
      } else {
         setTime((prevTime) => prevTime - 0.1)
      }
   }, [time, onTimeUp])

   useEffect(() => {
      const timer = setInterval(() => {
         timeTicking()
      }, 100)

      return () => {
         clearInterval(timer)
      }
   }, [timeTicking])

   return {
      time,
      chartPercent,
   }
}
