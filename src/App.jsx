import { useState } from 'react';
import CardGenerator from './components/organisms/CardGenerator';
import Preview from './components/organisms/Preview';

const App = () => {
  const [cardConfig, setCardConfig] = useState({
    orientation: "portrait",
    border: "full-border",
    borderWidth: 8,
    borderColor: "#3e63cc",
    borderRadius: 0,
    title: "Play the game",
    paragraph: "All you have to do is fall in love.",
    textColor: "#cbd5e1",
    bgTextColor: "none",
    padding: 4,
    bgColor: "#1e3a8a",
    bgImage: "",
    textPosition: "flex-end",
    textAlign: "left"
  });

  const updateCardConfig = (newConfig) => {
    setCardConfig({ ...cardConfig, ...newConfig });
  };

  return (
    <div className="flex flex-wrap w-full bg-white shadow-lg ">
      <CardGenerator cardConfig={cardConfig} updateCardConfig={updateCardConfig} />
      <Preview cardConfig={cardConfig} updateCardConfig={updateCardConfig} />
    </div>
  );
};

export default App;