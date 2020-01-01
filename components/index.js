/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-01 17:03:33
 * @Description: file content
 */
import { useSelector } from 'react-redux'
import Layout from './MyLayout'
import GoldList from './gold/GoldList'
import TrendingArea from './trending/TrendingArea'

const Index = () => {
    const goldList = useSelector(state => state.goldList)
    const trendingData = useSelector(state => state.trendingData)
    
    return (
        <Layout>
            <GoldList listdata={goldList}></GoldList>
            <TrendingArea trendingData={trendingData}></TrendingArea>
        </Layout>
    )
}

export default Index