// يعرض عناوين ملفات الدورة من مجلد /courses (قالب ثابت)
const courses = [
  {file: "courses/01-intro-to-cybersecurity.md", title: "مقدمة في الأمن السيبراني"},
  {file: "courses/02-web-app-security.md", title: "أمن تطبيقات الويب"},
  {file: "courses/03-network-security.md", title: "أمن الشبكات"},
  {file: "courses/04-pentesting-methodology.md", title: "منهجية اختبار الاختراق الأخلاقي"},
  {file: "courses/05-defensive-tools.md", title: "أدوات الدفاع والتحليل"}
];

function init(){
  const ul = document.getElementById('course-list');
  courses.forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="course-title">
        <h3>${c.title}</h3>
        <span class="course-meta">ملف: ${c.file.split('/').pop()}</span>
      </div>
      <p>ملف المحتوى: <code>${c.file}</code></p>
      <p><a href="${c.file}">عرض محتوى الدورة (Markdown)</a></p>
    `;
    ul.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', init);
