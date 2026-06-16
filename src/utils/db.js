const DB_NAME = "ReadPictureTellStoryDB";
const STORE_NAME = "recordings";

export const initDB = () => {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB is not supported in this browser"));
      return;
    }
    try {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = (e) => resolve(e.target.result);
      request.onerror = (e) => reject(e.target.error);
    } catch (err) {
      reject(err);
    }
  });
};

export const saveAudioBlob = async (storyId, blob) => {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const getReq = store.get(storyId);
      getReq.onsuccess = (e) => {
        let existing = e.target.result;
        if (!existing) existing = [];
        if (!Array.isArray(existing)) {
          // Legacy format fallback: just a single Blob
          existing = [{ blob: existing, timestamp: Date.now() }];
        }
        
        // Push new recording with timestamp
        existing.push({ blob, timestamp: Date.now() });
        
        const putReq = store.put(existing, storyId);
        putReq.onsuccess = () => resolve();
        putReq.onerror = (e) => reject(e.target.error);
      };
      getReq.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error("Failed to save to IndexedDB:", err);
  }
};

export const getAllAudioBlobs = async () => {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.openCursor();
      const results = {};
      request.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          results[cursor.key] = cursor.value;
          cursor.continue();
        } else {
          resolve(results);
        }
      };
      request.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error("Failed to get all from IndexedDB:", err);
    return {};
  }
};
