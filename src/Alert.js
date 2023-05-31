import React from "react"

function Alert({alertMsgs=[]}) {
  return (
    <div className="Alert">
      {alertMsgs.map(msg => <p key={msg}>{msg}</p>)}
    </div>
  )
}

export default Alert