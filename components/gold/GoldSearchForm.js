/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-01 10:36:33
 * @Description: file content
 */
import { useDispatch } from 'react-redux'
import { serverRender_goldlist } from '../../store'
import {
    Form,
    Select,
} from 'antd'

const FormItem = Form.Item
const Option = Select.Option

const SearchForm = () => {
    const dispatch = useDispatch()

    const handleGoldChange = (value) => {
        console.log(value)
        const payload = {
            category: value,
            order: "heat",
            offset: 0,
            limit: 30
        }
        dispatch(serverRender_goldlist(payload))
    }
    return (<div style={{ marginTop: 10, marginLeft: 10 }}>
        <Form layout="horizontal">
            <FormItem label="掘金" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
                <Select
                    defaultValue="all"
                    style={{ width: 150 }}
                    name="select"
                    onChange={handleGoldChange}
                >
                    <Option value="all">首页</Option>
                    <Option value="frontend">前端</Option>
                    <Option value="backend">后端</Option>
                    <Option value="ai">人工智能</Option>
                </Select>
            </FormItem>
        </Form>
    </div>)
}

export default SearchForm