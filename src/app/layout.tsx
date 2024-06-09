import ThemeProvider from "@/components/ThemeProvider";
import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const appName = 'LSD-Straler';
const description = 'LSD-Straler';
const url = 'https://lsd.nyaaa.de';

export const metadata: Metadata = {
  title: appName,
  applicationName: appName,
  description: description,
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: appName
  },
  formatDetection: {
    telephone: false
  },
  icons: {
    icon: [
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', rel: 'shortcut icon' }
    ],
    apple: [
      { url: '/icons/touch-icon-iphone.png' },
      { url: '/icons/touch-icon-ipad.png', sizes: '152x152' },
      { url: '/icons/touch-icon-iphone-retina.png', sizes: '180x180' },
      { url: '/icons/touch-icon-ipad-retina.png', sizes: '167x167' }
    ],
    other: [
      { rel: 'manifest', url: '/manifest.json' },
      { rel: 'mask-icon', url: '/icons/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  twitter: {
    card: 'summary',
    title: appName,
    description: description,
    images: [{
      url: `${url}/icons/android-chrome-192x192.png`,
    }],
    creator: '@tomatentim'
  },
  openGraph: {
    type: 'website',
    title: appName,
    description: description,
    siteName: appName,
    url: url,
    images: [
      {
        url: `${url}/icons/apple-touch-icon.png`,
      }
    ]
  },
  // link: [
  //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500' }
  // ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
