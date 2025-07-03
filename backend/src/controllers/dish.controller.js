import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {asyncHandler} from '../utils/asyncHandler.js';

import { Dish } from '../models/dish.model.js';

export const getDishes = asyncHandler(async (req, res,next) => {
    const dishes = await Dish.find();
    //console.log("hi");

    return ApiResponse.send(res, 'Dishes retrived', 200, dishes)
});

export const togglePublishStatusDishes = asyncHandler(async(req, res, next) => {
    const dish = await Dish.findOne({dishId: req.params.id});
    
    if (!dish) {
        throw new ApiError(404, 'Dish not found')
    }

    req.app.get('io').emit('dishUpdated'); // emit event to all clients


    dish.isPublished = !dish.isPublished;
    await dish.save();

    return ApiResponse.send(res, 'Dish Toggled', 200, dish)

})

export const addDish = asyncHandler(async(req, res, next) => {
    const { dishId, dishName, imageUrl, isPublished } = req.body;
    
    const newDish = new Dish({
      dishId,
      dishName,
      imageUrl,
      isPublished: !!isPublished // default to false if undefined
    });
    await newDish.save();
    
    req.app.get('io').emit('dishUpdated'); // emit event to all clients

    return ApiResponse.send(res, 'Dish added', 200, newDish);
})