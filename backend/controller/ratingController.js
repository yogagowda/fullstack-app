const express = require('express')

const RoutingModel = require('../module/ratingModule')

const AddRating = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const body = req.body;

      const addRating = new RoutingModel({
        title: body.title,
        text: body.text,
        rating: body.rating,
        reviewer: {
          name: body.reviewer.name,
          location: body.reviewer.location,
          avatarUrl: body.reviewer.avatarUrl
        }
      });

      await addRating.save().catch(error => {
        console.log(error);
        reject({ message: error.message });
      });

      resolve({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      reject({
        message: err.message
      });
    }
  });
};



const getAllRating = (req) => {
    return new Promise(async (resolve, reject) => {
        try {

            let body = req.body;
            const limit = req.query.limit ? parseInt(req.query.limit) : parseInt("10")
            const skip = req.query.skip ? parseInt(req.query.skip) : parseInt("0")
            let response = await RoutingModel.aggregate([{
                $facet: {
                    list: [{
                        $skip: skip
                    }, {
                        $limit: limit
                    }, {
                        $sort: {
                            _id: -1
                        }
                    }],
                    count: [{
                        $count: "totalCount"
                    }]
                }
            }]).catch(e => reject({
                message: e.message
            }))
            response = response[0]
            resolve({
                list: response.list,
                count: response.count[0] ? response.count[0].totalCount : 0
            })
        } catch (err) {
            reject({
                message: err.message
            })
        }
    })
}






module.exports = {
    AddRating,
    getAllRating
}