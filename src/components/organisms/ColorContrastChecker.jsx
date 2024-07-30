/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const ColorContrastChecker = ({ textColor, backgroundColor }) => {
    const [contrastRatio, setContrastRatio] = useState(0);
    const [contrastRating, setContrastRating] = useState('');

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

    const getRating = (ratio) => {
        if (ratio < 2) return 'Very Poor';
        if (ratio < 3) return 'Poor';
        if (ratio < 4.5) return 'Good';
        if (ratio < 7) return 'Very Good';
        return 'Excellent';
    };

    const getRatingColor = (rating) => {
        switch(rating) {
            case 'Very Poor': return 'text-red-600';
            case 'Poor': return 'text-orange-500';
            case 'Good': return 'text-yellow-500';
            case 'Very Good': return 'text-green-500';
            case 'Excellent': return 'text-blue-600';
            default: return '';
        }
    };

    useEffect(() => {
        const ratio = calculateContrastRatio(textColor, backgroundColor);
        setContrastRatio(ratio);
        setContrastRating(getRating(ratio));
    }, [textColor, backgroundColor]);

    return (
        <div className="mt-4 px-8 py-4 bg-gray-100">
            <h3 className="text-lg font-semibold mb-2">Color Contrast</h3>
            <div className='flex items-end gap-2'>
                <p className=''>Contrast Ratio: <span className='font-bold text-xl mb-2'>{contrastRatio}:1</span></p>
                |
                <p className={`font-bold ${getRatingColor(contrastRating)}`}>
                    {contrastRating}
                </p>
            </div>
            <p className="text-sm mt-2">
                (WCAG AA: <span className='font-bold'>{contrastRatio >= 4.5 ? 'Pass' : 'Fail'}</span>, 
                WCAG AAA: <span className='font-bold'>{contrastRatio >= 7 ? 'Pass' : 'Fail'}</span>)
            </p>
        </div>
    );
};

export default ColorContrastChecker;