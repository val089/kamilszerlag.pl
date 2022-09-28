import { ReactNode, useState } from 'react';
import Sticky from 'react-stickynode';
import { Header } from '../Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status: Sticky.Status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header stickyClass={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <main id="content">{children}</main>
      {/* <Footer /> */}
    </>
  );
};
