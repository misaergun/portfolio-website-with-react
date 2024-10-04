const Footer = () => {
    return (
        <div>
            {/* Video part */}
            <div className="flex flex-col items-center mb-6">
                <p className="mb-4 text-center text-neutral-400">
                    Finally, to brighten your day, I added a cat video. Thank you for visiting my website!
                </p>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/7Nn7NZI_LN4?autoplay=0" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>

            {/* Footer part */}
            <footer className="bg-neutral-950 text-neutral-300 py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Müberra Nisa Ergün. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
