import React from "react";

function QrCodePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-red-200 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-700 mb-2 text-center">Acesse nossa campanha de Natal!</h1>
        <p className="text-center text-gray-700 mb-4">Escaneie o QR Code abaixo para acessar ofertas, participar do sorteio e seguir nossas redes sociais.</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://SEUSITE.com&size=200x200" alt="QR Code" className="mb-4" />
        <span className="text-sm text-gray-500">Mostre este QR Code para seus clientes!</span>
      </div>
    </div>
  );
}

export default QrCodePage;
