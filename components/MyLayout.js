/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-01 10:29:21
 * @Description: file content
 */
import Header from './Header';
import SearchForm from './gold/GoldSearchForm'

const layoutStyle = {
    flex: '1 1 auto',
    display: 'flex',
    position: 'relative',
    margin: '1.8rem 1.2rem 0 1.8rem',
    overflow: 'hidden',
    border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
        {props.children}
    </div>
);

export default Layout;