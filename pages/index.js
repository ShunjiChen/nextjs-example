/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-01 10:39:28
 * @Description: file content
 */
import React from 'react'
import { connect } from 'react-redux'
import { serverRender_goldlist, serverRender_trendlist } from '../store'

import IndexComp from '../components/index'

class Index extends React.Component {
    static async getInitialProps({ reduxStore }) {
        const payload_gold = { category: "all", order: "heat", offset: 0, limit: 30 }
        const payload_trend = {
            category: 'trending',
            period: 'month',
            lang: 'javascript',
            offset: 0,
            limit: 10
        }
        await reduxStore.dispatch(serverRender_goldlist(payload_gold))
        await reduxStore.dispatch(serverRender_trendlist(payload_trend))

        return {}
    }

    render() {
        return <IndexComp />
    }
}

export default connect()(Index)
