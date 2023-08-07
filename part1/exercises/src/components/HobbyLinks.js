export default function HobbyLinks() {
    let hobbyLinks = ["https://www.polygon.com/tabletop-games/23643118/how-to-paint-miniatures/", "https://store.steampowered.com/"];
 
    return(
       <div>
          <h3>My Hobbies</h3>
          <a href = {hobbyLinks[0]} target = "blank">Painting miniatures: the ultimate beginner's guide</a> <br></br>
          <a href = {hobbyLinks[1]} target = "blank">Steam</a>
       </div>
    );
 }