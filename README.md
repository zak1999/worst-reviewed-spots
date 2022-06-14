# A simple tool to find the worst rated places near places

A simple React app using Google's Places API and Yelp's Fusion API.

Some shortcomings with this project:
  * Yelp's API only returns a maximum of 1000 results, meaning even when the script collects the last result, it isn't necessarily the ‘worst’ result.
  * Layout is unresponsive (it was only built for desktop view).
  * Running into a CORS error when fetching from the YELP API from my localhost, meant that I had to use a 'CORS Anywhere' url to prefix the API call.