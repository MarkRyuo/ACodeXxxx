import { useState } from "react";

function Buttons() {

  const [button] = useState ([
    {id: 1, name: 'Subscribe', path: ''}
  ])

  return (
    <>
      {button.map((btn) => ((
        <button key={btn.id} type="button" style>
          {btn.name}
        </button>
      )))}
    </>
  )
}

export default Buttons ;
