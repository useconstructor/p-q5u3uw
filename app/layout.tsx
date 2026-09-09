import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clínica PetCare',
  description: 'A warm, trustworthy veterinary clinic landing page for Clínica PetCare in Guadalajara, focused on specialized animal healthcare, professional credentials, and frictionless appointment booking. The experience combines approachable editorial design with interactive service details and a validated appointment form connected to the Constructor API.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#ffffff', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
