//pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <body className="antialiased dark:bg-gray-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
