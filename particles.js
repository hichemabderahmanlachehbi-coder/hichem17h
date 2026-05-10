for (let i = 0; i < 30; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "vw";
  p.style.bottom = "0";
  p.style.animationDuration = 3 + Math.random() * 5 + "s";
  p.style.animationDelay = Math.random() * 3 + "s";
  p.style.width = p.style.height = 3 + Math.random() * 5 + "px";
  document.body.appendChild(p);
}
