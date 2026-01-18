export const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development Bootcamp",
    instructor: "Sarah Jenkins",
    role: "Senior Engineer at Google",
    price: "$89.99",
    rating: 4.8,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    category: "Development",
    description: "Master React, Node.js, and modern database technologies in this comprehensive bootcamp.",
    learningPoints: [
      "Build 5 real-world web applications",
      "Master React.js and Spring Boot",
      "Deploy apps to AWS and Vercel",
      "Understand System Design concepts"
    ],
    syllabus: [
      { week: "Week 1", topic: "Introduction to Web", content: ["HTML5 & CSS3 Mastery", "Flexbox & Grid", "Building a Portfolio"] },
      { week: "Week 2", topic: "JavaScript Deep Dive", content: ["ES6+ Features", "Async/Await", "DOM Manipulation"] },
      { week: "Week 3", topic: "React Framework", content: ["Components & Props", "Hooks (useState, useEffect)", "State Management"] }
    ]
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Gary Simon",
    role: "Design Lead at Adobe",
    price: "$69.99",
    rating: 4.9,
    reviews: 850,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    category: "Design",
    description: "Learn how to design beautiful interfaces and user experiences using Figma and Adobe XD.",
    learningPoints: [
      "Master Figma shortcuts and plugins",
      "Create high-fidelity prototypes",
      "Understand Color Theory & Typography",
      "Hand off designs to developers"
    ],
    syllabus: [
      { week: "Module 1", topic: "Design Fundamentals", content: ["Wireframing", "Color Psychology", "Typography Rules"] },
      { week: "Module 2", topic: "Figma Mastery", content: ["Auto Layout", "Components & Variants", "Prototyping"] }
    ]
  }
  // Add more courses if you like...
];