const create_element = (class_) => {
    const element = document.createElement("div")

    element.classList.add(class_)

    return element
}

const init = () => {
    const all_text_marker = document.querySelectorAll("strong[color]")

    for (let i = 0; i < all_text_marker.length; i += 1) {
        const text_marker = all_text_marker[i]
        const color = text_marker.attributes.color.value
        
        const top = create_element("top")
        const left = create_element("left")
        const bottom = create_element("bottom")
        const right = create_element("right")

        top.style.backgroundColor = color
        top.style.borderColor = color
        
        left.style.backgroundColor = color
        left.style.borderColor = color

        bottom.style.backgroundColor = color
        bottom.style.borderColor = color
        
        right.style.backgroundColor = color
        right.style.borderColor = color

        text_marker.appendChild(top)
        text_marker.appendChild(left)
        text_marker.appendChild(bottom)
        text_marker.appendChild(right)
    }
}

init()
