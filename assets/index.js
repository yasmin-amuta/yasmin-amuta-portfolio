document.addEventListener("DOMContentLoaded", () => {
  //fonts
  document.fonts.ready.then(() => {
    // Cursor movement
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    });

    // Add hover effect on cursor when hovering over elements with class 'hover-target'
    document.querySelectorAll(".hover-target").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
      });
    });
    // PROJECTS & NAV BUTTON
    const openBtn = document.getElementById("openProjects");
    const closeBtn = document.getElementById("closeProjects");
    const modal = document.getElementById("projectsModal");

    openBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalTl.play();
    });

    closeBtn.addEventListener("click", () => {
      modalTl.reverse();
      modal.classList.add("hidden");
    });

    // GSAP
    // INTRO TIMELINE
    let introTl = gsap.timeline({ ease: "power4.out" });
    let split = SplitText.create(".title", {
      type: "lines",
    });

    introTl
      .from(".nav-pill", { yPercent: -100, opacity: 0, duration: 0.6 })
      .from(split.lines, {
        yPercent: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      })
      .from(".details", { yPercent: 100, opacity: 0, duration: 0.6 })
      .from(".circle-btn", { opacity: 0, duration: 0.7 });

    const modalTl = gsap.timeline({ paused: true, ease: "power4.out" });
    let splitWork = SplitText.create(".work-title", {
      type: "lines",
    });

    modalTl
      .from(splitWork.lines, {
        yPercent: 100,
        opacity: 0,
        delay: 0.2,
        duration: 1,
      })
      .from(".the-list", {
        opacity: 0,
        yPercent: 50,
        duration: 1.5,
        stagger: 0.5,
      });

    //HOVER INTERACTIONS
    gsap.utils.toArray(".circle-btn").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "power2.out" });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  });
});
