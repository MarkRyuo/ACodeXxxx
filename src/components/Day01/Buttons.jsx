import PropTypes from "prop-types";

function Buttons({button}) {


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
