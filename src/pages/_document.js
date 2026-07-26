import {Head, Html, Main, NextScript} from 'next/document'

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = (stored === 'dark' || stored === 'light')
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="canonical" href="https://arnaugarcia.com"/>
                <script dangerouslySetInnerHTML={{__html: themeInitScript}}/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
