import Joi from "joi";

export const QueryGetBookList = Joi.object({
  list: Joi.string().required(),
  "bestsellers-date": Joi.string().pattern(new RegExp("^d{4}-d{2}-d{2}$")),
  "published-date": Joi.string().pattern(new RegExp("^d{4}-d{2}-d{2}$")),
  offset: Joi.string(),
});
