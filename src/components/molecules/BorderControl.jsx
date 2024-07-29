/* eslint-disable react/prop-types */
import { FaBorderStyle, FaArrowsAltH, FaPalette } from "react-icons/fa";

const BorderControl = ({
    border,
    borderWidth,
    borderColor,
    borderRadius,
    updateCardConfig
}) => {
    return (
        <div className="p-4 border-b-2 border-blue-900">
            <h3 className="text-lg font-bold mb-2">Border</h3>

            <div className="flex items-center justify-between gap-10">
                <div className="mb-4 w-3/4">
                    <label className="flex items-center gap-1 mb-2 text-sm font-medium text-gray-700">
                        <FaBorderStyle /> Style
                    </label>
                    <select
                        className="w-full p-2 border rounded"
                        value={border}
                        onChange={(e) =>
                            updateCardConfig({ border: e.target.value })
                        }
                    >
                        <option value="no-border">No Border</option>
                        <option value="full-border">Full Border</option>
                        <option value="left-border">Left Border</option>
                        <option value="right-border">Right Border</option>
                        <option value="top-border">Top Border</option>
                        <option value="bottom-border">Bottom Border</option>
                    </select>
                </div>

                <div className="mb-4 w-1/2">
                    <label className="flex items-center gap-1 mb-2 text-sm font-medium text-gray-700">
                        <FaArrowsAltH /> Width
                    </label>
                    <div className="flex items-center">
                        <button
                            className="px-2 py-1 bg-slate-300 rounded-l w-8 h-10 font-bold"
                            onClick={() =>
                                updateCardConfig({
                                    borderWidth: Math.max(0, borderWidth - 1)
                                })
                            }
                        >
                            -
                        </button>
                        <input
                            type="number"
                            className="no-spinner w-10 h-10 text-center border-t border-b"
                            value={borderWidth}
                            onChange={(e) =>
                                updateCardConfig({
                                    borderWidth: parseInt(e.target.value) || 0
                                })
                            }
                            min="0"
                            max="10"
                        />
                        <button
                            className="px-2 py-1 bg-slate-300 rounded-r w-8 h-10 font-bold"
                            onClick={() =>
                                updateCardConfig({
                                    borderWidth: Math.min(10, borderWidth + 1)
                                })
                            }
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between gap-12">
                <div className="w-3/4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Border Radius: {borderRadius}px
                    </label>
                    <input
                        type="range"
                        className="w-full h-2 bg-slate-400 rounded-lg appearance-none cursor-pointer"
                        min="0"
                        max="50"
                        step="2"
                        value={borderRadius}
                        onChange={(e) =>
                            updateCardConfig({
                                borderRadius: parseInt(e.target.value)
                            })
                        }
                    />
                </div>
    
                <div className="mb-4 w-1/2">
                    <label className="gap-1 mb-2 text-sm font-medium text-gray-700 flex items-center">
                        <FaPalette /> Color
                    </label>
                    <input
                        type="color"
                        className="w-12 h-12 rounded-full border-none appearance-none bg-transparent"
                        value={borderColor}
                        onChange={(e) =>
                            updateCardConfig({ borderColor: e.target.value })
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default BorderControl;
