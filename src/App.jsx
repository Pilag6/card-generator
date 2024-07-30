import { useState, useEffect } from 'react';
import CardGenerator from './components/organisms/CardGenerator';
import Preview from './components/organisms/Preview';
import HistoryManager from './HistoryManager';

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

  const [historyManager, setHistoryManager] = useState(null);

  useEffect(() => {
    setHistoryManager(new HistoryManager(cardConfig));
  }, []);

  const updateCardConfig = (newConfig) => {
    setCardConfig(prevConfig => {
      const updatedConfig = { ...prevConfig, ...newConfig };
      historyManager.push(updatedConfig);
      return updatedConfig;
    });
  };

  const handleUndo = () => {
    const previousState = historyManager.undo();
    if (previousState) {
      setCardConfig(previousState);
    }
  };

  const handleRedo = () => {
    const nextState = historyManager.redo();
    if (nextState) {
      setCardConfig(nextState);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-lg">
      <div className="flex flex-wrap w-full">
        <CardGenerator 
          cardConfig={cardConfig} 
          updateCardConfig={updateCardConfig} 
          handleUndo={handleUndo}
          handleRedo={handleRedo}
          canUndo={historyManager && historyManager.canUndo()}
          canRedo={historyManager && historyManager.canRedo()}
        />
        <Preview cardConfig={cardConfig} updateCardConfig={updateCardConfig} />
      </div>
    </div>
  );
};

export default App;
