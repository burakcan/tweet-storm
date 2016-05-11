import { method, createFetch, base, accept } from 'http-client';

const { NODE_ENV } = process.env;
const apiBase = NODE_ENV === 'development' ? 'http://localhost:5000/' : `${window.location.origin}/`; //eslint-disable-line

const fetch = createFetch(
  base(apiBase),
  method('GET'),
  accept('application/json')
);

const tweetURLReg = /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)[^\d]*$/;

export function parseURL(value) {
  const raw = value.match(tweetURLReg);
  return [raw[3], raw[1]];
}

export function validateInput(value) {
  return tweetURLReg.test(value);
}

export function fetchTweet(id) {
  return fetch(`statuses/show.json?id=${id}`)
  .then(response => response.json());
}

export function resolveResponseTree(sourceTweet, tweets) {
  const relationMap = tweets.reduce(($prev, curr) => {
    const prev = $prev;

    if (curr.in_reply_to_status_id) {
      prev[curr.in_reply_to_status_id] = prev[curr.in_reply_to_status_id] || [];
      prev[curr.in_reply_to_status_id].push(curr);
    }

    return prev;
  }, {});

  function walk(tweet) {
    return {
      ...tweet,
      responses: relationMap[tweet.id] && relationMap[tweet.id].map(walk),
    };
  }

  return [walk(sourceTweet)];
}

export function buildTree(tweet) {
  return Promise.all([
    (fetch(`search/tweets.json?q=@${tweet.user.screen_name}&result_type=recent&count=100&since_id=${tweet.id}`)//eslint-disable-line
      .then(response => response.json())
    ),
    (fetch(`statuses/user_timeline.json?screen_name=${tweet.user.screen_name}&since_id=${tweet.id}`)
      .then(response => response.json())
    ),
  ])
  .then(([searchResult, userResult]) => userResult.concat(searchResult.statuses))
  .then(response => resolveResponseTree(tweet, response));
}
