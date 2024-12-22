import { useState } from "react";

function Buttons() {

  const [button] = useState ([
    {id: 1, name: 'Subscribe', color: 'red'},
    {id: 2, name: 'Button 2', color: 'blue'},
    {id: 3, name: 'Button 3', color: 'green'},
    {id: 4, name: 'Button 4', color: 'yellow'},
  ])

  return (
    <>
      {button.map((btn) => ((
        <button key={btn.id} type="button">
          {btn.name}
        </button>
      )))}
    </>
  )
}

export default Buttons ;
