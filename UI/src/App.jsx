import { createSignal } from "solid-js";
import Chat from "./chat/chat"
import Login from "./login/login"

function App() {
    let [user, setUser] = createSignal("");
    return (
        <main>
            {user()!=="" ? <Chat user={user}/> : <Login setUser={setUser}/>}
        </main>
    )
}

export default App
