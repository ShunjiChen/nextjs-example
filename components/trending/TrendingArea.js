/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-01 11:33:54
 * @Description: file content
 */
import SearchForm from './TrendSearchForm'
import Itembox from './itembox'

// 样式
const trendStyle = {
    flex: '1 1 auto',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column'
}

const trend_content_style = {
    flex: '1 1 auto',
    position: 'relative',
    overflowY: 'hidden',
    paddingRight: '0.8em'
}

// trending组件
const TrendingArea = props => {
    return (<div style={trendStyle}>
        <SearchForm />
        <div style={trend_content_style}>
            <ul style={{listStyle:'none'}}>
                {props.trendingData.map(data => (
                    <li key={data.id}><Itembox trendItem={data}></Itembox></li>
                ))}
            </ul>

        </div>
    </div>)
}

export default TrendingArea