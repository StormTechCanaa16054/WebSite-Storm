import Navbar from "../components/Navbar";

function ContatoPage() {
    return (
        <nav className="p-4">
            <div className="flex flex-col items-start gap-7">
                <h1 className="text-purple-700 text-8xl font-black ml-20">CONTATO:</h1>
                <span className="text-white bg-purple-700 border-2 rounded-3xl border-purple-700 font-montserrat text-2xl px-4 py-2 ml-20">
                    entre em contato conosco!
                </span>
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeaw439acFn_tR9RyCqh26qQoNlkCM9PHzKIPhuTSII8VCybA/viewform?usp=pp_url" 
                    width="60%" 
                    height="650" 
                    className="rounded-lg mx-auto"
                    allowFullScreen
                >
                </iframe>
            </div>
        </nav>
    );
}

export default ContatoPage;
