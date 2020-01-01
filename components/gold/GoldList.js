/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-01 11:31:22
 * @Description: file content
 */
import SearchForm from './GoldSearchForm'

const goldlistStyle = {
    flex: '0 0 auto',        
    width: '34rem'
}

const GoldList = props => {
    return (<div style={goldlistStyle}>
        <SearchForm />
        <ul>
            {props.listdata.map(data => (
                <li key={data.id}>
                    <a>{data.title}</a>
                </li>
            ))}
        </ul>
    </div>)
}

export default GoldList
