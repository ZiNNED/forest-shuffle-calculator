# Contributing to Forest Shuffle Calculator

Thank you for your interest in contributing to the Forest Shuffle Calculator! This guide will help you get started.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an [issue](https://github.com/ZiNNED/forest-shuffle-calculator/issues) and include:

- A clear description of the problem
- Steps to reproduce the issue
- What you expected to happen vs. what actually happened
- Screenshots, if applicable
- Which expansion (Forest, Dartmoor, Exmoor) the bug relates to

### Suggesting Features

Feature ideas are welcome! Please open an [issue](https://github.com/ZiNNED/forest-shuffle-calculator/issues) with the **enhancement** label and describe:

- What the feature would do
- Why it would be useful
- Any implementation ideas you have

### Submitting Changes

1. **Fork** the repository
2. **Create a branch** for your changes (`git checkout -b my-feature`)
3. **Make your changes** and commit them with clear, descriptive messages
4. **Push** your branch to your fork (`git push origin my-feature`)
5. **Open a Pull Request** against the `main` branch

### Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR
- Describe what your changes do and why
- Include screenshots for any visual changes
- Make sure the app still works correctly after your changes
- The repository owner will review all PRs before merging

## Development Setup

This is a static web app with no build step required. To run it locally:

```bash
# Clone the repo
git clone https://github.com/ZiNNED/forest-shuffle-calculator.git
cd forest-shuffle-calculator

# Serve with any static file server
python3 -m http.server 8000
# or
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Card Data Conventions

Cards are defined in `cards-forest.js` and `cards-dartmoor.js`. Each card follows a JSON structure with scoring rules. The engine in `app.js` interprets these rules to calculate scores automatically. When adding or editing cards:

- Keep scoring logic data-driven — avoid adding code paths in `app.js`
- Test that existing cards still work when adding new ones
- Run `node -c app.js` to check for syntax errors

## Code of Conduct

Be respectful and constructive in all interactions. We're all here because we love Forest Shuffle!

## Questions?

If you have questions, feel free to open an issue — we're happy to help.