import PostModel from "../models/Post.js";

export const getAll = async (req, res) => {
  try {
    const pizza = await PostModel.find();

    res.json(pizza);
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      messege: "Не удалось получить пиццы",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const pizzaId = await req.params.id;

    const pizza = await PostModel.findById(pizzaId);

    res.json(pizza);
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      messege: "Нет такой",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const pizzaId = req.params.id;

    const pizza = await PostModel.findByIdAndDelete(pizzaId);

    if (!pizza) {
      return res.status(404).json({
        message: "Пицца не найдена",
      });
    }

    res.json({
      message: "Пицца успешно удалена",
      pizza,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Не получилось удалить пиццу",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
    });

    const post = await doc.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      messege: "Не получилось создать пиццу",
    });
  }
};

export const update = async (req, res) => {
  try {
    const pizzaId = req.params.id;

    await PostModel.updateOne(
      {
        _id: pizzaId,
      },
      {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
      }
    );
    res.json({
      message: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      messege: "Не удалось обновить пиццу",
    });
  }
};
