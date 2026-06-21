# Interview Prep Guide — CodeTribe Academy
## Neliswa Ngcobo | June 2026

---

## BEFORE THE INTERVIEW

- Open your Portfolio website in a browser tab (index.html)
- Open the Student Grader app in another tab (StudentGrader/index.html)
- Have your GitHub open
- Have the JobTracker running in Visual Studio (or have screenshots ready)
- Be in a quiet room, camera on, good lighting

---

## HOW TO INTRODUCE YOURSELF (60 seconds)

Say this (in your own words):

> "Hi, my name is Neliswa Ngcobo. I am a graduate software developer — I completed my degree in [your degree], and earlier this year I attended the CodeTribe Academy web development bootcamp where I learned HTML, CSS, and JavaScript.
>
> Outside of the bootcamp, I have also been building a full-stack web application called JobTracker using C#, ASP.NET Core MVC, and SQL Server — which is something I built to solve a real problem I personally experienced during my job search.
>
> I am really excited about this opportunity at CodeTribe because I want to keep growing as a developer in a structured, practical environment."

---

## PROJECT 1: THE PORTFOLIO WEBSITE

### What to say when you demo it:
> "This is my personal portfolio website. I built it using HTML5, CSS3, and a bit of JavaScript. It has three pages — a home page, an about page, and a contact page. I designed it myself and made it fully responsive so it works on mobile and desktop."

### Key things to point out during the demo:
1. **Navigation** — "The navigation uses Flexbox to keep the logo on the left and links on the right. On mobile it collapses into a hamburger menu using a CSS checkbox trick — no JavaScript needed."
2. **Responsive layout** — Resize the browser window and show it adjusting
3. **Hover effects** — Hover over the project cards to show the lift effect
4. **Contact form** — Show it submitting and displaying a success message

### Questions they might ask:
**"Why did you choose those colors?"**
> "I chose navy blue and amber/gold because they feel professional but not boring. Navy is trustworthy and serious, and the gold gives it warmth."

**"How did you make the hamburger menu without JavaScript?"**
> "I used a hidden checkbox in HTML. When you click the hamburger icon, it checks the checkbox. Then I used the CSS selector `input:checked ~ nav` to show the nav links. It's a pure CSS technique."

**"What is Flexbox?"**
> "Flexbox is a CSS layout system that makes it easy to align and distribute elements in a row or column. For example, my navbar uses `display: flex` with `justify-content: space-between` to push the logo to the left and the nav links to the right."

---

## PROJECT 2: STUDENT GRADER APP

This is your strongest JavaScript demo — it shows DOM manipulation, arrays, functions, conditionals, and event handling all in one app.

### What to say when you demo it:
> "This is the Student Grader app I built for the bootcamp. You type in a student's name and their mark, and the app automatically calculates their grade, tells you if they passed or failed, and shows a summary of class statistics."

### Walk through the demo live:
1. Add "Thabo Mokoena" with mark 85 → show grade A, Pass in green
2. Add "Amahle Dlamini" with mark 45 → show grade F, Fail in red
3. Add "Sipho Khumalo" with mark 72 → show grade B, Pass
4. Point out the stats updating (average, highest, lowest)
5. Show the filter — select "A" to filter to only top students
6. Show the sort — sort by mark highest to lowest
7. Try to submit with empty fields — show the validation error messages
8. Remove a student with the Remove button

### Key JavaScript concepts to explain:
**"How does the grading work?"**
> "I wrote a function called `getGrade()` that takes a mark number and uses if/else if to check which range it falls into. 80 and above is an A, 70 to 79 is a B, and so on. Then I have another function `getResult()` that returns Pass or Fail — I used a ternary operator for that one because it is just two options."

**"How do you store the students?"**
> "I store them in a JavaScript array called `students`. Each student is an object with properties: id, name, mark, grade, and result. When I add a student I use `array.push()` to add the new object. When I delete, I use `array.filter()` to return a new array without that student."

**"How does the table update automatically?"**
> "I have a `renderTable()` function that rebuilds the table HTML every time something changes — when a student is added, deleted, or when the filter or sort changes. It uses a `for` loop to go through the array and builds up an HTML string, then sets `tableBody.innerHTML` to that string."

**"What is the difference between let and const?"**
> "I use `const` for things that never change, like my DOM element references. I use `let` for things that do change, like the students array and the nextId counter. `const` protects me from accidentally reassigning something I did not mean to."

---

## PROJECT 3: JAVASCRIPT TASK FILES

If they ask about the three .js files (variables.js, datatypes_operators.js, conditionalStatements_loops.js):

> "These files are my study notes turned into code. I used them to practice and solidify my understanding of the core JavaScript concepts — variables and scope, all the data types and operators, and then loops and conditionals. I added detailed comments in each file so I can look back at them and remember what each concept does."

---

## PROJECT 4: JOBTRACKER (Your biggest project)

### What to say:
> "JobTracker is a full-stack web application I built independently outside of the bootcamp. I built it with C# and ASP.NET Core MVC following a layered architecture pattern, with SQL Server for the database and Entity Framework Core for data access. It has full user authentication so each person only sees their own applications."

### Architecture explanation (keep it simple):
> "The project is split into 5 separate layers. The DataLogic layer has my database models and DbContext. The Repository layer handles all the database queries. The BusinessLogic layer has my service classes with business rules. The ViewLogic layer has my ViewModels which carry data to the views. And the Web layer is the ASP.NET MVC app — the controllers and Razor views the user actually sees."

**Why did I do it this way?**
> "Layered architecture keeps concerns separated. If I need to swap my database from SQL Server to PostgreSQL, I only change the DataLogic and Repository layers — nothing in the Web layer needs to change. It also makes the code easier to test and understand."

### What it does:
- Register and log in with a personal account
- Add job applications (company, role, date, status, notes)
- Track status: Applied, Interview Scheduled, Offer Received, Rejected, etc.
- Edit and delete applications
- Each user only sees their own data (security)
- Dashboard shows total applications, pending, interviews, and offers

---

## GENERAL QUESTIONS

**"Why do you want to join CodeTribe Academy?"**
> "I want to keep growing as a developer in a structured, mentored environment. The bootcamp gave me a strong foundation in web development, and I want to build on that. CodeTribe has a great reputation for producing work-ready developers, and that is exactly where I want to be."

**"What is your biggest strength?"**
> "I am persistent. When I built the JobTracker, I hit a lot of errors — missing packages, migration issues, build failures. Each time I figured out what was wrong and fixed it. I do not give up when things get hard."

**"What is something you found difficult?"**
> "Understanding how all the layers connect in a big project was challenging at first. I had to really think about which layer is responsible for what, and how data flows from the database all the way to the view. But once it clicked, it made me understand why experienced developers structure projects that way."

**"Where do you see yourself in 2 years?"**
> "I want to be a confident full-stack developer, comfortable building real products from scratch. I also want to understand cloud deployment and CI/CD pipelines better. In two years I want to be the person someone else can learn from."

**"Do you have any questions for us?"**
> "Yes — what does a typical day look like for a learner at CodeTribe? And what projects will I be building during the programme?"

---

## ON THE DAY — QUICK TIPS

1. **Slow down** — you know more than you think, breathe and speak clearly
2. **Say "let me show you"** — demos are better than descriptions
3. **If you don't know something** — say "I haven't worked with that yet but I know how to learn it and I would look it up"
4. **Talk through your thinking** — interviewers want to see how your mind works, not just the right answer
5. **Be proud of the Student Grader and JobTracker** — not everyone demos working code

---

## QUICK REFERENCE: KEY TERMS

| Term | What to say |
|---|---|
| HTML | "HyperText Markup Language — the structure of a webpage" |
| CSS | "Cascading Style Sheets — the styling and layout" |
| JavaScript | "The programming language that makes web pages interactive" |
| DOM | "Document Object Model — the HTML elements as JavaScript can see and change them" |
| Flexbox | "A CSS layout tool for aligning elements in a row or column" |
| Media query | "CSS code that applies different styles at different screen sizes" |
| Array | "An ordered list of values stored in a single variable" |
| Object | "A collection of key-value pairs — like a record with named fields" |
| Function | "A reusable block of code that runs when you call it" |
| Event listener | "Code that waits for something to happen, like a button click" |
| ASP.NET Core MVC | "A C# framework for building web apps with Models, Views, and Controllers" |
| Entity Framework | "A tool that lets me write C# code instead of SQL to work with the database" |

Good luck tomorrow, Neliswa. You have built real projects. You are ready.
