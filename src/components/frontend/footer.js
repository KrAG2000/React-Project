import './footer.css';

function Footer() {
    return (
        <>
            <hr />
            <div className="grid">
                <div className="dropdowns">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        India
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="www.google.com">India</a>
                        <a className="dropdown-item" href="www.google.com">United Sates</a>
                        <a className="dropdown-item" href="www.google.com">Australia</a>
                        <a className="dropdown-item" href="www.google.com" selected>Europe</a>
                        <a className="dropdown-item" href="www.google.com">Brazil</a>
                    </div>
                </div>
                <div className="bottom-right">
                    <p className="footer" href="www.google.com">Privacy</p>
                    <p className="footer" href="www.google.com">Help</p>
                    <p className="footer" href="www.google.com">Terms</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
