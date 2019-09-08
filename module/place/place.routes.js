import express from "express"
import validate from "express-validation"


import { addPlace, getAllPlace, getPlaceByID, updatePlace, deletePlace } from "./place.controller"
import placeValidation from "../../middleware/validation/place.validation"


const router = express.Router()

router.get('/', getAllPlace)
router.post('/', validate(placeValidation.addPlace), addPlace)
router.get('/:id', validate(placeValidation.getPlaceByID), getPlaceByID)
router.put('/', validate(placeValidation.updatePlace), updatePlace)
router.delete('/', validate(placeValidation.deletePlace), deletePlace)


export default router