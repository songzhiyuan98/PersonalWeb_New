import { GraduationCap, BookOpen } from "lucide-react"

export interface CourseItem {
  date: string
  title: string
  description: string
  category?: string
  detail?: string
  grade?: string
  semester?: string
}

export const courses: CourseItem[] = [
  {
    date: "2022 - Now",
    title: "University of California, Santa Cruz",
    description: "Computer Science Major | GPA: 3.84",
    category: "university",
    detail: "Pursuing a Bachelor's degree in Computer Science at UC Santa Cruz, specializing in Software Engineering and Artificial Intelligence. Engaged in multiple research projects and internships, accumulating extensive practical experience.",
    grade: "3.84",
    semester: "2022 - 2026"
  },
  {
    date: "Fall 2022",
    title: "CSE 20: Beginning Python",
    description: "Data Types | Control Flow | OOP",
    category: "programming",
    detail: "Studied fundamental Python programming concepts including data types, control flow, and object-oriented programming. Gained hands-on experience with Python's core concepts and best practices through practical projects."
  },
  {
    date: "Winter 2022",
    title: "CSE 30: Prog Abs Python",
    description: "Data Structures | Algorithm Design | OOP",
    category: "programming",
    detail: "Advanced study of Python programming concepts, including data structures (lists, dictionaries, sets, tuples), algorithm design (sorting, searching, recursion), and object-oriented programming (classes, inheritance, polymorphism). Developed strong foundation for subsequent algorithms and data structures courses through practical projects."
  },
  {
    date: "Winter 2022",
    title: "CMPM 80K: Game Design Fundamentals",
    description: "Game Design Principles | Game Analysis | Gdevelop 5",
    category: "design",
    detail: "Explored fundamental game design theory, including game mechanics, player experience, level design, and game balance. Gained practical experience with Gdevelop 5 game engine and development workflow. Course emphasized game analysis methods and design documentation, fostering game design thinking and innovation capabilities."
  },
  {
    date: "Spring 2023",
    title: "CSE 13S: Computer Systems & C Programming",
    description: "C Programming | Command Line & Shell Programming | Debugging & Source Control",
    category: "systems",
    detail: "Advanced study of C programming and computer systems fundamentals, including pointers, memory management, and file operations. Mastered command line and shell programming, debugging techniques, and version control tools (Git). Developed system-level programming and problem-solving skills through practical projects."
  },
  {
    date: "Fall 2023",
    title: "MATH 21: Linear Algebra",
    description: "Linear Equations | Matrices & Determinants | Vector Spaces & Linear Transformations",
    category: "math",
    detail: "Studied fundamental linear algebra theory, including linear equation systems, matrix operations, determinants, vector spaces, and linear transformations. Applied theoretical knowledge to computer graphics and machine learning. Course emphasized mathematical proofs and problem-solving skills."
  },
  {
    date: "Winter 2023",
    title: "CSE 16: Applied Discrete Mathematics",
    description: "Sets, Functions & Relations | Graph Theory | Counting Methods & Recurrence Relations",
    category: "math",
    detail: "Explored discrete mathematics fundamentals and their applications in computer science, including set theory, functions and relations, graph theory, counting methods, and recurrence relations. Applied theoretical knowledge to algorithm analysis, data structures, and cryptography. Course emphasized mathematical proofs and logical reasoning."
  },
  {
    date: "Spring 2024",
    title: "CSE 101: Algorithms & Abstract Data Structures",
    description: "Abstract Data Types | Algorithm Analysis | C/C++ Programming",
    category: "algorithms",
    detail: "Studied abstract data types and algorithm fundamentals, including linked lists, stacks, queues, hash tables, trees, heaps, and graphs. Mastered Big-O analysis derivation methods for simple algorithms."
  },
  {
    date: "Spring 2024",
    title: "STAT 131: Intro Probability Theory",
    description: "Bayes Theorem | Central Limit Theorem | Markov Chains",
    category: "math",
    detail: "Studied probability theory fundamentals and applications, including combinatorial analysis, probability axioms and independence, random variables (discrete and continuous), joint probability distributions, expectation properties, central limit theorem, law of large numbers, and Markov chains. Developed strong foundation for statistical inference and machine learning through theoretical study and practical applications."
  },
  {
    date: "Fall 2024",
    title: "CSE 40: Intro to Machine Learning",
    description: "Data Cleaning | Data Analysis | Optimization Methods | Data Visualization",
    category: "ai",
    detail: "Explored machine learning fundamentals, including mathematical foundations in probability theory, linear algebra, and optimization methods, as well as programming abstractions for data manipulation and visualization. Course emphasized principles of empirical analysis, evaluation, critique, and reproducibility. Combined mathematical and programming abstractions with practical applications through data-driven evidence reasoning, predictive modeling, and causal analysis."
  },
  {
    date: "Winter 2024",
    title: "CSE 102: Introduction to Analysis of Algorithms",
    description: "RAM Computation Model | Divide & Conquer | Branch & Bound | Dynamic Programming",
    detail: "Advanced study of algorithm design and analysis, including RAM computation model, asymptotic notation analysis, lower bound theory, and recurrence relation solving. Focused on core algorithm design techniques including divide-and-conquer, branch-and-bound, and dynamic programming. Applied classical algorithms in combinatorial optimization, graph theory, string matching, and computational geometry. Course emphasized time and space complexity analysis and algorithm correctness proofs.",
    category: "algorithms"
  },
  {
    date: "Winter 2024",
    title: "CSE 120: Computer Architecture",
    description: "Processor Design | Memory Hierarchy | Parallel Computing",
    detail: "Advanced study of computer architecture, including computer performance evaluation, combinational logic and sequential digital components, instruction set architecture (focusing on MIPS ISA and RISC paradigm), CPU microarchitecture evolution from single-cycle to multi-cycle pipelining, and superscalar, multiple-issue, and VLIW architectures. Explored memory systems, caches, virtual memory, and their relationship to performance. Covered advanced topics in parallel processing, MIMD, and SIMD. Gained practical experience with modern processor design principles and performance optimization techniques.",
    category: "systems"
  },
  {
    date: "Winter 2024",
    title: "CSE 130: Computer Systems Design Principles",
    description: "Concurrency & Synchronization | Layered Design | System Performance Optimization",
    detail: "Advanced study of computer systems design principles, including memory, storage, and network architectures; concurrency and synchronization mechanisms; layered design (abstraction and modularity); naming systems; client-server and virtualization system models; and system performance optimization. Practiced these core concepts through large-scale programming projects, including multithreaded programming, distributed system design, performance tuning, and system monitoring. Course emphasized system design scalability, reliability, and security.",
    category: "systems"
  },
  {
    date: "Spring 2025",
    title: "CSE 150: Introduction to Computer Networks",
    description: "Network Models & Layers | Internetworking | Transmission Media | Switching Techniques",
    detail: "Studied computer networking fundamentals, including network models and layers, internetworking, transmission media characteristics, switching techniques (packet switching, circuit switching, cell switching), medium access control protocols, local area networks, error control strategies, link-level protocols, routing algorithms, congestion control mechanisms, and transport protocols. Gained practical experience with standard protocol architectures for wireless and wired networks.",
    category: "systems"
  },
  {
    date: "Spring 2025",
    title: "CSE 115A: Introduction to Software Engineering",
    description: "Software Development Process | Object-Oriented Design | Design Patterns | Software Testing",
    detail: "Advanced study of software engineering core concepts and methodologies, including requirements analysis and specification, software design, implementation, verification and validation, maintenance, and project management. Practiced object-oriented design principles, design pattern applications, software testing strategies, and agile development methods through projects. Course emphasized software system maintainability, extensibility, and reliability, fostering engineering mindset and team collaboration skills.",
    category: "systems"
  }
]

export const categories = [
  { id: "all", name: "All Courses", icon: "📚" },
  { id: "university", name: "University Experience", icon: "🎓" },
  { id: "programming", name: "Programming Fundamentals", icon: "💻" },
  { id: "algorithms", name: "Algorithms & Data Structures", icon: "🔍" },
  { id: "systems", name: "Systems & Architecture", icon: "⚙️" },
  { id: "math", name: "Mathematical Theory", icon: "📐" },
  { id: "ai", name: "Artificial Intelligence", icon: "🤖" },
  { id: "design", name: "Design", icon: "🎨" }
]

export const categoryColors = {
  university: "from-blue-400 to-indigo-500",
  programming: "from-emerald-400 to-teal-500",
  algorithms: "from-purple-400 to-violet-500",
  systems: "from-orange-400 to-amber-500",
  math: "from-rose-400 to-pink-500",
  ai: "from-cyan-400 to-sky-500",
  design: "from-yellow-400 to-amber-500"
}