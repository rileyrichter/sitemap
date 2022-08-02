// runs on node.js
// in our example, we're using autocode
// in prod, we'd want to use a different server
// using the get-sitemap-links npm package
// https://www.npmjs.com/package/get-sitemap-links

const GetSitemapLinks = require("get-sitemap-links").default;

myLinks = (async () => {
  const array = await GetSitemapLinks(
    "https://richmondtillwedie.com/sitemap.xml"
  );
  console.log(array.length);
  return array;
})();

return myLinks;

/*
expected output:
[
  "https://richmondtillwedie.com/",
  "https://richmondtillwedie.com/new-page",
  "https://richmondtillwedie.com/my-page",
  "https://richmondtillwedie.com/landing-page",
  "https://richmondtillwedie.com/new-folder/trial-day",
  "https://richmondtillwedie.com/about",
  "https://richmondtillwedie.com/training-day",
  "https://richmondtillwedie.com/search",
  "https://richmondtillwedie.com/new-page-two",
  "https://richmondtillwedie.com/our-blog",
  "https://richmondtillwedie.com/scraping",
  "https://richmondtillwedie.com/quotes/george-gets-fired",
  "https://richmondtillwedie.com/quotes/not-quite-an-oasis",
  "https://richmondtillwedie.com/quotes/are-we-nuts-for-doing-this",
  "https://richmondtillwedie.com/quotes/see-each-other-in-dreams",
  "https://richmondtillwedie.com/post/name",
  "https://richmondtillwedie.com/post/test-post",
  "https://richmondtillwedie.com/post/another-post",
  "https://richmondtillwedie.com/post/staged-post",
  "https://richmondtillwedie.com/post/test-post-8",
  "https://richmondtillwedie.com/episodes/pilot",
  "https://richmondtillwedie.com/episodes/biscuits",
  "https://richmondtillwedie.com/episodes/trent-crimm-the-independent",
  "https://richmondtillwedie.com/post/14-common-misconceptions-about-web-design",
  "https://richmondtillwedie.com/post/why-we-love-webflow-and-you-should-too",
  "https://richmondtillwedie.com/post/7-of-the-best-examples-of-beautiful-blog-design",
  "https://richmondtillwedie.com/post/10-things-nobody-told-you-about-being-a-web-designer",
  "https://richmondtillwedie.com/post/the-history-of-web-design",
  "https://richmondtillwedie.com/post/how-to-improve-web-design-process",
  "https://richmondtillwedie.com/post/15-best-blogs-to-follow-about-web-design",
  "https://richmondtillwedie.com/post/7-things-about-web-design-your-boss-wants-to-know",
  "https://richmondtillwedie.com/post/what-will-website-be-like-in-100-years",
  "https://richmondtillwedie.com/post/20-myths-about-web-design",
  "https://richmondtillwedie.com/post/golden-girls-the-most-underrated-episodes",
  "https://richmondtillwedie.com/post/how-jurassic-park-ushered-in-the-era-of-cgi",
  "https://richmondtillwedie.com/post/how-the-commodore-64-changed-video-games-forever",
  "https://richmondtillwedie.com/post/how-the-laptop-was-invented",
  "https://richmondtillwedie.com/post/how-to-find-tube-tvs-for-your-retro-consoles",
  "https://richmondtillwedie.com/post/how-to-level-up-your-retro-living-room",
  "https://richmondtillwedie.com/post/pac-man-and-pac-woman-a-history",
  "https://richmondtillwedie.com/post/ranked-the-best-consoles-of-all-time",
  "https://richmondtillwedie.com/post/ranked-the-best-gameboy-games-of-all-time",
  "https://richmondtillwedie.com/post/sega-game-gear-jurassic-park",
  "https://richmondtillwedie.com/post/the-10-best-80s-hip-hop-cassettes",
  "https://richmondtillwedie.com/post/super-computers-a-complete-history-and-a-look-into-the-future",
  "https://richmondtillwedie.com/post/the-10-best-arcade-games-ever-made",
  "https://richmondtillwedie.com/post/the-best-classic-tv-shows-of-all-time",
  "https://richmondtillwedie.com/post/the-amps-used-in-all-your-favorite-classic-rock-albums",
  "https://richmondtillwedie.com/post/the-best-led-lights-for-your-gaming-setup",
  "https://richmondtillwedie.com/post/the-best-music-videos-of-the-80s",
  "https://richmondtillwedie.com/post/the-best-mechanical-keyboard-for-your-mac",
  "https://richmondtillwedie.com/post/the-best-retro-computers-that-you-can-still-buy",
  "https://richmondtillwedie.com/post/the-retro-consoles-youve-never-heard-of"
]
*/
