Mastery Task: The "Responsive Product Showcase"
The Scenario
You are building a Product Showcase for a high-end tech brand. They want a "featured products" section where clicking a product expands it to show more details (like price and a 'Buy Now' button), but they want the animation to be staggered and professional.

Your Goal
Create a new folder 05-flex-panel-mastery. You will build a layout that uses the same logic but applies it to a Product Card scenario.

Requirements
Staggered Animation: * When a product is clicked, it should expand (using flex: 5).

The price tag should slide in from the left and the "Buy Now" button should slide in from the right only after the expansion is finished.

State Management:

If I click a new product while one is already open, the first one should close automatically. (This is a "Pro" logic challenge: you'll need to loop through all panels and remove the .open class from others).

Content Requirement:

Each panel must have:

A top hidden element (Price).

A middle visible element (Product Name).

A bottom hidden element (Buy Button).