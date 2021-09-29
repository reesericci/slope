const NetlifyAPI = require('netlify')

const client = new NetlifyAPI(process.env.NETLIFY_KEY)

exports.handler = async event => {
    const comments = await client.listFormSubmissions({
        form_id: '6154867ae49c1100086d18f3',
    }) 

    const comments_json = JSON.stringify(comments);

    return {
        statusCode: 200,
        body: comments_json,
    }
} 
