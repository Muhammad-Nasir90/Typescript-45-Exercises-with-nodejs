/*Qno : 40 Album: Write a function called make_album()that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing 
these two pieces of information. Use the function to make three dictionaries representing different albums.
 Print each return value to show that Objects are storing the album information correctly. Add an optional 
 parameter to make_album() that allows you to store the number of tracks on an album. If the calling line 
 includes a value for the number of tracks, add that value to the album’s Object. Make at least one new 
 function call that includes the number of tracks on an album. */

 // make a funciton with the name make_album 

 function make_album (artist : string , title : string, track?: number) {

 const album: { artist:string,title:string,track?:number} = {

          artist:artist,
          title:title,
 }
     if (track !== undefined)
        {
            album.track = track;
        }
     return album;
 }

 let result = make_album("Atif Aslam","Doorie")
 console.log(result);

 let result1 = make_album("Ali Zafar","Huqa Pani")
 console.log(result1)
 
 let result2 = make_album("Noori","Sun Re",12)
 console.log(result2)