# FocusFlow - Landing Page
This is a Landing page built only with **`HTML, CSS and JS`** about FocusFlow, an invented brand name for a smart productivity application. 

---
## NOTE

*This website is only for practice* and some buttons or links may not work (Examples: the purchase plans buttons, and the information links of the footer, don't redirect to any page. They have the `src` attribute set to `#`)

---

`HTML`:
1. **Above the fold** with title, description and CTA.
2. **Value Proposition** section with the main features of the app
3. **Testimonial section** with some feedbacks about the product by companies
4. Section about **plans purchases**
5. **FAQ** section with accordions. 
6. **Footer**

`CSS`
- Responsive for mobile and desktop with @media
- Mobile first approach
- Grid & Flex
- `:root` variables

`JavaScript`
- **Scroll-padding-top** property dynamically set by taking the exact `offsetHeight` of the navbar
- **Accordion opening mechanism**: when clicking an item in the list, this will change color (by adding class `active`), the arrow will rotate (by adding the class `rotated`) and the content below will transite from height 0 to auto (by adding class `open`). If an item is already opened the other ones must be closed without any of those classes, otherwise the content will open.

