import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "My Company | Contact",
    description: "Ini Halaman Contact",
  };
}

function ContactPage() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-950 mb-6">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Nama Anda"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700  mb-1 ">
            Pesan
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            rows={4}
            placeholder="Tulis Pesan..."
          ></textarea>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg ">
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
