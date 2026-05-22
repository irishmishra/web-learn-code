export const tutorials = [
  {
    slug: "html5",
    title: "HTML5",
    icon: "HTML",
    level: "Beginner",
    color: "from-orange-500 to-red-500",
    theory: "HTML gives a web page structure. You use semantic elements to describe content, improve accessibility, and help search engines understand the document.",
    syntax: `<article>
  <h1>Semantic HTML</h1>
  <p>Structure content with meaning.</p>
</article>`,
    output: "Semantic article card",
    practice: ["Create a pricing table", "Build an accessible signup form", "Add metadata for SEO"]
  },
  {
    slug: "css3",
    title: "CSS3",
    icon: "CSS",
    level: "Beginner",
    color: "from-blue-500 to-cyan-500",
    theory: "CSS controls layout, color, typography, animation, and responsive behavior. Modern CSS uses Grid, Flexbox, custom properties, and media queries.",
    syntax: `.card {
  display: grid;
  gap: 1rem;
  border-radius: 8px;
}`,
    output: "Styled responsive card",
    practice: ["Recreate a dashboard card", "Add dark mode variables", "Animate a menu"]
  },
  {
    slug: "javascript",
    title: "JavaScript",
    icon: "JS",
    level: "Essential",
    color: "from-amber-400 to-yellow-600",
    theory: "JavaScript adds behavior to the web. It handles state, events, APIs, validation, UI updates, and application logic.",
    syntax: `const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Learning by doing");
});`,
    output: "Interactive button",
    practice: ["Build a todo list", "Fetch API data", "Create a quiz timer"]
  },
  {
    slug: "python",
    title: "Python",
    icon: "PY",
    level: "Popular",
    color: "from-blue-700 to-amber-400",
    theory: "Python is a readable general-purpose language for automation, data, APIs, scripts, AI tooling, and backend services.",
    syntax: `skills = ["syntax", "functions", "apis"]
for skill in skills:
    print(skill.upper())`,
    output: "Console list",
    practice: ["Parse a CSV", "Create a Flask API", "Automate file cleanup"]
  },
  {
    slug: "java",
    title: "Java",
    icon: "JV",
    level: "Backend",
    color: "from-red-600 to-orange-500",
    theory: "Java emphasizes object-oriented design, type safety, portability, and enterprise-grade backend architecture.",
    syntax: `public class App {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}`,
    output: "JVM console output",
    practice: ["Model a bank account", "Build REST endpoints", "Use collections"]
  },
  {
    slug: "cpp",
    title: "C++",
    icon: "C++",
    level: "Advanced",
    color: "from-indigo-600 to-blue-500",
    theory: "C++ is used for high-performance systems, games, native tooling, robotics, and memory-conscious software.",
    syntax: `std::vector<int> scores {98, 87, 91};
for (int score : scores) {
  std::cout << score << "\\n";
}`,
    output: "Compiled console output",
    practice: ["Use vectors", "Implement binary search", "Profile a loop"]
  },
  {
    slug: "c",
    title: "C",
    icon: "C",
    level: "Systems",
    color: "from-slate-600 to-indigo-500",
    theory: "C teaches fundamentals close to the machine: memory, pointers, structs, compilation, and operating-system level thinking.",
    syntax: `#include <stdio.h>
int main(void) {
  printf("Hello C\\n");
  return 0;
}`,
    output: "Native executable output",
    practice: ["Use pointers", "Read a file", "Create a linked list"]
  },
  {
    slug: "csharp",
    title: "C#",
    icon: "C#",
    level: "Versatile",
    color: "from-violet-600 to-fuchsia-500",
    theory: "C# powers .NET APIs, desktop apps, cloud services, game development with Unity, and enterprise tooling.",
    syntax: `var courses = new[] { "C#", ".NET", "APIs" };
foreach (var course in courses) {
  Console.WriteLine(course);
}`,
    output: ".NET console output",
    practice: ["Build a Web API", "Use LINQ", "Create a Unity script"]
  }
];

export const stats = [
  ["120K+", "active learners"],
  ["800+", "guided lessons"],
  ["96%", "completion lift"],
  ["42", "career paths"]
];

export const testimonials = [
  ["Maya R.", "The tutorial pages feel like a reference, workbook, and dashboard in one product."],
  ["Jordan K.", "The playground helped my cohort debug faster and actually understand browser output."],
  ["Priya S.", "The admin tools and progress tracking make it credible for schools and teams."]
];
