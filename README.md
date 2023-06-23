# Auto CLI

Simplifying Linux Command Usage

## Project Aims

Auto CLI aims to revolutionize the way users work with Linux commands by providing a user-friendly solution for discovering and generating command syntax. The project focuses on the following goals:

- Streamlined Command Discovery: Enable users to quickly and effortlessly find Linux commands by searching with keywords, descriptions, or specific tasks. No more time wasted searching through extensive documentation or online resources.
- Effortless Command Customization: Empower users to easily customize command options and parameters according to their specific requirements. Say goodbye to the frustration of deciphering complex command syntax.
- Intuitive Interface and Dynamic Forms: Create an intuitive user interface that automatically generates dynamic forms, presenting available options and parameters for selected commands. This simplifies the command customization process and ensures a seamless user experience.
  - Command option categorisation to keep the interface simpler
- Real-time Syntax Generation: Provide users with instant feedback on command syntax as they make selections in the dynamic form. Users can visualize the command structure in real-time, reducing errors and enhancing understanding.
- Comprehensive Command Library: Offer users access to a comprehensive command library containing detailed descriptions, options, parameters, and examples for a wide range of Linux commands. The library will be continually updated to ensure users have the most up-to-date information.
- User-Friendly Experience: Design the interface and interactions to be user-friendly, catering to both Linux experts and beginners. The project aims to make working with Linux commands accessible, intuitive, and efficient for all users.
- Cross-Platform Accessibility: Develop Auto CLI to be accessible across multiple platforms, including web browsers, desktop applications, and mobile devices. This enables users to access the solution seamlessly from their preferred devices.

Auto CLI strives to simplify the process of discovering, customizing, and understanding Linux commands. By achieving these project aims, it empowers users to work more efficiently and confidently with the Linux command-line interface, regardless of their experience level.

## Development

Auto CLI is built using Parcel, React, JavaScript, and React Router. These technologies enable the project to simplify Linux command usage by providing a user-friendly solution. React allows for the creation of reusable UI components and efficient state management. JavaScript provides the necessary logic and interactivity. React Router enables navigation within the application. Parcel is used for bundling and optimizing the project's assets. Overall, these technologies help achieve the project's aims of streamlining command discovery, effortless customization, dynamic forms, real-time syntax generation, comprehensive command library, user-friendly experience, and cross-platform accessibility.

### Auto CLI Project Structure

The Auto CLI project follows a modular structure to simplify the usage of Linux commands and provide a user-friendly solution for command discovery and generation. The project structure is organized as follows:

```
AutoCLI/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   ├── CommandSearch/
│   │   ├── CommandCustomization/
│   │   ├── DynamicForm/
│   │   ├── SyntaxPreview/
│   │   └── ...
│   ├── commands/
│   │   ├── command1.yaml
│   │   ├── command2.yaml
│   │   └── ...
│   ├── pages/
│   │   ├── Home/
│   │   ├── CommandDetails/
│   │   └── ...
│   ├── data/
│   │   ├── commands.json
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── index.html
│   ├── routes.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Directory Structure

- `public/`: This directory contains the public assets of the application.

- `src/`: The main source code directory of the Auto CLI app.

  - `components/`: This directory contains reusable React components used throughout the application. Each component represents a specific part of the app's user interface.

    - `CommandSearch/`: A component for quickly finding Linux commands by searching with keywords, descriptions, or specific tasks.

    - `CommandCustomization/`: A component that enables users to easily customize command options and parameters according to their specific needs.

    - `DynamicForm/`: A component responsible for generating dynamic forms with available options and parameters for selected commands.

    - `SyntaxPreview/`: A component that provides instant feedback on command syntax as users make selections in the dynamic form.

    - `...`: Additional components specific to the Auto CLI app.

  - `commands/`: This directory contains individual YAML files, each representing a Linux command. These files store the necessary information, such as the command name, description, options, parameters, and examples.

  - `pages/`: This directory contains the top-level components for each page or route of the application.

    - `Home/`: The homepage component.

    - `CommandDetails/`: A component for displaying detailed information about a specific command.

    - `...`: Additional page components specific to the Auto CLI app.

  - `data/`: This directory contains additional data files that may be used by the application.

    - `commands.json`: A JSON file that provides a condensed version of the command library or an alternative data source.

  - `index.html`: which serves as the entry point for the React application.

  - `App.js`: The main container component that houses the application. It imports necessary components and sets up routing.

  - `index.js`: The entry point of the application where the root component (`App`) is mounted and rendered in the DOM.

  - `routes.js`: A configuration file that defines the routes for the application using React Router. It maps URLs to corresponding components, enabling navigation between different pages.

- `.gitignore`: A file that specifies files and directories to be ignored by version control, such as the `node_modules` directory.

- `package.json`: A file that contains metadata about the project and lists its dependencies. It also includes scripts for running, building, and testing the application.

- `README.md`: The documentation file that provides instructions and information
