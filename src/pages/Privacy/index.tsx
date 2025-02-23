const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-600 text-center py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Maxfiylik Siyosati</h1>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Umumiy ma’lumot</h2>
        <p>
          1.1. Ushbu maxfiylik siyosati ALCODERSUZ tomonidan ko‘rsatiladigan
          xizmatlar davomida buyurtmachining shaxsiy ma’lumotlari qanday
          to‘planishi, saqlanishi va ishlatilishini tartibga soladi.
        </p>
        <p>
          1.2. Buyurtmachi xizmatlardan foydalanish orqali ushbu maxfiylik
          siyosati qoidalariga rozilik bildiradi.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          To‘planadigan ma’lumotlar
        </h2>
        <p>
          2.1. Buyurtmachi tomonidan taqdim etiladigan shaxsiy ma’lumotlar (ism,
          telefon raqami, elektron pochta, loyiha tafsilotlari va boshqalar)
          faqat kelishilgan xizmatlarni taqdim etish uchun ishlatiladi.
        </p>
        <p>
          2.2. Buyurtmachining to‘lov ma’lumotlari faqat to‘lov jarayonini
          amalga oshirish uchun ishlatiladi va uchinchi tomonlarga oshkor
          qilinmaydi.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          Ma’lumotlardan foydalanish va himoya qilish
        </h2>
        <p>
          3.1. To‘plangan ma’lumotlar uchinchi tomonlarga berilmaydi va faqat
          xizmatni taqdim etish doirasida ishlatiladi.
        </p>
        <p>
          3.2. Buyurtmachining ma’lumotlari maxfiy saqlanadi va xavfsizlik
          choralari bilan himoyalanadi.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">O‘zgarishlar</h2>
        <p>
          4.1. ALCODERSUZ ushbu maxfiylik siyosatini istalgan vaqtda
          o‘zgartirish huquqiga ega. O‘zgarishlar amalga oshirilgan taqdirda,
          buyurtmachiga bu haqda oldindan xabar beriladi.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Aloqa</h2>
        <p>
          5.1. Maxfiylik siyosati bo‘yicha savollar yoki takliflar bo‘lsa,
          quyidagi manzilga murojaat qilish mumkin:
        </p>
      </div>
      <a
        href="/maxfiylik_siyosati.pdf"
        download
        className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200 text-decoration-none"
      >
        PDF Yuklab Olish
      </a>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center mt-10">
        <p>&copy; 2025 ALCODERSUZ. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
