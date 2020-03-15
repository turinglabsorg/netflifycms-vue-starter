# NetlifyCMS with VueJS Starter

This is a simple starter with Netlify and Vue, this means you can build a simple static website with CMS just using Github as backend provider for data. 

This really match 90% of static websites on the planet, please don't use a buggy Wordpress instance for your customers or your blog. Use a static, super secure and fast website if you only need simple contents.

This is true Headless CMS. 

I've built a simple git watcher that builds a new fresh version of the website if some new data is posted on github, to run it just start a pm2 instance and run `pm2 start git.js`. The website should point to the "dist" folder. Maybe you have to setup your apache or nginx instance to point that build folder.

Ask for support if you need.