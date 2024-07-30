/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const ColorContrastChecker = ({ textColor, backgroundColor }) => {
    const [contrastRatio, setContrastRatio] = useState(0);
    const [isPassingAA, setIsPassingAA] = useState(false);
    const [isPassingAAA, setIsPassingAAA] = useState(false);

    const calculateLuminance = (color) => {
        const rgb = color.substring(1);
        const r = parseInt(rgb.substr(0,2),16) / 255;
        const g = parseInt(rgb.substr(2,2),16) / 255;
        const b = parseInt(rgb.substr(4,2),16) / 255;
        
        const luminance = 0.2126 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4))
                        + 0.7152 * (g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4))
                        + 0.0722 * (b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4));
        
        return luminance;
    };

    const calculateContrastRatio = (color1, color2) => {
        const luminance1 = calculateLuminance(color1);
        const luminance2 = calculateLuminance(color2);
        
        const ratio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
        return ratio.toFixed(2);
    };

    useEffect(() => {
        const ratio = calculateContrastRatio(textColor, backgroundColor);
        setContrastRatio(ratio);
        setIsPassingAA(ratio >= 4.5);
        setIsPassingAAA(ratio >= 7);
    }, [textColor, backgroundColor]);

    return (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Color Contrast</h3>
            <p>Contrast Ratio: {contrastRatio}:1</p>
            <p className={isPassingAA ? "text-green-600" : "text-red-600"}>
                {isPassingAA ? "Passes" : "Fails"} WCAG AA
            </p>
            <p className={isPassingAAA ? "text-green-600" : "text-red-600"}>
                {isPassingAAA ? "Passes" : "Fails"} WCAG AAA
            </p>
        </div>
    );
};

export default ColorContrastChecker;