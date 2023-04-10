import '@/styles/globals.css';
import TableProvider from '@/contexts/storeContext';

export default function App({ Component, pageProps }) {
  return (
  <TableProvider>
    <Component {...pageProps} />
  </TableProvider>
  )
}
