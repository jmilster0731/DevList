const Query = require('../models/query')

module.exports = {
    index,
    show,
    new: newQuery,
    create
}

async function index(req, res) {
    const queries = await Query.find({});
    res.render('queries/index', { title: 'All Queries', queries });
}

async function show(req, res) {
    const query = await Query.findById(req.params.id);
    res.render('queries/show', { title: 'Query Detail', query });
}

function newQuery(req, res) {
    res.render('queries/new', { title: 'Ask Your Peers!', errorMsg: '' });
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const query = await Query.create(req.body);
        res.redirected(`/${query._id}`, { title: 'Query', errorMsg: '' });
    } catch (err) {
        console.log(err);
        res.render('queries/new', { title: 'Ask Your Peers!', errorMsg: err.message });
    }
}
