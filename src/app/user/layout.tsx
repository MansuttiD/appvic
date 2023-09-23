
import Header from '@/components/shared/Header';
import '../globals.css';


export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
          <Header/>
          {children}
    </section>
  );
}