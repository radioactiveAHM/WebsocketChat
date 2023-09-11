import "./type.css";
import Emojies from "./emojies/emojies";
import Image from "./image/image";

function Type(args) {
    return(
        <div class="type">
            <input type="text" placeholder="Message" id="typebox"/>
            <Emojies/>
            <Image/>
            <button type="button" onClick={args.sendmessage}></button>
        </div>
    )
}

export default Type;