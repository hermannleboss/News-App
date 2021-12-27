const News=require('../models/News');
exports.createNews=(req, res, next) => {
    delete req.body._id;
    const news = new News({
        ...req.body
    });
    news.save()
        .then(() => res.status(201).json({message: 'Object saved'}))
        .catch(error => res.status(400).json({error}));
}
exports.updateNews=(req, res, next) => {}
exports.deleteNews=(req, res, next) => {}
exports.getOneNews=(req, res, next) => {}
exports.getAllNews=(req, res, next) => {
    News.find()
        .then(news => res.status(200).json(news))
        .catch(error => res.status(400).json({error}));
}