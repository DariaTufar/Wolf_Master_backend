const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const  Joi = require("joi")

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  wolfyHeroNamene: {
    type: String,
  },
  telegramId: {
    type: String,
  },
  wins: {
    type: Number,
  },
  losses: {
    type: Number,
  },
  draws: {
    type: Number,
  },
});

userSchema.post("save", handleMongooseError);

 const schemaPost = Joi.object({
   username: Joi.string().required(),
   email: Joi.string().optional(),
   wolfyHeroNamene: Joi.string().optional(),
   telegramId: Joi.string().required(),
   wins: Joi.string().optional(),
   losses: Joi.string().optional(),
   draws: Joi.string().optional(),
 });

const schemaPut = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().optional(),
  wolfyHeroNamene: Joi.string().optional(),
  telegramId: Joi.string().required(),
  wins: Joi.string().optional(),
  losses: Joi.string().optional(),
  draws: Joi.string().optional(),
});

const schemaPatch = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().optional(),
  wolfyHeroNamene: Joi.string().optional(),
  wins: Joi.string().optional(),
  losses: Joi.string().optional(),
  draws: Joi.string().optional(),
});

const User = model("user", userSchema);

const schemas = {
  schemaPost,
  schemaPut,
  schemaPatch
}

module.exports = {
  User,
  schemas,
}
