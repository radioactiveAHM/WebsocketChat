import "./emojies.css"

function Emojies() {

    function on_off(){
        let display = document.getElementsByClassName("emoji_list")[0];
        if (display.style.display === "none" || display.style.display === ""){
            display.style.display = "block"
        }else{
            display.style.display = "none"
        }
    }

    return (
        <div className="emoji">
            <button onClick={on_off}>😀</button>
        </div>
    )
}

export default Emojies