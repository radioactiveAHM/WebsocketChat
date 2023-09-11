import "./image.css"

function Image() {

    async function imagePick() {
        let input = document.createElement('input');
        input.setAttribute("name", "nigga")
        input.type = 'file';
        input.accept = "image/*"
        input.onchange = async ()=> {
            let formData = new FormData();
            formData.append(document.getElementById("username").innerText, input.files[0]);
            await fetch("/image", {
                method:"POST",
                body:formData
            })
        };
        input.click();
    }

    return (
        <div class="image" onClick={imagePick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="chocolate" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z"></path></svg>
        </div>
    )
}

export default Image;