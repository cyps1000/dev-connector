import { Request, Response, RequestHandler } from "express";
import request from "request";

/**
 * @route   GET api/profile/github/:username
 * @desc    Get user repos from github
 * @access  Public
 */
const getGithubRepos = (req: Request, res: Response) => {
  try {
    const options = {
      uri: encodeURI(
        `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc`
      ),
      method: "GET",
      headers: {
        "user-agent": "nodejs",
        Authorization: `token ${process.env.GITHUB_TOKEN!}`,
      },
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: "No Github profile found" });
      }

      res.json(JSON.parse(body));
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Defines the controller
 */
const getGithubReposController: RequestHandler[] = [getGithubRepos];

export { getGithubReposController };
