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

Buttons.propType = {
  button: PropTypes.array.isRequired
}

export default Buttons ;
