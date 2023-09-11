import "./chat.css";
import Emojies_list from "./type/emoji_list/emoji_list";
import Type from "./type/type";
import { io } from "socket.io-client"
import { createSignal, onCleanup, onMount, For } from "solid-js"

function Chat(args) {
    const [m, Setm] = createSignal([]);
    const socket = io("");
    let sender;

    function sendmessage() {
        let data = JSON.stringify({ "sender": sender.innerText, "message": document.getElementById("typebox").value })
        try {
            socket.emit("message", data);
        } catch {
            alert("Error connecting to server")
        }
        document.getElementById("typebox").value = "";
    }
    socket.on("message", (message) => {

        Setm([...m(), JSON.parse(message)])
    })

    onMount(()=>{
        socket.send(JSON.stringify({ "sender": sender.innerText, "message": "Joined"}))
    })

    onCleanup(() => {
        socket.send("Left")
        socket.close()
    })
    return (
        <>
            <div className="chat-body">
                <Emojies_list/>
                <header><h1 ref={sender} id="username">{args.user}</h1></header>
                <main>
                    <For each={m()}>{(me, i) =>
                        <div style={args.user()===me.sender && "align-self: self-end;"} class={me.message==="Joined" && "join"}>
                            <h3>{me.sender}</h3>
                            {me.message.includes("./static") ? <img src={me.message.replace(".", "")} alt="Image" /> : <p>{me.message}</p>}
                        </div>
                    }</For>
                </main>
                <footer>
                    <Type sendmessage={sendmessage} />
                </footer>
            </div>
        </>
    )
}

export default Chat;