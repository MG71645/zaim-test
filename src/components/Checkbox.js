import React from 'react'
import classNames from 'classnames'

// Styles
import './Checkbox.css'

const Checkbox = props => (
  <div className={classNames('checkbox', props.className, {checked: props.checked})} onClick={props.onClick}/>
)

export default Checkbox
