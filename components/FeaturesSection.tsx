export default function FeaturesSection() {
  const mainFeatures = [
    {
      image: "/images/speed.png",
      title: "تبدیل عکس به PDF با سرعت بالا",
      description: "تبدیل فوری و بدون تأخیر عکس‌های شما به PDF.",
    },
    {
      image: "/images/quality.png",
      title: "خروجی PDF با بالاترین کیفیت تصاویر",
      description: "خروجی PDF با همان کیفیت تصویر اصلی بدون هیچ افتی.",
    },
    {
      image: "/images/secure.png",
      title: "تبدیل عکس به PDF با امنیت و حفظ حریم خصوصی",
      description: "فایل‌های شما پس از مدت کوتاهی به‌طور خودکار حذف می‌شوند.",
    },
  ];

  const featureList = [
    {
      title: "تبدیل عکس به پی دی اف",
      description:
        "سریع‌ترین روش برای تبدیل هر تصویر به فایل PDF بدون افت کیفیت.",
    },
    {
      title: "تبدیل عکس به پی دی اف آنلاین در گوشی",
      description:
        "بدون نصب برنامه، تنها با مرورگر گوشی عکس را به PDF تبدیل کنید.",
    },
    {
      title: "تبدیل چند عکس به یک فایل پی دی اف آنلاین",
      description:
        "چندین تصویر را انتخاب کنید و یک PDF منظم و مرتب خروجی بگیرید.",
    },
    {
      title: "تبدیل عکس به پی دی اف در گوشی سامسونگ",
      description: "کاملاً سازگار با گوشی‌های سامسونگ و مرورگرهای موبایل.",
    },
    {
      title: "تبدیل عکس به پی دی اف در آیفون",
      description: "سازگار با Safari — بدون نیاز به برنامه جانبی.",
    },
    {
      title: "تبدیل عکس به پی دی اف رایگان",
      description: "بدون هزینه — بدون ساخت حساب — بدون محدودیت.",
    },
    {
      title: "تبدیل عکس به PDF آنلاین",
      description: "از هر دستگاهی، فقط با یک کلیک عکس خود را PDF کنید.",
    },
    {
      title: "تبدیل چند عکس به PDF",
      description: "چند عکس را در یک فایل PDF ترکیب و مرتب کنید.",
    },
  ];

  return (
    <section
      id="features"
      className="flex flex-col gap-14 p-4 scroll-mt-24 max-w-6xl mx-auto"
    >
      {/* --- 3 MAIN SEO FEATURES --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mainFeatures.map((feature, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg transition-all"
          >
            <div className="flex h-50 w-50 items-center justify-center rounded-full bg-primary/10">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-38 w-38 object-contain"
              />
            </div>

            <h3 className="text-xl font-bold">{feature.title}</h3>

            <p className="text-base text-muted-light dark:text-muted-dark leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* --- MAIN SEO H2 HEADINGS --- */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">
          تبدیل عکس به پی دی اف
        </h2>
        <h2 className="text-2xl font-semibold tracking-tight">
          تبدیل چند عکس به یک فایل PDF آنلاین
        </h2>
        <h2 className="text-xl font-semibold tracking-tight">
          تبدیل عکس به PDF (سریع، آنلاین و رایگان)
        </h2>

        <p className="text-base text-muted-light dark:text-muted-dark max-w-2xl mx-auto leading-relaxed">
          با Picp به راحتی عکس‌های خود را در کمترین زمان و بدون افت کیفیت به PDF
          تبدیل کنید. ابزار ما برای موبایل، سامسونگ و آیفون کاملاً بهینه شده است
          و نیازی به نصب برنامه ندارد.
        </p>
      </div>

      {/* --- SEO H3 FEATURES LIST --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {featureList.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-2 p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <h3 className="text-lg font-bold text-primary">{item.title}</h3>
            <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
