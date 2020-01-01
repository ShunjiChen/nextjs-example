/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-01 10:36:33
 * @Description: file content
 */
import { useDispatch } from 'react-redux'
import { serverRender_trendlist } from '../../store'
import {
    Form,
    Select,
} from 'antd'

const FormItem = Form.Item
const Option = Select.Option

const SearchForm = () => {
    const dispatch = useDispatch()

    const handleTrendChange = (value) => {
        const payload = {
            category: 'github',
            period: value,
            lang: 'javascript',
            offset: 0,
            limit: 10
        }
        dispatch(serverRender_trendlist(payload))
    }
    return (<div style={{ marginTop: 10, marginLeft: 10 }}>
        <Form layout="horizontal">
            <FormItem label="Github热门" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
                <Select
                    defaultValue="month"
                    style={{ width: 150 }}
                    name="select"
                    onChange={handleTrendChange}
                >
                    <Option value="week">本周</Option>
                    <Option value="month">本月</Option>
                </Select>
            </FormItem>
        </Form>
    </div>)
}

export default SearchForm