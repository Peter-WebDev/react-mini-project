# Popcorn+ a React Mini Project

Jump straight to [Usage](#usage)

## Project description

Popcorn+ is a modern web application designed for movie enthusiasts, built using React and leveraging the power of TanStack Query for efficient data management and Styled Components for streamlined styling. The application aims to provide a seamless and engaging experience for users to explore and discover movies.

### Key Features:

Genre-Based Movie Exploration:

- Users can browse movies categorized by genres on the homepage.
- Dedicated genre pages display comprehensive movie listings with infinite scrolling capabilities.

Detailed Movie Information:

- Individual movie pages offer in-depth information, including titles, descriptions, release dates, and ratings.
- Links to official movie homepages are provided where available.

User Favorites:

- Users can curate personalized movie lists by adding films to their favorites, accessible through the "My List" page.

## Tech-Stack

- React: For building the user interface.
- TanStack Query: For data fetching, caching, and state management.
- Styled Components: For CSS-in-JS styling.
- TMDB API: As the primary source for movie data.
- React Router: For navigation
- TypeScript: Static typing to catch errors early, improve code clarity, and boost productivity.
- Git: Version management
- Github: Centralized version history storage

## Development process

The project began with the selection of the TMDB API due to its robust features, after initial consideration of the OMDb API. Styled Components were chosen for styling to maintain a clean and organized codebase.

Wireframes were created in Figma to visualize the application's layout.
Github was utilized for issue tracking and version control.
The application's structure was set up in main.tsx, followed by the development of core components like the header, main layout, and Card and HomePage components.

The project then continued with the creation of the other pages.
A refactoring took place at the end of the project to remove the CardList component, and to create the linkUtils.ts file, to handle the routing to individual movie pages.

### Challenges and learnings

#### API Selection:

- Initially, the OMDb API was considered, but its limited search functionality led to the adoption of the more comprehensive TMDB API.
- Lesson: Thoroughly evaluating API capabilities is crucial before development begins.

#### Routing and Component Structure:

- Issues arose with React Router and the CardList component, particularly in maintaining consistent routing across different pages.
- Lesson: Refactoring and creating a utility function for link generation resolved the routing issues, highlighting the importance of maintainable and reusable code.

## Usage

### Prerequisites

- Node.js (version 16 or higher)
- npm (version 8 or higher)

### Installation

1.  Clone the repository:
    ```bash
    git clone [repository URL]
    ```
2.  Navigate to the project directory:
    ```bash
    cd [project directory]
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

1.  Start the development server:
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:5173`. Or check what port you get in the terminal.

### Environment Variables

Create a `.env` file in the root directory of your project and add your API key:
VITE_TMDB_API_KEY=your_api_key_here

### Learn more on the [React](https://react.dev/) website and checkout [Styled Components](https://styled-components.com/)

## Krav

### Krav för Godkänt

- [x] Projektet innehåller och använder minst 6 stycken komponenter varav minst 2 stycken är “statefulla"-komponenter
- [x] React Router har använts för att dynamiskt uppdatera URL’en
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil
- [x] Uppgiften lämnas in i tid
- [x] Muntlig presentation är genomförd

### Krav för Väl Godkänt

- [x] Alla punkter för godkänt är uppfyllda
- [x] Ett “CSS i JS“ lib skall användas för att skriva CSS (ex JSS, Styled-Components, mm)
- [x] Data från ett web-API hämtas och visas på sidan
