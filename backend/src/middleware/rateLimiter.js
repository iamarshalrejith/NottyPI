import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key"); // this is common redis db for now since we are not getting the user id so we can't do for per person.In future we can add uthentication and get user id and store it accordingly.
    
    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }
    next();
  } catch (error) {
    console.log("Rate limit error: ", error);
    next(error);
  }
};

export default rateLimiter;
