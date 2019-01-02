import React from 'react'
import { Button } from 'antd'
import { Helmet } from 'react-helmet'
import styles from './styles.scss'
import LoginForm from './LoginForm'

class LoginBeta extends React.Component {
  state = {
    fullScreen: false,
    backgroundNumber: 1,
  }

  setFullscreen = () => {
    const { fullScreen } = this.state
    this.setState({
      fullScreen: !fullScreen,
    })
  }

  changeBackground = () => {

    let { backgroundNumber } = this.state
    if (backgroundNumber === 5) {
      backgroundNumber = 1
    } else {
      backgroundNumber += 1
    }
    this.setState({
      backgroundNumber,
    })
  }

  render() {
    const { fullScreen, backgroundNumber } = this.state
    setTimeout(() => this.changeBackground(), 5000);

    return (
     
        <section
          className={`${styles.login} ${fullScreen ? styles.fullscreen : styles.windowed}`}
          style={{ backgroundImage: `url('resources/images/photos/${backgroundNumber}.jpeg')` }}
        >
         
          <div className={styles.content}>
            <div className={styles.promo}>
              <h1 className="mb-3">Welcome to Monobread</h1>
              <h1> Starter template</h1>
              <p>
                สำหรับการสร้างโปรเจคใหม่ของบริษัท โมโนเบรด ดิจิตอล โซลูชั่น จำกัด 
              </p>
            </div>
            <div className={styles.formWrapper}>
              <div className={styles.form}>
                <p className={styles.formTitle}>Please log in</p>
                <LoginForm />
              </div>
              <div className={styles.sidebar}>
                <p className={styles.sidebarTitle}>Agile Dev Meetup</p>
                <p className={styles.sidebarSubTitle}>August 2018</p>
                <div className={styles.sidebarContent}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.
                  </p>
                  <p>Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.</p>
                </div>
                <div className={styles.sidebarFooter}>
                  <span>
                    <i className="icmn-location mr-3" />
                    New York, USA
                  </span>
                </div>
              </div>
            </div>
          </div>

        </section>
      
    )
  }
}

export default LoginBeta
