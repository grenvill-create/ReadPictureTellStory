import React, { useState } from 'react';
import './SceneExplorer.css';

export default function SceneExplorer({ scene, onBack, speakText }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  if (!scene) return null;

  const handleHotspotClick = (hotspot) => {
    setActiveHotspot(hotspot.id);
    speakText(hotspot.name, "zh-CN");
    setTimeout(() => speakText(hotspot.nameEn, "en-US"), 1200);
  };

  return (
    <div className="scene-explorer-container">
      <div className="scene-header">
        <button onClick={onBack} className="back-link bounce-hover">? 返回主页</button>
        <h2 className="scene-title">{scene.title}</h2>
      </div>

      <div className="scene-canvas-wrapper">
        <img 
          src={scene.image} 
          alt={scene.title} 
          className="scene-image" 
        />
        
        {scene.hotspots.map(hotspot => (
          <div
            key={hotspot.id}
            className={\scene-hotspot \\}
            style={{
              left: \\%\,
              top: \\%\,
              width: \\%\,
              paddingTop: \\%\
            }}
            onClick={() => handleHotspotClick(hotspot)}
          >
            <div className="scene-hotspot-pulse"></div>
          </div>
        ))}

        {activeHotspot && (
          (() => {
            const hotspot = scene.hotspots.find(h => h.id === activeHotspot);
            return (
              <div 
                className="scene-vocab-bubble"
                style={{
                  left: \\%\,
                  top: \\%\
                }}
                onClick={() => handleHotspotClick(hotspot)}
              >
                <span className="vocab-zh">{hotspot.name}</span>
                <span className="vocab-en">{hotspot.nameEn}</span>
                <span className="vocab-speaker-icon">??</span>
              </div>
            );
          })()
        )}
      </div>
      
      <div className="scene-instructions">
        ?? 在这幅巨大的画卷里寻找隐藏的物品，点击它们听听中英文发音吧！
      </div>
    </div>
  );
}
