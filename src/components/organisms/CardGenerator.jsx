/* eslint-disable react/prop-types */
import { FaUndo, FaRedo } from "react-icons/fa";
import OrientationControl from '../molecules/OrientationControl';
import BorderControl from '../molecules/BorderControl';
import TextControl from '../molecules/TextControl';
// import BackgroundControl from '../molecules/BackgroundControl';

const CardGenerator = ({ cardConfig, updateCardConfig, handleUndo, handleRedo, canUndo, canRedo }) => {
  return (
    <div className="w-96 bg-gray-100 border-r border-gray-300">
      <div className="flex justify-between items-center bg-[#3e63cc] text-white font-bold text-2xl p-5">
        <h2>Card Generator</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleUndo}
            disabled={!canUndo}
            title="Undo"
            className=" p-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500 cursor-pointer"
          >
            <FaUndo className="text-sm"/>
          </button>
          <button
            onClick={handleRedo}
            disabled={!canRedo}
            title="Redo"
            className="p-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500  cursor-pointer"
          >
            <FaRedo className="text-sm"/>
          </button>
        </div>
      </div>

      <OrientationControl 
        orientation={cardConfig.orientation} 
        updateCardConfig={updateCardConfig} 
      />

      <BorderControl 
        border={cardConfig.border}
        borderWidth={cardConfig.borderWidth}
        borderColor={cardConfig.borderColor}
        borderRadius={cardConfig.borderRadius}
        updateCardConfig={updateCardConfig}
      />
      <TextControl 
        title={cardConfig.title}
        paragraph={cardConfig.paragraph}
        textColor={cardConfig.textColor}
        bgTextColor={cardConfig.bgTextColor}
        textPosition={cardConfig.textPosition}
        textAlign={cardConfig.textAlign}
        padding={cardConfig.padding}
        updateCardConfig={updateCardConfig}
      />
      {/* <BackgroundControl 
        bgColor={cardConfig.bgColor}
        bgImage={cardConfig.bgImage}
        updateCardConfig={updateCardConfig}
      /> */}
    </div>
  );
};

export default CardGenerator;
