const { Cars } = require("../database-mysql/models/cars")

module.exports = {
    getAll: async (req, res) => {
        try {
            const all = await Cars.findAll()
            res.json(all);
        }
        catch (error) {
            throw error;
        }
    },
    getOne: async (req, res) => {
        try {
            const one = await Cars.findOne({where:{id:req.params.id}})
            res.json(one)
        } catch (error) {
            throw error
        }
    },
    update: async (req, res) => {
        try {
            const updated = await Cars.update(req.body, { where: { id: req.params.id } });
            res.json(updated)
        } catch (error) {
            throw error
        }
    },
    remove: async (req, res) => {
        try {
            const deleted = await Cars.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.json(deleted)
        } catch (error) {
            throw error
        }
    },
    add: async (req, res) => {
        try {
            const newCar= await Cars.create(req.body)
            res.json(newCar)
        } catch (error) {
            throw error
        }
    }
}
