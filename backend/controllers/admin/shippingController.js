const shippingModel = require("../../models/shippingModel");
const {responseReturn} = require("../../utiles/response");

class shippingControllers {

    getShipping = async (req, res, next) => {
        const shipping = await shippingModel.find()
        responseReturn(res, 200, shipping);
    }

    deleteShipping = async (req, res, next) => {
        const {id} = req.params
        try {
            const shipping = await shippingModel.findById(id)
            if (shipping) {
                await shippingModel.findByIdAndDelete(id)
                responseReturn(res, 200, "Xoá thanh công")
            }
        } catch (e) {
            console.log(e)
        }
    }
    updateShipping = async (req, res) => {
        const {city, price} = req.body;
        try {
            const shipping = await shippingModel.findOne({city});
            console.log(shipping)
            if (shipping) {
                await shippingModel.updateOne({city}, {price});
                responseReturn(res, 200, {message: "Cập nhật thành công"});
            } else {
                await shippingModel.create({city, price});
                responseReturn(res, 200, {message: "Tạo mới thành công"});
            }
        } catch (err) {
            console.log(err);
            responseReturn(res, 500, {message: err});
        }
    }


}

module.exports = new shippingControllers();
