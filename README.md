# Grams Documentation

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/grams-foundation/grams-docs/blob/main/LICENSE)

Welcome to the Grams Documentation! This repository contains the official documentation for Grams, a decentralized platform that enables seamless integration of blockchain functionality into applications.

## Introduction

The Grams Documentation provides comprehensive resources and guides to help developers understand and utilize the features and capabilities of the Grams platform. Whether you are a beginner or an experienced blockchain developer, this documentation will serve as a valuable reference for building decentralized applications (dApps) using Grams.

## Getting Started

To get started with Grams, follow these steps:

1. **Installation**: Install the necessary tools and dependencies to set up your development environment for Grams. Refer to the [Installation Guide](/docs/getting-started/installation.md) for detailed instructions.

2. **Concepts**: Familiarize yourself with the key concepts and terminology related to Grams. The [Concepts Guide](/docs/getting-started/concepts.md) provides an overview of essential concepts and explains how they relate to the Grams ecosystem.

3. **Tutorials**: Explore our collection of tutorials that walk you through the process of developing dApps on Grams. The tutorials cover various topics, from basic wallet creation to advanced smart contract interactions.

4. **Reference**: Refer to the [API Reference](/docs/reference) for detailed information about the Grams SDK, smart contract integration, and other important APIs and services provided by Grams.

## Documentation

The Grams Documentation covers a wide range of topics, including:

- [Getting Started Guide](/docs/getting-started)
- [Concepts and Architecture](/docs/concepts)
- [Tutorials and Examples](/docs/tutorials)
- [API Reference](/docs/reference)
- [FAQs](/docs/faq)

Each section provides in-depth explanations, code examples, and practical guidance to help you navigate the Grams platform and build successful dApps.

## Contributing

We welcome contributions to the Grams Documentation! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/grams-foundation/grams-docs). We appreciate your contributions and efforts to make the documentation more comprehensive and user-friendly.

Before contributing, please read our [Contribution Guidelines](/CONTRIBUTING.md) for important information on how to contribute effectively.

## License

The Grams Documentation is open-source and distributed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). Your contributions to the documentation are highly appreciated and will be licensed under the same terms.

## Spec

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
