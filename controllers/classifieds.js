const Classified = require('../models/classified')

module.exports = {
    index,
    show,
    new: newClassified,
    create,
    delete: deleteClassified,
    edit,
    update
}

async function index(req, res) {
    const classifieds = await Classified.find({});
    res.render('classifieds/index', { title: 'All Ads', classifieds });
}

async function show(req, res) {
    const classified = await Classified.findById(req.params.id);
    res.render('classifieds/show', { title: 'Ad Detail', classified });
}

function newClassified(req, res) {
    res.render('classifieds/new', { title: 'Add a Classified', errorMsg: '' });
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const classified = await Classified.create(req.body);
        res.redirected(`/classifieds/${classified._id}`, { title: 'Classified', errorMsg: '' });
    } catch (err) {
        console.log(err);
        res.render('classifieds/new', { title: 'Add a Classified', errorMsg: err.message });
    }
}

async function deleteClassified(req, res) {
    const classified = await Classified.findByIdAndDelete(req.params.id);
    res.redirect(`/classifieds`);
}

async function edit(req, res) {
    const classified = await Classified.findById(req.params.id);
    res.render('classifieds/edit', { title: "Edit my Classified", classified })
}

async function update(req, res) {
    console.log('anyone there?!?')
    try {
        const classified = await Classified.findByIdAndUpdate(
          { _id: req.params.id },
          {$set:req.body},
          {
            new: true,
          }
        );
        res.redirect(`/classifieds/${classified._id}`);
      } catch (error) {
        console.log(error);
      }
}
