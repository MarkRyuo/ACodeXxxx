import { useState } from "react";

function Buttons({button}) {

  const [button] = useState ([
    {id: 1, name: 'Subscribe', path: '/'}
  ])

  return (
    <>
      {button.map((btn) => ((
        <button key={btn.id} type="button" onClick={btn.path}>
          {btn.name}
        </button>
      )))}
    </>
  )
}

export default Buttons ;
