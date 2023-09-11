import "./login.css"

function Login(args) {
    let inp;

    function setname(){
        if (inp.value === "") {
            alert("name is empty")
        }else{
            args.setUser(inp.value);
        }
    }
    return (
        <div class="login">
            <input type="text" placeholder="name" ref={inp}/>
            <button type="button" onClick={setname}></button>
        </div>
    );
}
    export default Login;