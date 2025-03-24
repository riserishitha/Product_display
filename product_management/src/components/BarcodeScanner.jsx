import React, { useEffect, useRef } from "react";
import Quagga from "quagga";

const BarcodeScanner = ({ onDetected }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    if (scannerRef.current) {
      Quagga.init(
        {
          inputStream: {
            type: "LiveStream",
            target: scannerRef.current, 
            constraints: {
              width: 640,
              height: 480,
              facingMode: "environment"  
            }
          },
          decoder: {
            readers: ["ean_reader", "code_128_reader", "upc_reader", "ean_8_reader"]
          }
        },
        (err) => {
          if (err) {
            console.error("Error initializing Quagga:", err);
            return;
          }
          Quagga.start();
        }
      );

      Quagga.onDetected((data) => {
        onDetected(data.codeResult.code);  
      });
    }

    return () => {
      Quagga.stop();
    };
  }, [onDetected]);

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-700 mb-3">Scan Barcode:</h2>
      <div ref={scannerRef} className="w-full h-64 bg-gray-200 rounded-md shadow-md"></div>
    </div>
  );
};

export default BarcodeScanner;
