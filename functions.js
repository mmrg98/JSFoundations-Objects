/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  let key ="name"
  return channel[key]
}
//console.log(getChannelName({'name': "Mariam", "Age":21}))
/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  let key = "videos"
  return channel[key].length
}

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  let k="videos"
  return channel[k].some(value => value.title==videoTitle)
 
}
//console.log(channelHasVideo("h",{name:"mariam",age : 21, videos:[{title:"meme", time: "120 mins"},{title : "toto",time: "60 mins"}]}))
/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  let key = "name"
  return channels.find(value => value[key] == channelName)
}
//console.log(getChannelByName("nora", [{'name': "Mariam", "Age":21},{'name': "nora", "Age":22}]))
/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  let k="videos"
  //return channels.find(value => value[k]==videoTitle);
    return channels.find(channel => channel[k].some(video => video.title == videoTitle))

}
//console.log(getChannelByName("toto", [{name: "Mariam", Age:21,videos: [{title:"meme", time: "120 mins"},{title : "nono",time: "60 mins"}]},{name: "nora", Age:22,videos: [{title:"haha", time: "120 mins"},{title : "toto",time: "60 mins"}]}]))
/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  let key = "name"
  let key2 = "description"
  
  return channels.filter(value => value[key].includes(query) || value[key2].includes(query))
}

/**************************************************************
 * totalVideosDuration(channel):
 * - receives a channel object
 * - returns the total duration of all the videos in this channel
 *
 * BONUS: use iteration method `.reduce()`
 ****************************************************************/
function totalVideosDuration(channel) {
  let result=0
  let k="videos"
  channel[k].forEach(value => result=result+value.duration)
   return result
}

/**************************************************************
 * channelWithMostContent(channels):
 * - receives an array of channel objects
 * - returns the channel with the highest total video duration
 *
 * Hint: use the `totalVideosDuration()` function
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function channelWithMostContent(channels) {
  
   channels.sort(channel => totalVideosDuration(channel))
   return channels[0]

}

/**************************************************************
 * longestChannelName(channels):
 * - receives an array of channel objects
 * - returns the channel with the longest name
 *
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function longestChannelName(channels) {
  
  let key="name"
  let longest = channels[0]
  channels.forEach(channel => {
    if (channel.name.length > longest.name.length){
      longest=channel
    }
  })
   return longest
}

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
  totalVideosDuration,
  channelWithMostContent,
  longestChannelName,
};
