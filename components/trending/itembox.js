/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-01 11:33:54
 * @Description: file content
 */

// 项目卡组件
const ItemBox = ({ trendItem }) => {
    return (<div className="item-box">
        <div className="item">
            <div className="repo-content">
                <div className="repo-header">
                    <h2 className="title">{`${trendItem.username} / ${trendItem.reponame}`}</h2>
                </div>
                <div className="repo-desc">
                    <div className="desc">{trendItem.description}</div>
                </div>
                <div className="repo-meta">
                    <span className="star">star:{trendItem.starCount}</span>
                    <span className="fork">fork:{trendItem.forkCount}</span>
                    <span className="lang">lang:{trendItem.lang}</span>
                </div>
            </div>
        </div>
        <style jsx>{`
        .item{
            border-radius: 5px;
            margin: 16px;
            background-color: #eee;
        }

        h2{
            padding: 5px 20px;
            color: #1890ff;
        }

        .repo-desc{
            padding: 5px 20px;
            margin-bottom: 20px;
        }

        span{
            padding: 5px 20px;
            margin: 10px;
        }
      `}</style>
    </div>)
}

export default ItemBox