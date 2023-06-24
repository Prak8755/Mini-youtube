export const HambergerLogo='https://www.svgrepo.com/show/506800/burger-menu.svg'
export const Youtubelogo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fXD5fYpv9At2PMmjCa6MYAUWd_l6C43qOg&usqp=CAU';
export const searchLogo='https://img.freepik.com/free-icon/search-interface-symbol_318-41829.jpg'
export const userIcon='https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg?w=2000';
export const chatUser='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';
const MyApiKey='AIzaSyC52TweZ1YkuyuMO4zom9Mq-ZTWNKBChDs'
export const You_Tube_Api='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+MyApiKey;

export const You_Tube_Search_Api='https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const RandomName=  function () {
    var nameList = [
        'Time', 'Past', 'Future', 'Dev',
        'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
        'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
        'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
        'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
        'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
        'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
        'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
        'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
        'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
        'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
        'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
        'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
        'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
        'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
        'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
        'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
        'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
        'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
        'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
        'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
      ];
 return nameList[Math.floor(Math.random() * nameList.length)];

      };


      export   const generateQuote = function() {
        const quotes = [
        {
            quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
            author: "Albus Dumbledore"
        },
        {
            quote: "It is impossible to manufacture or imitate love",
            author: "Horace Slughorn"
        },
        {
            quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
            author: "Luna Lovegood"
        },
        {
            quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
            author: "Sirius Black"
        },
        {
            quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
            author: "Arthur Weasley"
        },
        {
            quote: "Every human life is worth the same, and worth saving.",
            author: "Kingsley Shacklebolt"
        },
        {
            quote: "Have a biscuit, Potter.",
            author: "Minerva McGonagall"
        },
        {
            quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
            author: "Albus Dumbledore"
        },
        {
            quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
            author: "Dobby"
        }
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    return quotes[arrayIndex].quote;
  }
