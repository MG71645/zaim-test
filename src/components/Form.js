import React from 'react'
import classNames from 'classnames'

// Components
import Field from './Field'
import Checkbox from './Checkbox'

// Styles
import './Form.css'

class Form extends React.Component {
  state = {
    options: {
      increase: true,
      agree: true
    }
  }

  handleOptionClick = key => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        [key]: !prevState.options[key]
      }
    }))
  }

  increase = () => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        increase: true
      }
    }))
  }

  render() {
    return (
      <form className="form">
        <div className="form__text">
          <div className="mobile-hidden">
            Вы заполняете заявку на получение микрозайма.<br/>
            Заявка будет обработана МФО [ название }.<br/>
            <br/>
          </div>
          Внимательно заполните все поля.<br/>
          Предоставленные вами сведения могут использоваться при оформлении документов.
        </div>
        <div className="form__label">ЛИЧНЫЕ ДАННЫЕ</div>
        <div className="form__grid">
          <div className="col col-12 col-md-4">
            <Field type="text" label="Фамилия" placeholder="Иванов" onEmpty="Напишите свою фамилию" onError="Используйте кириллицу!" required/>
          </div>
          <div className="col col-12 col-md-4">
            <Field type="text" label="Имя" placeholder="Иван" onEmpty="Напишите свое имя" onError="Используйте кириллицу!" required/>
          </div>
          <div className="col col-12 col-md-4">
            <Field type="text" label="Отчество" placeholder="Иванович" onEmpty="Напишите свое отчество" onError="Используйте кириллицу!" required/>
          </div>
          <div className="col col-12 col-md-4">
            <Field type="date" label="Дата рождения" placeholder="31.12.1999" minDate={new Date('01.01.1946')} maxDate={(new Date()).setFullYear((new Date()).getFullYear() - 18)} onEmpty="Введите дату рождения" onError="Некорректная дата" required/>
          </div>
          <div className="col col-12 col-md-4">
            <Field type="phone" label="Мобильный телефон" placeholder="+7(000)000-00-00" onEmpty="Введите номер телефона" onError="Некорректный номер телефона" required/>
          </div>
          <div className="col col-12 col-md-4">
            <Field type="email" label="Электронный адрес" placeholder="email@mailbox.ru" onEmpty="Введите свой email" onError="Некорректный email" required/>
          </div>
          <div className="col col-12 col-md-4">
            <Field type="masked" label="СНИЛС" placeholder="000-000-000-00" mask="999-999-999-99" onEmpty="Введите СНИЛС" onError="Введите корректный номер" required/>
          </div>
          <div className="col col-12 col-md-8">
            <Field type="text" label="Город проживания" placeholder="Санкт-Петербург" onEmpty="Введите город проживания" onError="Используйте кириллицу" required/>
          </div>
        </div>
        <div className="form__label">ПАСПОРТ</div>
        <div className="form__grid">
          <div className="col col-5 col-md-2">
            <Field type="masked" label="Серия" placeholder="00 00" mask="99 99" required/>
          </div>
          <div className="col col-7 col-md-2">
            <Field type="masked" label="Номер" placeholder="000000" mask="999999" required/>
          </div>
          <div className="col col-12 col-md-4">
            <Field type="date" label="Дата выдачи" placeholder="31.12.1999" minDate={new Date('01.01.1997')} maxDate={new Date()} onEmpty="Введите дату выдачи паспорта" onError="Некорректная дата" required/>
          </div>
          <div className="col col-12 col-md-4">
            <Field type="text" label="Место рождения" placeholder="Москва" onEmpty="Введите место рождения" onError="Используйте кириллицу" required/>
          </div>
          <div className="col col-12 col-md-4">
            <Field type="masked" label="Код подразделения" placeholder="000-000" mask="999-999" onEmpty="Введите код подразделения" onError="Некорректный код" required/>
          </div>
          <div className="col col-12 col-md-8">
            <Field type="text" label="Кем выдан" placeholder="Отделение УФМС России по Московской ..." onEmpty="Введите название организации, выдавшей паспорт" onError="Введите название организации, выдавшей паспорт" required/>
          </div>
        </div>
        <div className="form__label">АДРЕС РЕГИСТРАЦИИ</div>
        <div className="form__grid">
          <div className="col col-12 col-md-4">
            <Field type="text" label="Регион регистрации" placeholder="Московская область" onEmpty="Введите регион регистрации" onError="Используйте кириллицу" required/>
          </div>
          <div className="col col-12 col-md-8">
            <Field type="text" label="Город регистрации" placeholder="Армань" onEmpty="Введите город регистрации" onError="Используйте кириллицу" required/>
          </div>
          <div className="col col-12 col-md-8">
            <Field type="text" label="Улица регистрации" placeholder="пер, Арманский" onEmpty="Введите улицу регистрации" onError="Используйте кириллицу" required/>
          </div>
          <div className="col col-6 col-md-2">
            <Field label="Дом" placeholder="1" required/>
          </div>
          <div className="col col-6 col-md-2">
            <Field label="Квартира"/>
          </div>
        </div>
        <div className="form__controls">
          <div className="form__increment form__option option">
            <Checkbox className="option__checkbox" checked={this.state.options.increase} onClick={() => this.handleOptionClick('increase')}/>
            <span className="option__label">
              <span className="option__strong">Автоматически увеличить шанс на одобрение заявки, </span>
              получив ответ от нескольких МФО.
            </span>
          </div>
          <div className={classNames('increment', {'increment-hidden': this.state.options.increase})}>
            <div className="increment__text increment__header">
              Повысьте вероятность <span className="black">быстрого получения выгодного займа!</span>
              <br/>
              <br/>
            </div>
            <div className="increment__text">Как это работает:<br/><br/></div>
            <div className="increment__text">
              Вы подаете единую заявку на заем, рассматриваете предложения от нескольких МФО,
              выбираете наиболее выгодное — и получаете деньги в удобной форме.
              <br/>
              <br/>
            </div>
            <div className="increment__text increment__button" onClick={this.increase}>Повысить шанс</div>
          </div>
          <div className="form__send">
            <div className="form__agreement form__option option">
              <Checkbox className="option__checkbox" checked={this.state.options.agree} onClick={() => this.handleOptionClick('agree')}/>
              <span className="option__label">
                {this.state.options.agree ? null :
                  <span className="option__error">
                    Мы не можем отправить вашу заявку, пока вы не дадите согласие передать свои личные данные на обработку.
                  </span>
                }
                Отправляя форму, я даю свое согласие на обработку моих персональных данных,
                в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных»,
                на условиях и для целей, определенных в <span className="link">Согласии на обработку персональных данных</span>
              </span>
            </div>
            <button className="form__button">Отправить</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Form