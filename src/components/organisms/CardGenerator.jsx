/* eslint-disable react/prop-types */

import OrientationControl from '../molecules/OrientationControl';
import BorderControl from '../molecules/BorderControl';
import TextControl from '../molecules/TextControl';
// import BackgroundControl from '../molecules/BackgroundControl';

const CardGenerator = ({ cardConfig, updateCardConfig }) => {
  return (
    <div className="w-96 bg-gray-100 border-r border-gray-300">
      <h2 className="bg-[#3e63cc] text-white font-bold text-2xl text-center p-5">Card Generator</h2>

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