import "./emoji_list.css";
import a from "./packs/a";
import b from "./packs/b";
import c from "./packs/c";
import d from "./packs/d";
import e from "./packs/e";

import {createSignal} from "solid-js"
function Emojies_list() {
    const [pack, setPack] = createSignal(a);
    function add_emoji(event){
        document.getElementById("typebox").value += event.target.innerText;
    }
    return (
        <div class="emoji_list">
            <div class="select">
                <button onClick={()=>{setPack(a)}}>😀</button>
                <button onClick={()=>{setPack(b)}}>🎈</button>
                <button onClick={()=>{setPack(c)}}>🍕</button>
                <button onClick={()=>{setPack(d)}}>🚗</button>
                <button onClick={()=>{setPack(e)}}>❤️</button>
            </div>
            <div class="pick">
                <For each={pack()}>{(me, i) =>
                    <div onClick={add_emoji}>
                        {me}
                    </div>
                }</For>
            </div>
        </div>
    )
}

export default Emojies_list