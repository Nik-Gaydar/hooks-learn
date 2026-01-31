import { useState, useEffect } from 'react'

const Timer = () => {
  const [second,  setSecond] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecond(second => second + 1)
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, []);

  return (
    <div className="timer">
      <h3>Вы находитесь здесь: {second} секунд</h3>
    </div>
  )
}

export default Timer