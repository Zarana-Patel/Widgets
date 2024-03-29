/**
 * Created by Zarana Patel on 8/18/22.
 */
import React, { useState, useEffect } from "react"
import axios from "axios"

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("")
  const [debouncedText, setdebouncedText] = useState(text)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setdebouncedText(text)
    }, 500)
    return () => {
      clearTimeout(timerId)
    }
  }, [text])
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "GoogleAPI_Key",
          },
        }
      )
      setTranslated(data.data.translations[0].translatedText)
    }
    doTranslation()
  }, [language, debouncedText])

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
}
export default Convert
