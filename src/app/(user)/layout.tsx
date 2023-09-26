
import Header from '@/components/shared/Header';
import '../globals.css';


export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='bg-general_backgound'>
          <Header/>
          {children}
    </section>
  );
}