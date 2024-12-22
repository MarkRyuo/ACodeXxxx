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

Buttons.propTypes = {
  button: PropTypes.node.isRequired
}

export default Buttons ;
