
import Messanger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const clientId = '1041874409062-v9hajhcjftg2191vrdh5h0ml3vctugal.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
