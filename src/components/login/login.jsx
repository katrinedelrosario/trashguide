import styles from './login.module.scss'

export const Login = (onLogin) => {

    return (
        <div className={styles.loginForm}>
        <h2>Login</h2>
        <form onSubmit={onLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
      </div>
    )
}