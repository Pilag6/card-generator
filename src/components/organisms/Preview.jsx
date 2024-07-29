/* eslint-disable react/prop-types */

import BackgroundControl from "@components/molecules/BackgroundControl.jsx";

const Preview = ({ cardConfig, updateCardConfig }) => {
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

    return (
        <div className="w-[800px] bg-slate-300 flex justify-center flex-col items-center ">
            <div
                className={`card ${cardConfig.orientation} ${cardConfig.border}`}
                style={cardStyle}
            >
                <div
                    className={`text-block ${cardConfig.textAlign}`}
                    style={textBlockStyle}
                >
                    <h2 className="card-title m-0 p-1" style={textStyle}>
                        {cardConfig.title}
                    </h2>
                    <p className="card-paragraph m-0 p-1" style={textStyle}>
                        {cardConfig.paragraph}
                    </p>
                </div>
            </div>

            <BackgroundControl
                bgColor={cardConfig.bgColor}
                bgImage={cardConfig.bgImage}
                updateCardConfig={updateCardConfig}
            />
        </div>
    );
};

export default Preview;
