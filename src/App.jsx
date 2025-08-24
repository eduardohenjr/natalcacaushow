
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '' });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
    // Aqui você pode integrar com backend ou serviço de email
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-red-200 flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-red-700 mb-2">Natal Cacau Show</h1>
        <p className="text-center text-lg text-gray-700">Bem-vindo! Escaneie o QR Code e participe da nossa campanha especial de Natal. Siga nossas redes e concorra a brindes exclusivos!</p>

        <div className="flex flex-col gap-2 items-center">
          <a href="https://www.instagram.com/lojacacaushow.largodabatalha?igsh=MWpuazVuZmYwemYzOQ==" target="_blank" rel="noopener" className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition">Seguir no Instagram</a>
          <a href="https://wa.me/21964320202" target="_blank" rel="noopener" className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition">Fale conosco no WhatsApp</a>
          <a href="/qrcode" className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition mt-2">QR Code</a>
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-center text-red-600">Cadastre-se na lista VIP</h2>
          <input name="nome" type="text" placeholder="Seu nome" value={form.nome} onChange={handleChange} className="border rounded px-3 py-2" required />
          <input name="email" type="email" placeholder="Seu e-mail" value={form.email} onChange={handleChange} className="border rounded px-3 py-2" required />
          <input name="whatsapp" type="text" placeholder="WhatsApp" value={form.whatsapp} onChange={handleChange} className="border rounded px-3 py-2" required />
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded font-bold hover:bg-red-700 transition">Quero participar!</button>
          {enviado && <span className="text-green-600 text-center">Cadastro enviado! Boa sorte!</span>}
        </form>

        <div>
          <h2 className="text-xl font-semibold text-center text-yellow-700 mb-2">Produtos Natalinos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-yellow-50 rounded p-3 flex flex-col items-center">
              <img src="https://via.placeholder.com/120x120?text=Panetone" alt="Panetone" className="mb-2 rounded shadow" />
              <span className="font-bold">Panetone Cacau Show</span>
              <span className="text-sm text-gray-600">Delicioso panetone recheado para presentear!</span>
            </div>
            <div className="bg-yellow-50 rounded p-3 flex flex-col items-center">
              <img src="https://via.placeholder.com/120x120?text=Trufas" alt="Trufas" className="mb-2 rounded shadow" />
              <span className="font-bold">Trufas Especiais</span>
              <span className="text-sm text-gray-600">Trufas sortidas para o Natal!</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">© {new Date().getFullYear()} Loja Cacau Show - Natal</span>
        </div>
      </div>
    </div>
  );
}

export default App;
