/**
 * Created by Zarana Patel on 8/18/22.
 */
import React from "react"
import Link from "./Link"

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accodion
      </Link>
      <Link href="/list" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        DropDown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  )
}

export default Header
