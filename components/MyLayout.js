import {useEffect} from 'react';
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const withLayout = Page => {
  const Layout = (props) => {
    return (
        <div style={layoutStyle}>
        <Header />
        <Page {...props} />
        </div>
    );
  }
  if (Page.getInitialProps) {
    Layout.getInitialProps = Page.getInitialProps
  }
  return Layout
}

export default withLayout;

export const Layout = ({children}) => {
  return (
      <div style={layoutStyle}>
      <Header />
      {children}
      </div>
  )
}
