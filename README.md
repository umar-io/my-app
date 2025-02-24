# Convert Document To Speech

A Next.js application that transforms text into natural-sounding speech using advanced AI voices. Ideal for content creators, educators, and anyone needing accessibility solutions.

## Description

This project provides a simple and intuitive interface for converting text into speech. Users can input text, select a language and voice style, and generate an audio output.  It leverages Clerk for authentication, Shadcn UI components for a modern look and feel, and Supabase for potential backend data storage.

## Installation

Follow these steps to get the project running on your local machine:

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd my-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install # or yarn install or pnpm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory. You'll need to configure Clerk, Supabase, and any other necessary API keys here. Refer to the respective service's documentation for specific instructions.  Example keys you'll likely need:

    ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the development server:**

    ```bash
    npm run dev # or yarn dev or pnpm dev
    ```

    Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal) to view the application.

## Usage

1.  **Enter Text:** Type or paste the text you want to convert into the provided text area on the homepage.
2.  **Select Options:** Choose your preferred language and voice style using the dropdown menus.
3.  **Convert:** Click the "Convert" button to generate the speech output.

## Contributing

Contributions are welcome! Here's how you can contribute to the project:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3.  **Make your changes** and commit them with descriptive messages.
4.  **Push your changes** to your forked repository.
5.  **Submit a pull request** to the main branch of the original repository.

## Technologies Used

*   Next.js
*   React
*   TypeScript
*   Tailwind CSS
*   Clerk (Authentication)
*   Supabase (Potential Backend)
*   Shadcn UI (Components)
*   Lucide React (Icons)

## License

This project is open-source and available under the [MIT License](LICENSE).

[![Built with Dokugen](https://img.shields.io/badge/Built%20with-Dokugen-brightgreen)](https://github.com/samueltuoyo15/Dokugen)
