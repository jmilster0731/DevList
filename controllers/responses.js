const Query = require('../models/query')


module.exports = {
    create,
    delete: deleteResponse
}

async function create(req, res) {

    const query = await Query.findById(req.params.id);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    query.responses.push(req.body);
    try {
        await query.save();
    } catch(err) {
        console.log(err)
    }

    res.redirect(`/queries/${query._id}`)
}

async function deleteResponse(req, res) {
    const query = await Query.findOne({ 'responses._id': req.params.id, 'responses.user': req.user._id });
    if (!query) return res.redirect('/queries');
    query.responses.remove(req.params.id);
    await query.save();
    res.redirect(`/queries/${query._id}`)
}