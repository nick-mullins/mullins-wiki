async function fetchData() {
    const res = await fetch('data.json');
    const data = await res.json();
  
    // Header
    document.getElementById('name').textContent = data.name;
    document.getElementById('headline').textContent = data.headline;
  
    // Footer
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footerName').textContent = data.name;
  
    // Contact
    document.getElementById('contact').innerHTML = `
      <h2>Contact</h2>
      <p>Email: ${data.email}</p>
      <p>GitHub: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/${data.linkedin}" target="_blank">${data.linkedin}</a></p>
    `;
  
    // About
    document.getElementById('about').innerHTML = `
      <h2>About Me</h2>
      <p>${data.about}</p>
    `;
  
    // Experience
    const expHTML = data.experience.map(
      (job) => `<li><strong>${job.role}</strong> @ ${job.company} (${job.years}): ${job.summary}</li>`
    ).join('');
    document.getElementById('experience').innerHTML = `<h2>Experience</h2><ul>${expHTML}</ul>`;
  
    // Skills
    document.getElementById('skills').innerHTML = `
      <h2>Skills</h2>
      <p>${data.skills.join(', ')}</p>
    `;
  }
  
  function downloadResume() {
    window.open('resume.pdf', '_blank');
  }
  
  fetchData();
  
  const themeToggleBtn = document.getElementById('theme-toggle');

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
