import './App.css'
import { Authenticator } from '@aws-amplify/ui-react'


function App() {
  return (
    <Authenticator socialProviders={['google']}>
      {({ signOut, user }) => (
        <>
          <div>
            <h1>{user?.username}!</h1>
            <p>認証されました</p>
            <button
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </Authenticator>
  )
}

export default App
