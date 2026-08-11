export interface Lesson {
  title:string,
  duration:string
}

export interface Week {
  id:string,
  title:string,
  summary:string,
  lessons:Lesson[]
}

export interface Course {
  id:number,
  slug:string,
  title:string,
  track:string,
  level:string,
  duration:string,
  lessons:string,
  price:string,
  blurb:string,
  instructor:string,
  builds:string[]
}

/**
 * TODO(bugbicep): placeholder two-week syllabus shared by every course.
 * Give each course its own `curriculum` once the real syllabi exist — the
 * detail page already renders whatever array it is handed.
 */
export const curriculum:Week[] = [
  {
    id:'01',
    title:'FOUNDATIONS',
    summary:'Set up a real working environment and get the core mental models straight before writing anything serious.',
    lessons:[
      { title:'Orientation: how this course actually runs',  duration:'25 min' },
      { title:'Environment, tooling and your first commit',  duration:'40 min' },
      { title:'Core syntax and the mental model behind it',  duration:'55 min' },
      { title:'Working with data structures',                duration:'1h 10m' },
      { title:'Debugging: reading errors like a detective',  duration:'45 min' },
      { title:'Project 01 — build it end to end',            duration:'2h' },
      { title:'Code review 01 — your first PR gets sent back', duration:'40 min' }
    ]
  },
  {
    id:'02',
    title:'BUILDING & SHIPPING',
    summary:'Take the week one project from "runs on my machine" to something running in production that other people can hit.',
    lessons:[
      { title:'Project structure that survives month three', duration:'50 min' },
      { title:'Talking to a database without losing data',   duration:'1h 15m' },
      { title:'Writing tests that actually catch things',    duration:'1h' },
      { title:'Project 02 — ship it with auth and migrations', duration:'3h' },
      { title:'Deploying to production behind a real domain', duration:'55 min' },
      { title:'Code review 02 — defending your design',      duration:'45 min' },
      { title:'Retro: what broke, why, and what you change', duration:'35 min' }
    ]
  }
]

// TODO(bugbicep): placeholder catalogue. Replace titles, durations, lesson
// counts, prices and instructors with the real course data before launch.
export const courses:Course[] = [
  {
    id:1,
    slug:'java-masterclass',
    title:'Java Masterclass',
    track:'JAVA',
    level:'Beginner → Advanced',
    duration:'14 weeks',
    lessons:'86 lessons',
    price:'₹14,999',
    blurb:'Core Java, collections, concurrency and the JVM — written from scratch, not copied from slides.',
    instructor:'Arjun Mehta',
    builds:[
      'A multi-threaded file processor that survives real load',
      'A REST service on plain Java with no framework hiding the wiring',
      'A small ORM, so you never treat one as magic again'
    ]
  },
  {
    id:2,
    slug:'spring-boot-rest-apis',
    title:'Spring Boot & REST APIs',
    track:'BACKEND',
    level:'Intermediate',
    duration:'12 weeks',
    lessons:'74 lessons',
    price:'₹16,999',
    blurb:'Build a production API with auth, migrations, caching and tests. Ship it behind a real domain.',
    instructor:'Arjun Mehta',
    builds:[
      'A production API with JWT auth and role-based access',
      'A migration and seeding pipeline you can run on day one',
      'A caching layer with metrics proving it earned its place'
    ]
  },
  {
    id:3,
    slug:'applied-ai-ml',
    title:'Applied AI & Machine Learning',
    track:'AI',
    level:'Intermediate',
    duration:'16 weeks',
    lessons:'92 lessons',
    price:'₹19,999',
    blurb:'From regression to transformers, every concept landing in a model you trained yourself.',
    instructor:'Noor Ali',
    builds:[
      'A classifier trained, evaluated and shipped behind an endpoint',
      'A recommendation model with an honest offline evaluation',
      'A fine-tuned transformer on a dataset you cleaned yourself'
    ]
  },
  {
    id:4,
    slug:'data-structures-algorithms',
    title:'Data Structures & Algorithms',
    track:'FUNDAMENTALS',
    level:'Beginner',
    duration:'10 weeks',
    lessons:'120 problems',
    price:'₹9,999',
    blurb:'The interview filter, taught as pattern recognition instead of memorisation.',
    instructor:'Rhea Kapoor',
    builds:[
      'Your own implementations of every structure you will be asked about',
      'A pattern journal you actually revise from',
      'Timed mock rounds with written feedback'
    ]
  },
  {
    id:5,
    slug:'system-design',
    title:'System Design for Backend Engineers',
    track:'BACKEND',
    level:'Advanced',
    duration:'8 weeks',
    lessons:'40 lessons',
    price:'₹17,999',
    blurb:'Queues, sharding, caching and failure modes — designed on a whiteboard, defended in review.',
    instructor:'Arjun Mehta',
    builds:[
      'A written design doc for a system at 10x its current load',
      'A failure-mode analysis of something you already shipped',
      'Two defended design rounds against a senior engineer'
    ]
  },
  {
    id:6,
    slug:'llm-engineering',
    title:'LLM Engineering & RAG Systems',
    track:'AI',
    level:'Advanced',
    duration:'8 weeks',
    lessons:'46 lessons',
    price:'₹21,999',
    blurb:'Retrieval, evaluation, tool use and cost control for language models that reach real users.',
    instructor:'Noor Ali',
    builds:[
      'A retrieval pipeline with a real evaluation harness',
      'An agent that calls your own tools and fails safely',
      'A cost and latency budget you can defend to a CFO'
    ]
  }
]

export const getCourse = (slug?:string) =>
  courses.find(course => course.slug === slug)
