const markdownInput = document.getElementById("markdown");
const preview = document.getElementById("preview");

const renderMarkdown = () => {
  preview.innerHTML = marked.parse(markdownInput.value);
};

markdownInput.addEventListener("input", renderMarkdown);
renderMarkdown(); // Initial render
