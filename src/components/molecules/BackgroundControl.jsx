/* eslint-disable react/prop-types */
import { FaFill, FaImage, FaUpload } from 'react-icons/fa';

const BackgroundControl = ({ bgColor, bgImage, updateCardConfig }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateCardConfig({ bgImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-8 mt-auto bg-gray-100 border-t border-gray-300">
      <h3 className="text-lg font-semibold mb-2">Background</h3>

      <div className='flex gap-2 justify-between items-center'>
        <div className="w-1/3">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            <FaFill className="inline mr-2" /> Card Background
          </label>
          <div className="flex items-center">
            <input 
              type="color"
              className="w-10 h-10 rounded-l"
              value={bgColor}
              onChange={(e) => updateCardConfig({ bgColor: e.target.value })}
            />
            <input 
              type="text"
              className="p-2 border-t border-b border-r rounded-r"
              value={bgColor}
              onChange={(e) => updateCardConfig({ bgColor: e.target.value })}
            />
          </div>
        </div>
  
        <div className="w-1/3">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            <FaImage className="inline mr-2" /> Background Image URL
          </label>
          <input 
            type="text"
            className="w-full p-2 border rounded"
            value={bgImage}
            onChange={(e) => updateCardConfig({ bgImage: e.target.value })}
            placeholder="Enter image URL"
          />
        </div>
  
        <div className='w-1/3'>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            <FaUpload className="inline mr-2" /> Upload Background
          </label>
          <input 
            type="file"
            className="w-full p-2 border rounded"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundControl;