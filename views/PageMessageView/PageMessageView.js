import s from './style.module.css'
import imgText from './img/Union.svg'
import logo from './img/logo.svg'

const MessageView = () => {
  return (
    <>
      <header className={s.container}>
        <div className={s.logo}>
          <img src={logo} alt="Kapusta" width="90" height="31" />
        </div>
      </header>
      <div className={s.container}>
        <div className={s.firstSection}>
          <div className={s.text}>
            <img className={s.imgText} src={imgText} alt="" />
            <h1 className={s.fontText}>SMART FINANSE</h1>
          </div>
          <div className={s.containerMessage}>
            <h1 className={s.textMessage}>
              Congratulations, your email has been successfully verified, go to
              the
              <a className={s.linkMessage} href="https://kapusta-fsd28.netlify.app">login</a>
              page in the phone book and enter your email and password.
            </h1>
          </div>
        </div>
      </div>
    </>
  )
};

export default MessageView;


