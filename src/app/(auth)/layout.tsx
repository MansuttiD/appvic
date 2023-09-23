
import Header from '@/components/shared/Header';
import '../globals.css';


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section >
          <Header/>
          {children}
    </section>
  );
}