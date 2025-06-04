import twoWomen from '../assets/posts/twoWomen.png'
import people from '../assets/posts/people.png'
import womenMen from '../assets/posts/womanMan.png'
import peopleWallking from '../assets/posts/peopleWalking.png'
export interface Post {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
  }
  
  export const posts: Post[] = [
    {
      id: 1,
      category: "Startup",
      title: "Design tips for designers that cover everything you need",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: twoWomen
    },
    {
      id: 2,
      category: "Business",
      title: "How to build rapport with your web design clients",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: people
    },
    {
      id: 3,
      category: "Startup",
      title: "Logo design trends to avoid in 2022",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: womenMen
    },
    {
      id: 4,
      category: "Technology",
      title: "8 Figma design systems you can download for free today",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: peopleWallking
    },
    {
      id: 5,
      category: "Economy",
      title: "Font sizes in UI design: The complete guide to follow",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: twoWomen
    }
  ];
  