# 🚀 ts-quickstart-boilerplate

A TypeScript boilerplate for quickly setting up new projects.

## 📋 Description

This project serves as a template to rapidly initiate development with TypeScript. It includes a basic configuration with essential packages for TypeScript development.

## 📂 Project Structure

```
ts-quickstart-boilerplate/
├── dist/
├── prisma/
│   └── schema.prisma
├── src/
│   └── main.ts
├── package.json
├── README.md
└── tsconfig.json
```

- **src/**: Contains the TypeScript source code.
- **prisma/**: Holds the Prisma schema file for database management.
- **dist/**: Output directory for compiled code.

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ts-quickstart-boilerplate.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ts-quickstart-boilerplate
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## 🛠️ Usage

- **Development Mode**: Start the application with automatic restarts on code changes.

  ```bash
  npm run dev
  ```

- **Build**: Compile TypeScript code to JavaScript.

  ```bash
  npm run build
  ```

- **Production Mode**: Run the compiled application.

  ```bash
  npm start
  ```

## 📄 License

This project is licensed under the ISC License.