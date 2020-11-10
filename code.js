
let buttons = Array.from(document.getElementsByClassName('toggle'))

style = (element, name) =>
    element.currentStyle ? element.currentStyle[name] :
    window.getComputedStyle ? window.getComputedStyle(element).getPropertyValue(name) :
    null

collapse = button =>
{
    card.classList.toggle('active-card')
    button.classList.toggle('active-toggle')
    card.style.paddingBottom = '1em'
    button.style.marginBottom = '0'
    button.style.opacity = '50%'
    content.style.maxHeight = '0px'
}

expand = button =>
{
    card.classList.toggle('active-card')
    button.classList.toggle('active-toggle')
    card.style.paddingBottom = '4em'
    button.style.marginBottom = '0.5em'
    button.style.opacity = '100%'
    content.style.maxHeight = content.scrollHeight + 'px'
}

toggle = (button, i) =>
{
    card = button.parentElement
    content = button.nextElementSibling
    foot_image = card.nextElementSibling
    style(content, 'max-height') != '0px' ? collapse(button) : expand(button)
    // collapse other cards that are open
    buttons.filter((button, j) => i != j).forEach
    (
        button =>
        {
            card = button.parentElement
            content = button.nextElementSibling
            style(content, 'max-height') != '0px' ? collapse(button) : null
        }
    )
}

buttons.forEach
(
    (button, i) =>
    {
        button.addEventListener('click', event => toggle(button, i))
        button.addEventListener('mouseover', event => button.style.opacity = '100%')
        button.addEventListener('mouseout', event => button.style.opacity = button.classList.contains('active-toggle') ? '100%' : '50%')
    }
)
