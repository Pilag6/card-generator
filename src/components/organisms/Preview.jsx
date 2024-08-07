/* eslint-disable react/prop-types */
import { useRef } from "react";
import html2canvas from "html2canvas";
import BackgroundControl from "@components/molecules/BackgroundControl.jsx";
import ColorContrastChecker from "./ColorContrastChecker";
import { VscGithub } from "react-icons/vsc";

const Preview = ({ cardConfig, updateCardConfig }) => {
    const cardRef = useRef(null);

    const cardStyle = {
        backgroundColor: cardConfig.bgColor,
        backgroundImage: cardConfig.bgImage
            ? `url(${cardConfig.bgImage})`
            : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderColor: cardConfig.borderColor,
        borderWidth: `${cardConfig.borderWidth}px`,
        borderStyle: cardConfig.border === "no-border" ? "none" : "solid",
        borderRadius: `${cardConfig.borderRadius}px`,
        padding: `${cardConfig.padding * 4}px`
    };

    const textStyle = {
        color: cardConfig.textColor,
        backgroundColor:
            cardConfig.bgTextColor === "none"
                ? "transparent"
                : cardConfig.bgTextColor
    };

    const textBlockStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: cardConfig.textPosition,
        alignItems:
            cardConfig.textAlign === "left"
                ? "flex-start"
                : cardConfig.textAlign === "right"
                ? "flex-end"
                : "center",
        height: "100%"
    };

    const sanitizeFilename = (name) => {
        return name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    };

    const exportCard = (format) => {
        html2canvas(cardRef.current).then((canvas) => {
            let link = document.createElement("a");
            const sanitizedTitle = sanitizeFilename(cardConfig.title);
            if (format === "png") {
                link.href = canvas.toDataURL("image/png");
                link.download = `${sanitizedTitle}.png`;
            } else {
                link.href = canvas.toDataURL("image/jpeg", 0.9);
                link.download = `${sanitizedTitle}.jpg`;
            }
            link.click();
        });
    };

    return (
        <div className="w-[800px] bg-slate-300 flex justify-center flex-col items-center relative">
            <div className="absolute top-0 right-0" title="Github">
                <a
                    href="https://github.com/Pilag6/card-generator"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg width="80" height="80" viewBox="0 0 80 80">
                        <path d="M0 0 L80 0 L80 80 Z" fill="#24292e" />
                        <foreignObject width="80" height="80">
                            <div
                                xmlns="http://www.w3.org/1999/xhtml"
                                className="flex justify-center items-center h-full w-full"
                            >
                                <VscGithub
                                    className="text-white transform translate-x-4 -translate-y-4"
                                    size={32}
                                />
                            </div>
                        </foreignObject>
                    </svg>
                </a>
            </div>
            <p className="absolute top-10 right-5 rotate-45 text-[10px] text-blue-900 font-bold">Beta Version</p>
            <div
                ref={cardRef}
                className={`card ${cardConfig.orientation} ${cardConfig.border}`}
                style={cardStyle}
            >
                <div
                    className={`text-block ${cardConfig.textAlign}`}
                    style={textBlockStyle}
                >
                    <h2 className="card-title m-0 px-3 py-1" style={textStyle}>
                        {cardConfig.title}
                    </h2>
                    <p
                        className="card-paragraph m-0 px-3 py-1"
                        style={textStyle}
                    >
                        {cardConfig.paragraph}
                    </p>
                </div>
            </div>

            <div className="mt-4 flex gap-2">
                <button
                    onClick={() => exportCard("png")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Export as PNG
                </button>
                <button
                    onClick={() => exportCard("jpg")}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Export as JPG
                </button>
            </div>

            <div className="mt-auto">
                {cardConfig.bgImage ? null : (
                    <ColorContrastChecker
                        textColor={cardConfig.textColor}
                        backgroundColor={cardConfig.bgColor}
                    />
                )}

                <BackgroundControl
                    bgColor={cardConfig.bgColor}
                    bgImage={cardConfig.bgImage}
                    updateCardConfig={updateCardConfig}
                />
            </div>
        </div>
    );
};

export default Preview;
