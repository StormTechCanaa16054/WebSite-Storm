import { useState, useEffect } from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface PageContent {
    title: string;
    content: string;
    pdfLink: string;
    formLink: string;
}

type PageKey = "FIRST LEGO LEAGUE" | "FIRST TECH CHALLENGE" | "FIRST ROBOTICS COMPETITION" | "FIRST GLOBAL CHALLENGE";

const pages: Record<PageKey, PageContent> = {
    "FIRST LEGO LEAGUE": {
        title: "FIRST LEGO LEAGUE",
        content: "Recursos e informações sobre a FLL...",
        pdfLink: "https://ftc-resources.firstinspires.org/file/ftc/game/manual",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSd36rNqdWZLRHnThmz7uEFLnuxEz00_zhqINhjQmdBg9Mt38Q/viewform?usp=sf_link",
    },
    "FIRST TECH CHALLENGE": {
        title: "FIRST TECH CHALLENGE",
        content: "Recursos e informações sobre a FTC...",
        pdfLink: "https://ftc-resources.firstinspires.org/file/ftc/game/manual",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeaw439acFn_tR9RyCqh26qQoNlkCM9PHzKIPhuTSII8VCybA/viewform?usp=sf_link",
    },
    "FIRST ROBOTICS COMPETITION": {
        title: "FIRST ROBOTICS COMPETITION",
        content: "Recursos e informações sobre a FRC...",
        pdfLink: "https://ftc-resources.firstinspires.org/file/ftc/game/manual",
        formLink: "https://forms.google.com/example3",
    },
    "FIRST GLOBAL CHALLENGE": {
        title: "FIRST GLOBAL CHALLENGE",
        content: "Recursos e informações sobre a FGC...",
        pdfLink: "https://ftc-resources.firstinspires.org/file/ftc/game/manual",
        formLink: "https://forms.google.com/example4",
    },
};

const videoLinks = [
    "https://www.youtube.com/embed/9yqWcRT4wTI?si=mpfp1pJANwVsGHQY",
    "https://www.youtube.com/embed/RP--GmNYCy8?si=JZbTyKtia0KNGR-i",
    "https://www.youtube.com/embed/zSTSgdeaSRM?si=crASnxBNw3C4hSZt",
    "https://www.youtube.com/embed/_uZAr-cmpdo?si=j5qpXL56EhVIW9HA",
    "https://www.youtube.com/embed/CrGKU6ItORI?si=nPelQ0bk06IhmLtZ",
];

const ResourcePage = () => {
    const [activePage, setActivePage] = useState<PageKey>("FIRST LEGO LEAGUE");
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 640) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(2);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen bg-roxo text-white flex flex-col items-center justify-center p-6">
            <div className="bg-white text-roxo w-3/5 p-8 rounded-lg shadow-lg flex flex-col items-center">
                <div className="flex space-x-4 mb-6">
                    {(Object.keys(pages) as Array<keyof typeof pages>).map((key) => (
                        <button
                            key={key}
                            className={clsx(
                                "px-6 py-3 rounded-lg font-bold transition duration-300",
                                activePage === key ? "bg-roxo text-white" : "bg-purple-400 hover:bg-purple-600"
                            )}
                            onClick={() => setActivePage(key as PageKey)}
                        >
                            {key}
                        </button>
                    ))}
                </div>

                <div className="text-center w-full p-6 border rounded-lg bg-white">
                    <h1 className="text-2xl font-extrabold mb-4">{pages[activePage].title}</h1>
                    <p className="text-lg">{pages[activePage].content}</p>
                    <a
                        href={pages[activePage].pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-roxo underline block mb-1 mt-2 font-bold"
                    >
                        Acesse o documento oficial
                    </a>
                    <a
                        href={pages[activePage].formLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-roxo underline font-bold"
                    >
                        Acesse o nosso eBook de suporte à competição
                    </a>
                </div>
            </div>
            <div className="bg-white text-roxo w-4/5 p-8 rounded-lg shadow-lg flex flex-col items-center mt-6">
                <h2 className="text-3xl font-extrabold mb-4">Fala Tempestade</h2>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={slidesPerView}
                    className="w-full"
                    autoplay={{ delay: 3200, disableOnInteraction: false }}
                >
                    {videoLinks.map((video, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <iframe
                                className="rounded-lg"
                                width="100%"
                                height="400"
                                src={video}
                                title={`Vídeo ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ResourcePage;
