
import HeaderPli from '@/components/shared/HeaderPli';
import '../globals.css';


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
          <HeaderPli/>
          {children}
    </section>
  );
}