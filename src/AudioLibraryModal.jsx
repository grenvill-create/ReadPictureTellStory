import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { storiesData } from './data/storiesData';
import './AudioLibraryModal.css';

// Format timestamp
const formatDateTime = (timestamp) => {
  const date = new Date(timestamp);
  const pad = (n) => n.toString().padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}_${pad(date.getHours())}-${pad(date.getMinutes())}`;
};

export default function AudioLibraryModal({ recordings, onClose }) {
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [activePlaybackUrl, setActivePlaybackUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Flatten recordings into a single array with metadata
  // recordings is { [storyId]: [ { blob, url, timestamp } ] }
  const allRecordings = [];
  Object.keys(recordings).forEach(storyId => {
    let title = "未知片段";
    if (storyId === "magnetic_board") {
      title = "磁力贴故事板";
    } else {
      const story = storiesData.find(s => s.id === storyId);
      if (story) {
        title = story.title.split("/")[0].trim();
      }
    }

    recordings[storyId].forEach((rec, idx) => {
      // Handle legacy records without timestamp
      const timestamp = rec.timestamp || Date.now();
      const fileName = `${title}_${formatDateTime(timestamp)}.webm`;
      
      allRecordings.push({
        id: `${storyId}_${idx}`,
        storyId,
        title,
        idx,
        url: rec.url,
        blob: rec.blob,
        timestamp,
        fileName
      });
    });
  });

  // Sort by timestamp descending
  allRecordings.sort((a, b) => b.timestamp - a.timestamp);

  const handleToggleSelect = (id) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedItems.size === allRecordings.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(allRecordings.map(r => r.id)));
    }
  };

  const handleTogglePlay = (url) => {
    if (activePlaybackUrl === url && isPlaying) {
      // Pause current
      const audioElements = document.getElementsByTagName('audio');
      for(let i=0; i<audioElements.length; i++) {
        audioElements[i].pause();
      }
      setIsPlaying(false);
      setActivePlaybackUrl(null);
    } else {
      // Play new
      const audioElements = document.getElementsByTagName('audio');
      for(let i=0; i<audioElements.length; i++) {
        audioElements[i].pause();
      }
      
      const audio = new Audio(url);
      audio.onended = () => {
        setIsPlaying(false);
        setActivePlaybackUrl(null);
      };
      audio.play();
      setActivePlaybackUrl(url);
      setIsPlaying(true);
    }
  };

  const downloadSingle = (item) => {
    const a = document.createElement('a');
    a.href = item.url;
    a.download = item.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const downloadSelectedAsZip = async () => {
    if (selectedItems.size === 0) return;
    
    const zip = new JSZip();
    const folder = zip.folder("宝贝录音合集");
    
    allRecordings.forEach(item => {
      if (selectedItems.has(item.id) && item.blob) {
        folder.file(item.fileName, item.blob);
      }
    });

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, `宝贝录音合集_${formatDateTime(Date.now())}.zip`);
  };

  return (
    <div className="modal-overlay">
      <div className="audio-library-modal bounce-in">
        <button className="close-btn bounce-hover" onClick={onClose}>✖</button>
        <h2 className="library-title">🎵 我的录音库</h2>
        <p className="library-subtitle">这里保存了宝贝所有的有声回忆，快来听听看吧！</p>
        
        {allRecordings.length === 0 ? (
          <div className="empty-state">
            还没录制过声音哦，快去故事里录一段吧！
          </div>
        ) : (
          <>
            <div className="library-actions">
              <label className="select-all-label">
                <input 
                  type="checkbox" 
                  checked={selectedItems.size === allRecordings.length && allRecordings.length > 0}
                  onChange={handleSelectAll}
                />
                全选
              </label>
              
              <button 
                className="batch-download-btn bounce-hover"
                disabled={selectedItems.size === 0}
                onClick={downloadSelectedAsZip}
              >
                📦 批量下载已选 ({selectedItems.size})
              </button>
            </div>

            <div className="recordings-list-scroll">
              {allRecordings.map(item => {
                const isSelected = selectedItems.has(item.id);
                return (
                  <div key={item.id} className={`recording-item ${isSelected ? 'selected' : ''}`}>
                    <input 
                      type="checkbox" 
                      className="recording-checkbox"
                      checked={isSelected}
                      onChange={() => handleToggleSelect(item.id)}
                    />
                    
                    <div className="recording-info">
                      <div className="recording-name">{item.fileName}</div>
                      <div className="recording-meta">
                        来源：{item.title}
                      </div>
                    </div>
                    
                    <div className="recording-controls">
                      <button 
                        className={`mini-play-btn ${activePlaybackUrl === item.url && isPlaying ? 'playing' : ''}`}
                        onClick={() => handleTogglePlay(item.url)}
                      >
                        {activePlaybackUrl === item.url && isPlaying ? "⏸️ 停止" : "🔊 试听"}
                      </button>
                      <button 
                        className="mini-download-btn"
                        onClick={() => downloadSingle(item)}
                      >
                        📥 下载
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
