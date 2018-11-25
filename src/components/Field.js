import React, {Component} from 'react'
import classNames from 'classnames'
import validator from 'validator'
import {isValidNumber} from 'libphonenumber-js'

// Components
import InputMask from 'react-input-mask'
import DatePicker from 'react-datepicker'

// Styles
import "react-datepicker/dist/react-datepicker.css"
import './Field.css'

class Field extends Component {
  state = {
    onEmpty: this.props.onEmpty || 'Заполните!',
    onError: this.props.onError || 'Ошибка!',
    edited: false,
    focused: false,
    value: this.props.value || '',
    error: ''
  }

  validate = () => {
    let error = ''

    if (this.state.value) {
      switch (this.props.type) {
        case 'email': {
          if (!validator.isEmail(this.state.value)) error = this.state.onError
          break
        }
        case 'date': {
          if (this.state.value < this.props.minDate || this.state.value > this.props.maxDate) error = this.state.onError
          break
        }
        case 'phone': {
          if (!isValidNumber(this.state.value)) error = this.state.onError
          break
        }
        case 'masked': {
          if (this.state.value.split(' ').length > this.props.mask.split(' ').length) error = this.state.onError
          break
        }
        case 'cyrillic': {
          const allowed = new RegExp('^[а-яёА-ЯЁ \-]+$')
          const required = new RegExp('^[а-яёА-ЯЁ]')
          if (!allowed.test(this.state.value) || this.state.value.search(required) === -1) error = this.state.onError
          break
        }
        default: break
      }
    } else if (this.props.required) {
      error = this.state.onEmpty
    }

    if (error) this.setState({error})
  }

  handleFocus = () => {
    console.log('focus')
    this.setState({focused: true})
  }

  handleBlur = () => {
    this.setState({focused: false})
    this.validate()
  }

  handleChange = value => {
    this.setState({
      value,
      edited: true,
      error: ''
    })
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.edited && this.props.required && nextState.value === '') {
      nextState.error = this.state.onEmpty
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.onChange && (prevState.edited !== this.state.edited || !prevState.error !== !this.state.error)) this.props.onChange(this.props.name, !this.state.error)
  }

  render() {
    const className = classNames('field', this.props.className, {
      'field-empty': !this.state.value,
      'field-focused': this.state.focused,
      'field-error': this.state.error
    })

    let input

    switch (this.props.type) {
      case 'phone': {
        input =
          <InputMask className="field__input"
          mask="+7(999)999-99-99"
          maskChar=" "
          value={this.state.value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={event => this.handleChange(event.target.value)}/>
        break
      }
      case 'date': {
        input =
          <div className="field__input">
            <DatePicker
            dateFormat="dd.MM.yyyy"
            minDate={this.props.minDate}
            maxDate={this.props.maxDate}
            selected={this.state.value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            customInput={
              <InputMask
              mask="99.99.9999"
              maskChar=" "
              value={this.state.value}/>
            }/>
          </div>
        break
      }
      case 'masked': {
        input =
          <InputMask className="field__input"
          mask={this.props.mask}
          maskChar=" "
          value={this.state.value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={event => this.handleChange(event.target.value)}/>
        break
      }
      default: {
        input =
          <input className="field__input"
          type={this.props.type}
          value={this.state.value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={event => this.handleChange(event.target.value)}/>
        break
      }
    }

    return (
      <div className={className}>
        <div className="field__label">{this.props.label}</div>
        {this.state.value || this.props.type === 'date' && this.state.focused ? null :
          <label className="field__placeholder">{this.props.placeholder}</label>
        }
        {input}
        {this.state.error ?
          <div className="field__error">{this.state.error}</div>
        : null}
      </div>
    )
  }
}

export default Field
