import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

export default ({ children }) => {
  return <div className={children.props.query.color}>
    <Topbar />
    <div>{children}</div>
    <Footer />
  </div>
}
