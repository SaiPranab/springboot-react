import logo from "../../assets/e_logo.png"

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary-subtle">
            <div class="container-fluid">
                <img src={logo} alt="" height="50" width="auto"/>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                </div>
            </div>
            </nav>
        </>
    )
}

export default Header;