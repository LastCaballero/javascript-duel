fonts.forEach(font => {
    const option = document.createElement("option");
    option.value = font;
    option.text = font;
    option.style.fontFamily = font ;
    fontFamily.appendChild(option);
});

fontFamily.addEventListener('change', () => {
    paragraph.style.fontFamily = fontFamily.value;
});
fontSize.addEventListener('input', () => {
    paragraph.style.fontSize = `${fontSize.value}px`;
});

color.addEventListener('input', () => {
    paragraph.style.color = color.value;
});

bold.addEventListener('change', () => {
    if (bold.checked) {
        paragraph.style.fontWeight = 'bold';
    } else {
        paragraph.style.fontWeight = 'normal';
    }
});

italic.addEventListener('change', () => {
    if (italic.checked) {
        paragraph.style.fontStyle = 'italic';
    } else {
        paragraph.style.fontStyle = 'normal';
    }
});

shadow.addEventListener('input', () => {
    paragraph.classList.add("shadowed-text");
    paragraph.style.textShadow = `${shadow.value}px ${shadow.value}px 5px ${shadowColor.value}`;
});

shadowColor.addEventListener('input', () => {
    paragraph.classList.add("shadowed-text");
    paragraph.style.textShadow = `${shadow.value}px ${shadow.value}px 5px ${shadowColor.value}`;
});