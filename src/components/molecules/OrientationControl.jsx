/* eslint-disable react/prop-types */
import { TbAspectRatio, TbCrop11 } from "react-icons/tb";

const OrientationControl = ({ orientation, updateCardConfig }) => {
    const handleOrientationChange = (newOrientation) => {
        updateCardConfig({ orientation: newOrientation });
    };

    return (
        <div className="p-4 border-b-2 border-blue-900">
            <label className="text-lg font-bold">
                Orientation
            </label>
            <div className="flex gap-3 mt-2">
                <button
                    onClick={() => handleOrientationChange("portrait")}
                    className={`p-2 border rounded ${
                        orientation === "portrait"
                            ? "bg-blue-900 text-white"
                            : "bg-slate-300"
                    }`}
                    title="Portrait"
                >
                    <TbAspectRatio className="rotate-90" />
                </button>
                
                <button
                    onClick={() => handleOrientationChange("landscape")}
                    className={`p-2 border rounded ${
                        orientation === "landscape"
                            ? "bg-blue-900 text-white"
                            : "bg-slate-300"
                    }`}
                    title="Landscape"
                >
                    <TbAspectRatio />
                </button>
                <button
                    onClick={() => handleOrientationChange("square")}
                    className={`p-2 border rounded ${
                        orientation === "square"
                            ? "bg-blue-900 text-white"
                            : "bg-slate-300"
                    }`}
                    title="Square"
                >
                    <TbCrop11 />
                </button>
            </div>
        </div>
    );
};

export default OrientationControl;
