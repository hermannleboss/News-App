const News = require('../models/News');
exports.createNews = (req, res, next) => {
    delete req.body._id;
    const news = new News({
        ...req.body
    });
    news.save()
        .then(() => res.status(201).json({message: 'Object saved'}))
        .catch(error => res.status(400).json({error}));
}
exports.updateNews = (req, res, next) => {
    News.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(() => res.status(201).json({message: 'Object Updated'}))
        .catch(error => res.status(400).json({error}));
}
exports.deleteNews = (req, res, next) => {
    console.log("delete");
    News.findOne({_id: req.params.id})
        .then((news) => {
            if (!news) {
                return res.status(404).json({
                    error: new Error('Object not found')
                });
            }
            if (news.userId != req.auth.userId) {
                return res.status(401).json({
                    error: new Error('Request not authorized')
                });
            }
            News.deleteOne({_id: req.params.id})
                .then(() => res.status(200).json({message: 'Object Deleted'}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(400).json({error}));
}
exports.getOneNews = (req, res, next) => {
    console.log("get ONe news");
    News.findOne({_id: req.params.id})
        .then(news => res.status(200).json(news))
        .catch(error => res.status(400).json({error}));
}
exports.getAllNews = (req, res, next) => {
    News.find()
        .then(news => res.status(200).json(news))
        .catch(error => res.status(400).json({error}));
}