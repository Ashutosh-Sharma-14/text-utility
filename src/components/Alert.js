import React from 'react'

function Alert(props) {
  return (
    // props.alert && means that if props.alert return a null value the alert will not show else it will appear
    // the boolean value of the statements will be returned by the and operation. This happens because all the jsx will be converted to javascript calls

    <div style={{height: '40px'}}>
      {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{transition: "1sec"}}>
        <strong>{props.alert.type}</strong>: {props.alert.msg}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>}
    </div>
  )
}

export default Alert
