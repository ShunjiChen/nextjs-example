/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-01 19:55:11
 * @Description: file content
 */
export default (req, res) => {
    const {
        query: { id },
        body: {payload}
    } = req;
    
    return (async function () {
        const res_fetch = await fetch('https://extension-ms.juejin.im/resources/github', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const { data } = await res_fetch.json()
        await res.status(200).json({ data })
    })();
}