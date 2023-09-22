
import React, { useState } from 'react';
import './style.css'

function FileDownloadCalculator() {
  const [internetSpeed, setInternetSpeed] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [fileSizeUnit, setFileSizeUnit] = useState('MB'); // Başlangıçta MB olarak ayarlayın
  const [downloadTime, setDownloadTime] = useState('');

  const calculateDownloadTime = () => {
    if (!internetSpeed || !fileSize) {
      alert("Lütfen internet hızı ve dosya boyutu girin.");
      return;
    }

    const speedInMbps = parseFloat(internetSpeed);
    let fileSizeInMB = parseFloat(fileSize);

    // Dosya boyut birimi (MB veya GB) üzerinden dönüşüm yapın
    if (fileSizeUnit === 'GB') {
      fileSizeInMB *= 1024; // 1 GB = 1024 MB
    }

    const downloadTimeInSeconds = fileSizeInMB / (speedInMbps / 8);
    const minutes = Math.floor(downloadTimeInSeconds / 60);
    const seconds = Math.round(downloadTimeInSeconds % 60);

    setDownloadTime(`${minutes} dakika ${seconds} saniye`);
  };


  return (
    <div className="container">
  <h1>Dosya İndirme Hızı Hesaplama</h1>
  <label>İnternet Hızı (Mbps):</label>
  <input
    type="number"
    value={internetSpeed}
    onChange={(e) => setInternetSpeed(e.target.value)}
  />
  <br />
  <label>Dosya Boyutu:</label>
  <input
    type="number"
    value={fileSize}
    onChange={(e) => setFileSize(e.target.value)}
  />
  <select
    value={fileSizeUnit}
    onChange={(e) => setFileSizeUnit(e.target.value)}
  >
    <option value="MB">MB</option>
    <option value="GB">GB</option>
  </select>
  <br />
  <button onClick={calculateDownloadTime}>Hesapla</button>
  <p>İndirme Süresi: {downloadTime}</p>
</div>
  );
}

export default FileDownloadCalculator;