/* eslint-disable react/prop-types */
import { FaHeading, FaParagraph, FaFont, FaFillDrip, FaArrowsAltV, FaAlignLeft, FaExpand } from 'react-icons/fa';

const TextControl = ({ title, paragraph, textColor, bgTextColor, textPosition, textAlign, padding, updateCardConfig }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Text</h3>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          <FaHeading className="inline mr-2" /> Title
        </label>
        <input 
          type="text"
          className="w-full p-2 border rounded"
          maxLength="40"
          value={title}
          onChange={(e) => updateCardConfig({ title: e.target.value })}
        />
        <span className="text-sm text-gray-500 block mt-2">{title.length}/40</span>
      </div>

      <div className="mb-4 ">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          <FaParagraph className="inline mr-2" /> Paragraph
        </label>
        <textarea 
          className="w-full p-2 border rounded"
          rows="3"
          maxLength="250"
          value={paragraph}
          onChange={(e) => updateCardConfig({ paragraph: e.target.value })}
        />
        <span className="text-sm text-gray-500">{paragraph.length}/250</span>
      </div>

      <div className='flex items-center justify-between gap-4'>
        <div className="mb-4 flex-1">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            <FaFont className="inline mr-2" /> Text Color
          </label>
          <input 
            type="color"
            className="w-28 h-10 appearance-none bg-transparent"
            value={textColor}
            onChange={(e) => updateCardConfig({ textColor: e.target.value })}
          />
        </div>
  
        <div className="mb-4 flex-1">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            <FaFillDrip className="inline mr-2" /> Text Background
          </label>
          <select 
            className="w-full p-2 border rounded"
            value={bgTextColor}
            onChange={(e) => updateCardConfig({ bgTextColor: e.target.value })}
          >
            <option value="none">None</option>
            <option value="#FFFFFF">White</option>
            <option value="#000000">Black</option>
            <option value="#FF0000">Red</option>
            <option value="#00FF00">Green</option>
            <option value="#0000FF">Blue</option>
          </select>
        </div>
      </div>

      <div className='flex items-center justify-between gap-2'>
        <div >
          <label className="block mb-2 text-sm font-medium text-gray-700">
            <FaArrowsAltV className="inline mr-2" /> Position
          </label>
          <select 
            className="w-full p-2 border rounded"
            value={textPosition}
            onChange={(e) => updateCardConfig({ textPosition: e.target.value })}
          >
            <option value="flex-start">Top</option>
            <option value="center">Center</option>
            <option value="flex-end">Bottom</option>
          </select>
        </div>
  
        <div >
          <label className="block mb-2 text-sm font-medium text-gray-700">
            <FaAlignLeft className="inline mr-2" /> Align
          </label>
          <select 
            className="w-full p-2 border rounded"
            value={textAlign}
            onChange={(e) => updateCardConfig({ textAlign: e.target.value })}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
  
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            <FaExpand className="inline mr-2" /> Padding
          </label>
          <div className="flex items-center">
            <button 
              className="px-2 py-1 bg-gray-300 rounded-l w-8 h-10 font-bold"
              onClick={() => updateCardConfig({ padding: Math.max(0, padding - 1) })}
            >
              -
            </button>
            <input 
              type="number" 
              className="no-spinner w-10 h-10 text-center border-t border-b"
              value={padding}
              onChange={(e) => updateCardConfig({ padding: parseInt(e.target.value) || 0 })}
              min="0"
              max="20"
            />
            <button 
              className="px-2 py-1 bg-gray-300 rounded-r w-8 h-10 font-bold"
              onClick={() => updateCardConfig({ padding: Math.min(20, padding + 1) })}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextControl;