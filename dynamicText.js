const dynamicRoleText = () => {

  const dynamicText = document.getElementById("dynamic-text");

  const roles = [
    "Frontend Web Developer",
    "Creative UI Designer",
    "Coder",
    "JavaScript Learner",
    "Building Modern Websites"
  ];

  let roleIndex = 0;
  let charIndex = 0;

  function typeText() {

    const currentRole = roles[roleIndex];

    // 1 by 1 letter add hoga
    dynamicText.textContent =
      currentRole.slice(0, charIndex);

    charIndex++;

    // pura word complete hone tak
    if (charIndex <= currentRole.length) {

      setTimeout(typeText, 100);

    } else {

      // next text se pehle thoda wait
      setTimeout(() => {

        roleIndex =
          (roleIndex + 1) % roles.length;

        charIndex = 0;

        typeText();

      }, 1500);
    }
  }

  typeText();
};

export default dynamicRoleText;