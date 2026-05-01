# Mastery Task: Accessibility Menu
**Based on:** JavaScript 30 - Day 1 (Drum Kit)

## 🎯 The Scenario
Build a keyboard and click-driven accessibility menu that provides audio-visual feedback when an action is triggered.

## 🛠 Technical Requirements
- [ ] **Event Listener:** Use `keydown` for keys 1, 2, and 3.[cite: 1]
- [ ] **Click Support:** Allow mouse clicks to trigger the same logic as the keyboard.
- [ ] **Visual Feedback:** Use `classList.add` to trigger CSS transitions.[cite: 1]
- [ ] **Audio Feedback:** Play an HTML5 audio element linked via `data-key`.[cite: 1]
- [ ] **Cleanup:** Use the `transitionend` event to remove the active state.[cite: 1]
- [ ] **Dynamic Logic:** Toggle a `.dark-mode` class on the body when "Action 1" is triggered.

## 💡 Concepts Mastered
- DRY (Don't Repeat Yourself) principle by sharing logic between events.
- Manipulating the DOM based on `data-*` attributes.[cite: 1]
- Using `transitionend` for performant UI updates.[cite: 1]