import MainHeader from './Components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'Varna',
  description: 'Professionals for you',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
