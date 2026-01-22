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
    learningPoints: ["Build 5 real apps", "Master React & Spring Boot", "Deploy to AWS", "System Design"],
    syllabus: [
      { week: "Week 1", topic: "Fundamentals", content: ["HTML5 & CSS3", "JavaScript Basics", "Git & GitHub"] },
      { week: "Week 2", topic: "React.js", content: ["Components", "Hooks", "State Management"] }
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
    description: "Learn how to design beautiful interfaces and user experiences using Figma.",
    learningPoints: ["Master Figma", "Prototyping", "Color Theory", "Design Systems"],
    syllabus: [
      { week: "Module 1", topic: "Intro to Design", content: ["Typography", "Color Theory", "Layouts"] },
      { week: "Module 2", topic: "Figma Deep Dive", content: ["Auto Layout", "Components", "Smart Animate"] }
    ]
  },
  {
    id: 3,
    title: "Data Science with Python",
    instructor: "Dr. Angela Yu",
    role: "Lead Data Scientist",
    price: "$94.99",
    rating: 4.7,
    reviews: 900,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    category: "Data Science",
    description: "From Pandas to Machine Learning, start your career as a Data Scientist today.",
    learningPoints: ["Python Mastery", "Pandas & NumPy", "Machine Learning", "Data Visualization"],
    syllabus: [
        { week: "Week 1", topic: "Python Basics", content: ["Variables", "Loops", "Functions"] },
        { week: "Week 2", topic: "Data Analysis", content: ["Pandas", "Matplotlib", "Seaborn"] }
    ]
  }
];